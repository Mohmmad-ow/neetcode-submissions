func lengthOfLongestSubstring(s string) int {
	var inWindow [128]bool
	best := 0
	start := 0

	for i := 0; i < len(s); i++ {
		// shrink the window from the left until s[i] is no longer a duplicate
		for inWindow[s[i]] {
			inWindow[s[start]] = false
			start++
		}
		inWindow[s[i]] = true

		if length := i - start + 1; length > best {
			best = length
		}
	}
	return best
}
