func maxProfit(prices []int) int {
	l, r := 0, 0
	profit := 0
	for i, _ := range prices {
		curr := profit
		if prices[l] > prices[i] {
			l = i
			r = i
			continue
		}
		if prices[r] < prices[i] {
			r = i
			curr = prices[r] - prices[l]
		}
		if curr > profit {
			profit = curr
		}
	}
	return profit
}
