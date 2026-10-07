func evalRPN(tokens []string) int {
	stack := make([]int, 0, len(tokens))

	for _, tok := range tokens {
		switch tok {
		case "+", "-", "*", "/":
			b := stack[len(stack)-1]
			a := stack[len(stack)-2]
			stack = stack[:len(stack)-2]

			var res int
			switch tok {
			case "+":
				res = a + b
			case "-":
				res = a - b
			case "*":
				res = a * b
			case "/":
				res = a / b
			}
			stack = append(stack, res)
		default:
			n, _ := strconv.Atoi(tok)
			stack = append(stack, n)
		}
	}

	return stack[0]
}