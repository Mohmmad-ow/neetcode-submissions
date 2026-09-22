func isPalindrome(s string) bool {
	filteredString := strings.Builder{}

	for _, v := range s {
		if (v >= 'a' && v <= 'z') || (v >= 'A' && v <= 'Z') || (v >= '0' && v <= '9') {
			filteredString.WriteRune(v)
		} else {
			continue
		}
	}
	str := strings.ToLower(filteredString.String())
	for r,_ := range str {
		l := len(str) - 1 - r
		if str[l] != str[r] {
			return false
		}
	}
	return true
}