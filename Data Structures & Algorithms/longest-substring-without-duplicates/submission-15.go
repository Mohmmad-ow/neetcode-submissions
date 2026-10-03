func lengthOfLongestSubstring(s string) int {
	charLen := [128]int{}
	curr := 0
	best := 0
	start := 0
	for i, _ := range s {
		if charLen[int(s[i])] > 0 {
			// fmt.Println("Found dup with char: " + string(s[i]))
			for charLen[int(s[i])] == 1 {
				if charLen[int(s[start])] == 1 {
					charLen[int(s[start])] = 0
					curr--
					start++
					// fmt.Println(string(s[start-1]) + " != " + string(s[i]))
					// fmt.Print("curr: ")
					// fmt.Println(curr)
					// fmt.Print("nl: ")
					// fmt.Println(start)
				} else {
					break
				}
			}
		} 
		charLen[int(s[i])]++
		curr++
		if curr > best {
			best = curr
		}
	}
	return best
}
