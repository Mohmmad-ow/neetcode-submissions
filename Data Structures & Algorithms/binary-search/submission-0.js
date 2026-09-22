class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l, r 
        l = 0
        r = nums.length-1
        while (l <= r) {
            let mid = Math.floor((l + r) / 2)
            
            if (nums[mid] === target) {
                return mid
            } else if (nums[mid] > target) {
                r = mid-1
            } else {
                l = mid + 1
            }
            
        }
        return -1
    }
}
