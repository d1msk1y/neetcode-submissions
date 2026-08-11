class Solution {
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;

        nums.sort((a, b) => a - b);
        
        let counter: number = 1;
        let sequences: number[] = [];

        for (let i = 0; i < nums.length - 1; i++) {
            // Skip duplicates (e.g. 1 and 1)
            if (nums[i] === nums[i + 1]) {
                continue;
            }

            // If consecutive, increment counter
            if (nums[i + 1] - nums[i] === 1) {
                counter++;
            } else {
                // Gap found! Push completed sequence and reset
                sequences.push(counter);
                counter = 1;
            }
        }
        
        // Don't forget to push the final sequence after loop finishes!
        sequences.push(counter);

        // Sort sequences to find max
        sequences.sort((a, b) => a - b);

        return sequences[sequences.length - 1];
    }
}