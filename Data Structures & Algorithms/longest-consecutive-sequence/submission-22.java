class Solution {
    public int longestConsecutive(int[] nums) {
        int maxStreak = 0;
        Set<Integer> numsSet = new HashSet<>();

        for (int num : nums){
            numsSet.add(num);
        }

        for(int num : nums){
            int streak = 1;
            if(numsSet.contains(num - 1)){
                continue;
            }

            while(true){
                if(numsSet.contains(num + streak)){
                    streak++;
                    continue;
                }
                break;
            }

            if (streak > maxStreak) {
                maxStreak = streak;
            }
        }

        return maxStreak;
    }
}
