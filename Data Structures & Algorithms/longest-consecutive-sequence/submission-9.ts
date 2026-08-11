class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;

        nums.sort((a, b) => {return a-b})
        console.log(nums)
        let counter: number = 0;
        let sequences: number[] = [];

        for (let i = 0; i < nums.length; i++){

            // If duplicate - Skip
            if (nums[i] === nums[i + 1]) {
                continue;
            }

            // If Last - Skip
            if(Number.isNaN(nums[i + 1]) || nums[i+1] == undefined){
                counter += 1
                                console.log("Adding +1 cause last")
                continue;
            }

            let diff: number = nums[i+1] - nums[i];
            console.log(`${nums[i + 1]} - ${nums[i]} = ${diff}`);

            if(diff === 1){
                counter += 1
                console.log("Adding +1 cause consecutive")
            } else {
                counter += 1
                                console.log("Adding +1 cause sequence ended")
                sequences.push(counter);
                console.log(sequences)
                counter = 0;
            }
        }

        sequences.push(counter);
        sequences.sort((a, b) => {return a-b})

        return sequences[sequences.length - 1]
    }
}
