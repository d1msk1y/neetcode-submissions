class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const strippedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

        let left = 0;
        let right = strippedString.length -1;

        while(left < right){
            if(strippedString[left] != strippedString[right]){
                return false;
            }

            left++
            right--
        }

        return true
    }
}
