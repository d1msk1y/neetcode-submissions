class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsSet = new Map<number, number>();

        for (let i: number = 0; i < nums.length; i++){
            numsSet.set(nums[i], i);
        }

        for (let i: number = 0; i < nums.length; i++){
            if(numsSet.has(target - nums[i]) && numsSet.get(target - nums[i]) != i){
                return [i, numsSet.get(target - nums[i])]
            }
        }
        return [];
    }
}
