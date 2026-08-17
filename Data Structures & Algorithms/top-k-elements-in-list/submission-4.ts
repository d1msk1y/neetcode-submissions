class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = new Map<number, number>()

        for(const num of nums){
            freqMap.set(num, (freqMap.get(num) | 0) + 1)
        }

        const sortedMap = [...freqMap.entries()].sort((a, b) => b[1] - a[1])
        
        return sortedMap.slice(0, k).map((array) => array[0])
    }
}
