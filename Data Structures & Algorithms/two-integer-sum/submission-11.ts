class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMap = new Map<number, number>()

        for ( let i = 0; i < nums.length; i++ ){
            const complement = target - nums[i]
            if(numsMap.has(complement)){
                return [i, numsMap.get(complement)]
            }
            numsMap.set(nums[i], i)
        }
    }
}
