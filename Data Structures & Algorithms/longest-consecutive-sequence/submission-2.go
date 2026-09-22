func longestConsecutive(nums []int) int {
	if len(nums) <= 1 {
		return len(nums)
	}

	checkList := make(map[int]bool)
	unionFind := make(map[int]int)
	for _, v := range nums {
		checkList[v] = false
		unionFind[v] = v
	}
	for k, _ := range unionFind {
		if v, is := unionFind[k+1]; is {
			unionFind[k] = v
		}
	}
	ans := 1
	for k := range unionFind {
		key := k
		if checkList[key] {
			continue
		}
		for {
			if _, exist := unionFind[key-1]; exist {
				key = key - 1
			} else {
				break
			}
		}
		curr := 1
		checkList[key] = true
		for {
			if _, exist := unionFind[key+1]; exist {
				curr++
				checkList[key+1] = true
				key = key+1
			} else {
				if curr > ans {
					ans = curr
				}
				break
			}
		}
	}
	return ans
}
