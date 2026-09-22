class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l, r
        l = 0
        r = matrix.length-1
        let mid
        while (l <= r) {
            mid = Math.floor((l + r) / 2)
            console.log(mid, matrix[mid])
            if (matrix[mid][0] <= target && matrix[mid][matrix[mid].length-1] >= target) {
                break
            } else if (matrix[mid][0] > target) {
                r = mid-1
            } else if (matrix[mid][matrix[mid].length-1] < target) {
                l = mid + 1
            }
        }
        l = 0
        r = matrix[mid].length-1
        while (l <= r) {
           let mid_2 = Math.floor((l + r) / 2)
            if (matrix[mid][mid_2] == target) {
                return true
            } else if (matrix[mid][mid_2] > target) {
                r = mid_2 - 1
            } else {
                l = mid_2 + 1
            }
        }
        return false
    }
}
