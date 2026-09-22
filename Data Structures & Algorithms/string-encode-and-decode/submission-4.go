type Solution struct {
}

func (s *Solution) Encode(strs []string) string {
	sol := strings.Builder{}

	for _, v := range strs {

		sol.WriteString(v)
		
		sol.WriteString("-" + strconv.Itoa(len(v)) + "-")
	}
	fmt.Println(sol.String())
	return sol.String()

}

func (s *Solution) Decode(encoded string) []string {
	sol := []string{}
	curr := strings.Builder{}
	for i := 0; i < len(encoded); i++ {
		if encoded[i] == '-' && (encoded[i+2] == '-') {
			fmt.Println(string(encoded[i+1]))
			fmt.Println(curr.String())
			num, _ := strconv.Atoi(string(encoded[i+1]))
			if num == curr.Len() {
				sol = append(sol, curr.String())
				i = i+2
				curr.Reset()
			} else {
				curr.WriteByte(byte(encoded[i]))
			}
		} else if encoded[i] == '-' && (encoded[i+3] == '-') {
			fmt.Println(string(encoded[i+1]) + string(encoded[i+2]))
			fmt.Println(curr.String())
			num, _ := strconv.Atoi(string(encoded[i+1]) + string(encoded[i+2]))
			if num == curr.Len() {
				i = i+3
				sol = append(sol, curr.String())
				curr.Reset()
			} else {
				curr.WriteByte(byte(encoded[i]))
			}
		} else if encoded[i] == '-' && (encoded[i+4] == '-') {
			fmt.Println((string(encoded[i+1]) + string(encoded[i+2]) + string(encoded[i+3])))
			fmt.Println(curr.String())
			num, _ := strconv.Atoi(string(encoded[i+1]) + string(encoded[i+2]) + string(encoded[i+3]))
			if num == curr.Len() {
				i = i+4
				sol = append(sol, curr.String())
				curr.Reset()
			} else {
				curr.WriteByte(byte(encoded[i]))
			}
 		} else {
			curr.WriteByte(byte(encoded[i]))
		}
	}
	fmt.Println(sol)
	return sol
}
