class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0
        let b = 0
        let s = 0
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < prices[b]) {
                b = i, s = i
                continue
            }
            if (prices[i] > prices[s]) {
                s = i
                let curr = prices[s] - prices[b]
                console.log(`${prices[b]} - ${prices[s]} = ${curr}`)
                max = Math.max(curr, max)
            } 
        }
        return max
    }
}
