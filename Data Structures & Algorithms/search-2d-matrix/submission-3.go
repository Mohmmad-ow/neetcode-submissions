func searchMatrix(matrix [][]int, target int) bool {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return false
	}
	height, width := len(matrix), len(matrix[0])

	// Phase 1: find the row whose range contains target
	t, b := 0, height-1
	row := -1
	for t <= b {
		mid := t + (b-t)/2
		if target > matrix[mid][width-1] {
			t = mid + 1 // target is below this row's last element, so look lower
		} else if target < matrix[mid][0] {
			b = mid - 1 // target is above this row's first element, so look higher
		} else {
			row = mid
			break
		}
	}
	if row == -1 {
		return false
	}

	// Phase 2: binary search inside that row
	l, r := 0, width-1
	for l <= r {
		mid := l + (r-l)/2
		if matrix[row][mid] == target {
			return true
		} else if matrix[row][mid] < target {
			l = mid + 1
		} else {
			r = mid - 1
		}
	}
	return false
}