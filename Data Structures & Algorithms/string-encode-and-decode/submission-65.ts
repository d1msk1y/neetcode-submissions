class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map((str) => `${str.length}#${str}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result = [];

        console.log(str)
        for (let i = 0; i < str.length;){
            const lengthStr = str.slice(i, str.length)
            const length = lengthStr.slice(0, lengthStr.indexOf("#"))

            const start = i + length.length + 1;
            const end = start + Number(length);

            const key = str.slice(start, end)
            result.push(key);

            i = end;
        }

        return result;
    }
}
