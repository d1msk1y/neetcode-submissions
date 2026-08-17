class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if(nums.length == 0){
            return 0
        }
        let maxStreak = 1;
        const numsSet = new Set(nums);

        for (let i = 0; i <= nums.length; i++){
            let streak = 1;
            if(numsSet.has(nums[i] - 1)){
                continue;
            }
            let nextNum = nums[i] +1
            while(true){
                if(numsSet.has(nextNum)){
                    streak += 1
                if(streak > maxStreak){
                    maxStreak = streak;
                }
                nextNum +=1
                continue;
                } else {
                    break
                }

            }
        }
        return maxStreak
    }
}
