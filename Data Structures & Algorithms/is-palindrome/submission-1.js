class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let trimmed = []
        
        for (let i = 0; i < s.length; i++) {
            if (/[a-zA-Z0-9]/.test(s[i])) {
                trimmed.push(s[i].toLocaleLowerCase())
                
            }
        }
        for (let i = 1; i < trimmed.length; i++) {
            if (trimmed[i] !== trimmed[trimmed.length-1-i]) {
                return false
            }
        }
        return true
    }
}
