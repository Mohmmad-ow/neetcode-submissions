class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let freqMap = Array(26).fill(0)
        let res = 0, l = 0
        let mostFreq = 0
        for (let r = 0; r < s.length; r++) {
            const c = s.charCodeAt(r) - 65
            freqMap[c]++
            mostFreq = Math.max(mostFreq, freqMap[c])

            while ((r-l+1) - mostFreq > k) {
                const idxL = s.charCodeAt(l) - 65;
                freqMap[idxL]--;
                l++
            }
            res = Math.max(r-l+1, res)
        }
        return res
        
        
        
    }
}
