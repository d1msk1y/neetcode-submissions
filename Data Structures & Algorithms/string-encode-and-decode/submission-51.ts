class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map ((str) => str.length + "#" + str).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result: string[]= [];
        let workStr = str;
        while(workStr.length > 0){
            let length = "";
            for (let char of workStr){
                if(char === "#"){
                    break;
                }
                length += char
            }
            const stringEndPos = length.length + Number(length)+1
            const start = length.length + 1
            const decodedString = workStr.slice(start, stringEndPos)
            workStr = workStr.slice(stringEndPos, workStr.length)
            result.push(decodedString)
        }
        return result;
    }
}
