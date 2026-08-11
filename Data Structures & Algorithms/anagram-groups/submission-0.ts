class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let groups = new Map<string, string[]>;

        for (let str of strs){
            const key = [...str].sort().join("")

            if(!groups.has(key)){
                groups.set(key, []);
            }
            groups.get(key).push(str)
        }

        return [...groups.values()]
    }
}
