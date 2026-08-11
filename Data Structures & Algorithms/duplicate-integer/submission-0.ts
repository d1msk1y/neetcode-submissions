class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numsSet: Set<number> = new Set<number>(nums)
        console.log(numsSet.size);

        return numsSet.size !== nums.length
    }
}
