class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMap = new Map<number, number>()
        

        for(let i = 0; i < nums.length; i++){
            const currentNum = nums[i]
            const complement = target-currentNum

            const restNumIndex = numsMap.get(complement)
            if(restNumIndex != null && restNumIndex != i){
                return [i, restNumIndex]
            }

            if(numsMap.get(nums[i]) == undefined){
                numsMap.set(nums[i], i)
            }
            
        }
    }
}
