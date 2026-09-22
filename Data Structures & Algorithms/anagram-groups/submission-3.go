func groupAnagrams(strs []string) [][]string {
	sol := make(map[string][]string)
	for _, v := range strs {
		sorted := sortStringASCII(v)
		sol[sorted] = append(sol[sorted], v)
	}
	ans := [][]string{}
	for _, val := range sol {
		ans = append(ans, val)
	}
	return ans
}

func sortStringASCII(s string) string {
	// For ASCII-only strings, bytes work fine
	bytes := []byte(s)
	sort.Slice(bytes, func(i, j int) bool {
		return bytes[i] < bytes[j]
	})
	return string(bytes)
}
