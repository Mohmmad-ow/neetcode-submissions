class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if (nums.length === 1) {
            return nums[0]
        }
        if (nums[0] < nums[nums.length-1]) {
            return nums[0]
        }
        let key = nums[0]
        let l = 0
        let r = nums.length-1
        while (l < r) {
            console.log(l, r)
            let mid = Math.floor((l + r) / 2)
            if (nums[mid] >= key) {
                l = mid + 1
            } else {
                r = mid
            }
        }
        return nums[l]
    }
}
