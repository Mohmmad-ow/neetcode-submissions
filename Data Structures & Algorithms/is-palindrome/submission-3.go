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
	fmt.Println(str)
	for i, _ := range str {
		end := filteredString.Len()-1-i
		if str[i] != str[end] {
			return false
		}

	}
	return true
}