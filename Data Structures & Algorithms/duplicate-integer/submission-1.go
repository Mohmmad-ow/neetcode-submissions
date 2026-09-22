func hasDuplicate(nums []int) bool {
    checks := map[int]bool{}
	for i := range nums {
		if _, exists := checks[nums[i]]; exists {
			return true
		} else {
            checks[nums[i]] = true
        }
	}
	return false
}
