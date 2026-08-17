class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    // ["Hello", "World"]
    encode(strs: string[]): string {
        let encodedString = "";

        for (const str of strs){
            const length = str.length

            encodedString += `${length}#${str}`
        }

        return encodedString;
    }
    

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // 5#Hellow5#World

    decode(str: string): string[] {
        let index = 0;
        let result = []

        while (index < str.length){
            const length = str.slice(index, str.length -1).split("#")[0]
            const start = (index + 1) + length.length
            const end = start + Number(length)
            const extractedString = str.slice(start, end);

            result.push(extractedString)

            index = end
            continue
        }

        return result;
    }
}
