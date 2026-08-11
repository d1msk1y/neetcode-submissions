class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // go through each num in nums
        // does the array have target - current num 

        const numsMap = new Map<number, number>()

        for(let i = 0; i < nums.length; i++){
            const currentNum = nums[i]
            console.log(`Looking at ${currentNum} at ${i}`)
            if(numsMap.get(nums[i]) == undefined){
                console.log("Setting it to map " + numsMap.get(nums[i]))
                numsMap.set(nums[i], i)
            }
            const restNumIndex = numsMap.get(target-currentNum)
            if(restNumIndex != null && restNumIndex != i){
                console.log(restNumIndex)
                return [i, restNumIndex]
            }
            
        }
    }
}
