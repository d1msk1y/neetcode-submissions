class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMap = new Map<number, number>()
        

        for(let i = 0; i < nums.length; i++){
            const complement = target-nums[i]

            const restNumIndex = numsMap.get(complement)
            if(restNumIndex != null && restNumIndex != i){
                return [i, restNumIndex]
            }

            numsMap.set(nums[i], i)
        }
    }
}
