func minEatingSpeed(piles []int, h int) int {
	// upper bound: the biggest pile (every pile takes 1 hour)
	maxPile := 0
	for _, p := range piles {
		if p > maxPile {
			maxPile = p
		}
	}

	l, r := 1, maxPile
	for l < r {
		mid := l + (r-l)/2

		hours := 0
		for _, p := range piles {
			hours += (p + mid - 1) / mid // ceil(p / mid) using integers
			if hours > h {
				break
			}
		}

		if hours <= h {
			r = mid // mid works, but a smaller speed might too
		} else {
			l = mid + 1 // mid is too slow
		}
	}
	return l
}