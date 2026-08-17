class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let result = new Set<string>()

        nums = nums.sort((a,b) => a - b);

        for(let i = 0; i < nums.length; i++){
            const firstNum = nums[i]
            let left = i + 1;
            let right = nums.length -1;
            while (left < right){
                const sum = firstNum + nums[left] + nums[right]

                if(sum === 0){
                    result.add([firstNum, nums[left], nums[right]].join('#'))
                    left++
                    right--
                }
                if(sum > 0){
                    right--
                } else if (sum < 0){
                    left++
                }
            }
        }
        return [...result.values()].map((str) => str.split("#").map((str)=> Number(str)))
    }
}