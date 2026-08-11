class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let freqmap = new Map<number, number>();

        for(let num of nums){
            freqmap.set(num, (freqmap.get(num) | 0) + 1)
        }

        const sorted = [...freqmap.entries()].sort((a, b) => b[1] - a[1]);
        return sorted.slice(0, k).map(entry => entry[0]);
    }
}
