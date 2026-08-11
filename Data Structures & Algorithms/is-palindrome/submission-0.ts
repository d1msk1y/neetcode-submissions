class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        let left = 0
        let right = s.length - 1
        s = s.toLowerCase()
        while (left <= right){
            if(s[left] != s[right]){
                return false;
            }
            left += 1
            right -= 1
        }
        return true
    }
}
