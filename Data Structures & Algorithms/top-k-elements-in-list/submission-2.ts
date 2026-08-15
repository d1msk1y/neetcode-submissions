class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let numsSet = new Map<number, number>()

        for (const num of nums){
            numsSet.set(num, (numsSet.get(num) | 0)+1)
        }

        let sortedElements = [...numsSet.entries()].sort((a, b) => b[1] - a[1])
        console.log(sortedElements)
        return sortedElements.slice(0,k).map(entry => entry[0])     
    }
}
