class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let result = new Array(nums.length);

        // Multiply before index
        let productBefore = new Array(nums.length);
        productBefore[0] = 1
        for(let i = 1; i < productBefore.length; i++){
            productBefore[i] = nums[i - 1] * productBefore [i - 1]
        }

        // 1. for loop
        //      1. Calculate before before index
        //      2. Push product to array and reset 
        
        // Multiply after index
        let productAfter = new Array(nums.length);
        productAfter[nums.length - 1] = 1
        for (let i = productAfter.length - 2; i >= 0; i--){
            productAfter[i] = nums[i + 1] * productAfter[i + 1]

            result[i] = productAfter[i] * productBefore[i]
            result[i+1] = productAfter[i +1] * productBefore[i+ 1]
        }

        return result;
    }
}
