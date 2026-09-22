func twoSum(nums []int, target int) []int {
	valM := map[int]int{}
	for idx, val := range nums {
		valM[val] = idx
	}
	for idx, val := range nums {
		needed := target - val
		if v, is := valM[needed]; is && v != idx {
			return []int{idx, v}
		}
	}
	return []int{0, 0}
}