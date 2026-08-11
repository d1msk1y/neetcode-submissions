class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let leftPoint = 0;
        let rightPoint = nums.length -1;

        while(leftPoint <= rightPoint){
            const mid = Math.floor(leftPoint + (rightPoint - leftPoint) / 2)

            if(nums[mid] == target){
                return mid
            } else if (target > nums[mid]){
                leftPoint = mid + 1
            } else {
                rightPoint = mid - 1
            }
        }
        return -1;
    }
}
