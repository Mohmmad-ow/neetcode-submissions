func isAnagram(s string, t string) bool {
    checks := map[byte]int{}
    for i, _ := range s {
		
		if val, is := checks[s[i]]; !is {
			checks[s[i]] = 1
		} else {
			checks[s[i]] = val + 1
		}
	}

    fmt.Println(checks)

	for i := range t {
		if val, is := checks[t[i]]; is {
			if val < 1 {
				return false
			}
			checks[t[i]] = val - 1
		} else {
			return false
		}
	}

    for _, val := range checks {
        if val != 0 {
            return false
        }
    }
    
	return true
}