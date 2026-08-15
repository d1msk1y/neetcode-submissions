class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numsSet = new Set(nums)
        let maxStreak = 0;
        
        for (const num of numsSet){
            let streak = 1
            if (numsSet.has(num - 1)){
                continue
            } else {
                let matchNum: number = num;
                while (true){
                    matchNum += 1
                    if(numsSet.has(matchNum)){
                        streak += 1
                    } else {
                        if(streak > maxStreak){
                            maxStreak = streak;
                        }
                        break
                    }
                }
            }
        }

        return maxStreak
    }
}
