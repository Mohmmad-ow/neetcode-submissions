class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */

    generateParenthesis(n) {
        let out = []
        function generateTree(prefix, open, close) {
            if (open > close) {
                return
            }
            if ((open == 0) && (close == 0)) {
                out.push(prefix)
                return
            } else if (open == 0) {
                generateTree(prefix + ')', open, close - 1)
                return
            } else {
                generateTree(prefix + '(', open - 1, close)   
                generateTree(prefix + ')', open, close-1)   
                return
            }
        }
        generateTree("", n, n)
        return out
    }
}
