class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const encodedString = strs.map ((str) => str.length + "#" + str)
        return encodedString.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result: string[]= [];
        let workStr = str;
        while(workStr.length > 0){
            const length = workStr.split("#")[0]
            const stringEndPos = length.length + Number(length)+1
            const start = length.length + 1
            const decodedString = workStr.slice(start, stringEndPos)
            workStr = workStr.slice(stringEndPos, workStr.length)
            result.push(decodedString)
        }
        return result;
    }
}
