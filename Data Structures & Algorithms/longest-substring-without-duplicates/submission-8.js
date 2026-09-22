class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0 || s.length === 1) {
            return s.length
        }
        let chars = new Map()
        let start = 0
        let max = 0
        for (let end = 0; end < s.length; end++) {
            let c = s[end]
            if (chars.has(c) && chars.get(c) >= start) {
                start = chars.get(c) + 1
            }
            max = Math.max(end-start + 1, max)
            chars.set(c, end)
        }
        return max

    }
}
