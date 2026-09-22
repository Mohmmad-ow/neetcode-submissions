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
        let p1 = 0
        let p2 = trimmed.length-1
        while (p2 > p1) {
            if (trimmed[p1] != trimmed[p2])
                return false
            p1++
            p2--
        }
        return true
    }
}
