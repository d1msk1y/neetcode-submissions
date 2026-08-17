class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let result: number[][] = []

        nums = nums.sort((a,b) => a - b);

        for(let i = 0; i < nums.length; i++){
            const firstNum = nums[i]

            if (i > 0 && firstNum == nums[ i - 1]){
                continue;
            }

            let left = i + 1;
            let right = nums.length -1;
            while (left < right){
                const sum = firstNum + nums[left] + nums[right]

                if(sum === 0){
                    result.push([firstNum, nums[left], nums[right]])
                    left++
                    right--

                    while(left < right && nums[left] == nums[left - 1]){
                        left++
                    }
                }
                if(sum > 0){
                    right--
                } else if (sum < 0){
                    left++
                }
            }
        }
        return result
    }
}