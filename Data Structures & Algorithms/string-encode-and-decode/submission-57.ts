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
        
        let i = 0;
        console.log(workStr)
        while (i < workStr.length){
            console.log(i)
            let length = ""
            for(let x = i; x < workStr.length; x++){
                console.log("Char " + workStr[x])
                if(workStr[x] === "#"){
                    break
                }
                length += workStr[x];
            }            
            const start = i + length.length + 1
            const end = start + Number(length)
            const string = workStr.slice(start, end)
            console.log(`start ${start}, end ${end} string ${string}`)
            result.push(string)
            i = end
        }

        return result;
    }
}
