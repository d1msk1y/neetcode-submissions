class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet: Set<number> = new Set(nums)
        let maxStreak: number = 0;

        for (let num of numSet){
            let streak: number = 1;
            if(numSet.has(num - 1)){
                continue
            } else {
                let matchNum: number = num;
                while(true){
                    matchNum += 1;
                    if(numSet.has(matchNum)){
                        console.log(matchNum)
                        streak += 1
                    } else {
                        if (streak > maxStreak){
                            maxStreak = streak;
                        }
                        console.log(`Streak: ${streak}`)
                         console.log(`Max Streak: ${maxStreak}`)

                        break;
                    }
                }
            }
        }

        return maxStreak;
    }
}
