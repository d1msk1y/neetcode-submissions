class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        for(let i = 0; i < strs.length; i++){
            strs[i] = strs[i].length + "#" + strs[i]
        }
        return strs.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result: string[]= [];
        let workStr = str;
        for(let i = 0; i < str.length;){
            const length = workStr.split("#")[0]
            const stringEndPos = length.length + Number(length)+1
            const start = length.length + 1
            result.push(workStr.slice(start, stringEndPos))
            workStr = workStr.slice(stringEndPos, workStr.length)
            if(workStr.length <= 0){
                break;
            }
        }
        return result;
    }
}
