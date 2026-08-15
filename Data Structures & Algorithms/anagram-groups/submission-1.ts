class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const group = new Map<string, string[]>()
        
        for(const str of strs){
            const key = [...str].sort().join("")

            if (!group.has(key)){
                group.set(key, [])
            }

            group.get(key).push(str);
        }

        return [...group.values()]
    }
}
