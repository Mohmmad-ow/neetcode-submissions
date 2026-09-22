func maxArea(heights []int) int {
	l, r := 0, len(heights)-1
	best := 0
	for l < r {
		h, w := min(heights[l], heights[r]), (r - l)
		curr := w * h
		if curr > best {
			fmt.Println(best)
			fmt.Println(curr)
			best = curr
		}
		if heights[l] > heights[r] {
			r--
		} else {
			l++
		}
	}
	return best
}