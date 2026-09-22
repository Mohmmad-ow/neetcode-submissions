func isValid(s string) bool {
	if len(s)%2 != 0 {
		return false
	}
	stack := []rune{}

	for _, value := range s {
		if value == '{' || value == '[' || value == '(' {
			stack = append(stack, rune(value))
			continue
		}
		if len(stack) == 0 {
			return false
		}
		last := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		if (value == '}' && last == '{') || (value == ']' && last == '[') || (value == ')' && last == '(') {
			continue
		} else {
			return false
		}
	}

	return len(stack) == 0

	// for i := 0; i < len(s); i++ {
	// 	if s[i] == '{' || s[i] == '[' || s[i] == '(' {
	// 		stack = append(stack, rune(s[i]))
	// 	} else {
	// 		if len(stack) == 0 {
	// 			return false
	// 		}
	// 		last := stack[len(stack)-1]
	// 		stack = stack[:len(stack)-1]
	// 		if (s[i] == '}' && last == '{') || (s[i] == ']' && last == '[') || (s[i] == ')' && last == '(') {
	// 			continue
	// 		} else {
	// 			return false
	// 		}
	// 	}
	// }
}
