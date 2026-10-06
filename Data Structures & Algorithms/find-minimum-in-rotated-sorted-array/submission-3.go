func findMin(nums []int) int {
	if nums[0] < nums[len(nums)-1] {
		return nums[0]
	}
	l, r := 0, len(nums)-1
	for r-l > 1 {
		mid := (r+l)/2
		fmt.Println(mid)
		if nums[mid] > nums[l] {
			l = mid
			continue
		} else {
			r = mid
			continue
		}
	}
	return nums[r]
}
