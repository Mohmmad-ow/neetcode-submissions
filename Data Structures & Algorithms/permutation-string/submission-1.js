class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let freq = Array(26).fill(0)
        for (let i = 0; i < s1.length; i++) {
            freq[s1.charCodeAt(i) - 97]++
        }
        let curr = Array(26).fill(0)
        let l = 0
        for (let r = 0; r < s2.length; r++) {
            let c = s2[r]
            curr[s2.charCodeAt(r) - 97]++
            while ((r - l + 1) > s1.length ||
                curr[s2.charCodeAt(l) - 97] > freq[s2.charCodeAt(l) - 97] ||
                freq[s2.charCodeAt(l) - 97] === 0) {
                curr[s2.charCodeAt(l) - 97]--
                l++
            }
            if (r - l + 1 === s1.length) {
                if (this.checkEquality(curr, freq)) {
                    return true
                }
            }
        }
        return false
    }
    /**
     * @param {number[]} arr1
     * @param {number[]} arr2
     * @return boolean
     */
    checkEquality(arr1, arr2) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false
            }
        }
        return true
    }

}
