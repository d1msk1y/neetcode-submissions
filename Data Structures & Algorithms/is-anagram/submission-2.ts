class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const count= new Map<string, number>()

        if(s.length != t.length){
            return false;
        }
        
        for (const char of s){
            count.set(char, (count.get(char) || 0 ) + 1)
        }

        for (const char of t){
            if(!count.has(char) || count.get(char) === 0){
                return false
            }

            count.set(char, count.get(char) -1 )
        }
        return true;
    }
}
