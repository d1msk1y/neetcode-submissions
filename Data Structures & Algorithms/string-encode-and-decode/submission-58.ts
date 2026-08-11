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
        
        let i = 0;
        console.log(str)
        while (i < str.length){
            console.log(i)
            let length = ""
            for(let x = i; x < str.length; x++){
                console.log("Char " + str[x])
                if(str[x] === "#"){
                    break
                }
                length += str[x];
            }            
            const start = i + length.length + 1
            const end = start + Number(length)
            const string = str.slice(start, end)
            console.log(`start ${start}, end ${end} string ${string}`)
            result.push(string)
            i = end
        }

        return result;
    }
}
