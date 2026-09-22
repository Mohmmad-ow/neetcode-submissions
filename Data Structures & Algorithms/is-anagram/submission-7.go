func isAnagram(s string, t string) bool {
    if len(s) != len(t) {
        return false
    }

    alphabet := [26]int{}
    for i := range s {
        alphabet[s[i]-'a']++
        alphabet[t[i]-'a']--
    }

    for _, val := range alphabet {
        if val != 0 {
            return false
        }
    }

    return true
}
