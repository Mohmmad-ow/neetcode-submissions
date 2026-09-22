func hasDuplicate(nums []int) bool {
    table := make(map[int]bool, len(nums))
    for _, v := range nums {
        n := table[v];
        if n == true {
            return true
        }
        table[v] = true
    }
	return false
}
