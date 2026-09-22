func productExceptSelf(nums []int) []int {
	suffix, prefix := []int{}, []int{}
	for i := 0; i < len(nums);i++ {
		suffix = append(suffix, 1)
		prefix = append(prefix, 1)
	}
	curr := 1
	// suffix
	for i := len(nums)-1; i >= 0;i-- {
		suffix[i] = curr
		curr *= nums[i]
	}
	fmt.Println(suffix)
	// prefix
	curr = 1
	for i := 0; i < len(nums);i++ {
		prefix[i] = curr
		curr *= nums[i]
	}
	fmt.Println(prefix)
	ans := make([]int, len(nums))
	for i := 0; i < len(nums); i++ {
		ans[i] = prefix[i] * suffix[i]
	}

	return ans

}