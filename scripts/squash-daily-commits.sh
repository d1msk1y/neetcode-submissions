#!/usr/bin/env bash
#
# Squash all commits made on a given calendar day (Europe/Zurich time) into a
# single commit, preserving the tree of the last commit of that day and
# concatenating every original commit message into the new commit body.
#
# Usage:
#   scripts/squash-daily-commits.sh [YYYY-MM-DD] [branch]
#
#   YYYY-MM-DD  Target day to squash. Defaults to yesterday (Europe/Zurich).
#   branch      Branch to operate on. Defaults to "main".
#
# The script only rewrites commits; it does not push. Run `git push
# --force-with-lease` yourself (or let the CI workflow do it) once you are
# happy with the result.
#
# Safe to run repeatedly: if the target day already has 0 or 1 commits, the
# script is a no-op and exits 0 without changing HEAD.

set -euo pipefail

export TZ="Europe/Zurich"

TARGET_DATE="${1:-$(date -d 'yesterday' +%Y-%m-%d)}"
BRANCH="${2:-main}"

echo "Target date: $TARGET_DATE (Europe/Zurich)"
echo "Branch: $BRANCH"

git checkout "$BRANCH"

# Oldest -> newest list of "hash|local-date" for the whole branch history.
mapfile -t COMMITS < <(git log --reverse --format='%H|%ad' --date=format-local:%Y-%m-%d "$BRANCH")

if [[ ${#COMMITS[@]} -eq 0 ]]; then
  echo "No commits found on $BRANCH"
  exit 0
fi

first_idx=-1
last_idx=-1
for i in "${!COMMITS[@]}"; do
  entry="${COMMITS[$i]}"
  date="${entry#*|}"
  if [[ "$date" == "$TARGET_DATE" ]]; then
    [[ $first_idx -eq -1 ]] && first_idx=$i
    last_idx=$i
  fi
done

if [[ $first_idx -eq -1 ]]; then
  echo "No commits found for $TARGET_DATE, nothing to do."
  exit 0
fi

count=$((last_idx - first_idx + 1))
if [[ $count -le 1 ]]; then
  echo "Only $count commit(s) on $TARGET_DATE, nothing to squash."
  exit 0
fi

echo "Found $count commits on $TARGET_DATE, squashing..."

# Parent for the new squashed commit: the commit right before the first
# commit of the target day, or nothing if the target day starts the history.
parent_args=()
if [[ $first_idx -gt 0 ]]; then
  prev_entry="${COMMITS[$((first_idx - 1))]}"
  parent_hash="${prev_entry%%|*}"
  parent_args=(-p "$parent_hash")
fi

last_entry="${COMMITS[$last_idx]}"
last_hash="${last_entry%%|*}"
tree="$(git rev-parse "${last_hash}^{tree}")"

author_name="$(git log -1 --format='%an' "$last_hash")"
author_email="$(git log -1 --format='%ae' "$last_hash")"
author_date="$(git log -1 --format='%aI' "$last_hash")"
committer_name="$(git log -1 --format='%cn' "$last_hash")"
committer_email="$(git log -1 --format='%ce' "$last_hash")"
committer_date="$(git log -1 --format='%cI' "$last_hash")"

message="Daily squash: $TARGET_DATE ($count commits)"$'\n'
for ((i = first_idx; i <= last_idx; i++)); do
  entry="${COMMITS[$i]}"
  hash="${entry%%|*}"
  subject="$(git log -1 --format='%s' "$hash")"
  message+=$'\n'"- $subject"
  body="$(git log -1 --format='%b' "$hash")"
  if [[ -n "$body" ]]; then
    while IFS= read -r line; do
      message+=$'\n'"  $line"
    done <<< "$body"
  fi
done

new_hash="$(
  GIT_AUTHOR_NAME="$author_name" GIT_AUTHOR_EMAIL="$author_email" GIT_AUTHOR_DATE="$author_date" \
  GIT_COMMITTER_NAME="$committer_name" GIT_COMMITTER_EMAIL="$committer_email" GIT_COMMITTER_DATE="$committer_date" \
  git commit-tree "$tree" "${parent_args[@]}" -m "$message"
)"

parent="$new_hash"

# Replay every commit after the squashed day, unchanged, on top of the new
# squashed commit (their hashes change because their parent changed, but
# tree/message/author/committer metadata is preserved exactly).
for ((i = last_idx + 1; i < ${#COMMITS[@]}; i++)); do
  entry="${COMMITS[$i]}"
  hash="${entry%%|*}"
  tree="$(git rev-parse "${hash}^{tree}")"
  msg="$(git log -1 --format='%B' "$hash")"
  a_name="$(git log -1 --format='%an' "$hash")"
  a_email="$(git log -1 --format='%ae' "$hash")"
  a_date="$(git log -1 --format='%aI' "$hash")"
  c_name="$(git log -1 --format='%cn' "$hash")"
  c_email="$(git log -1 --format='%ce' "$hash")"
  c_date="$(git log -1 --format='%cI' "$hash")"

  parent="$(
    GIT_AUTHOR_NAME="$a_name" GIT_AUTHOR_EMAIL="$a_email" GIT_AUTHOR_DATE="$a_date" \
    GIT_COMMITTER_NAME="$c_name" GIT_COMMITTER_EMAIL="$c_email" GIT_COMMITTER_DATE="$c_date" \
    git commit-tree "$tree" -p "$parent" -m "$msg"
  )"
done

git update-ref "refs/heads/$BRANCH" "$parent"
git checkout "$BRANCH"

echo "Done. $BRANCH now points at $parent"
echo "Review with: git log --oneline"
echo "Push with:   git push --force-with-lease origin $BRANCH"
