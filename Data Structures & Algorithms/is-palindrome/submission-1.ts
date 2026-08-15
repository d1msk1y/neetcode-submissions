class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanS = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

        //         s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

        let left = 0;
        let right = cleanS.length -1

        while(left < right){
            if(cleanS[left] != cleanS[right]){
                return false
            }

            left += 1;
            right -= 1;
        }

        return true;
    }
}
