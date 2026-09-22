class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (nums.length==1) {
            return nums[0] === target ? 0 : -1
        }
        let l = 0, r = nums.length-1
        let th = Math.floor((l+r)/2)
        while (l <= r) {
            if (nums[l] <= nums[th] && nums[th+1] <= nums[r]) {
                if (target >= nums[l] && target <= nums[th]) {
                    console.log("Found in the")
                    console.log(l, th, r)
                    r = th
                    break
                } else if (target >= nums[th+1] && target <= nums[r]) {
                    console.log("Found in the rev")
                    console.log(l, th, r)
                    l = th+1
                    break

                } else {
                    console.log("Not Found")
                    console.log(l, th, r)
                    return -1
                }
            } else if (nums[l] <= nums[th] && !(nums[th+1] <= nums[r])) {
                th = Math.floor((th+r) / 2)
            } else {
                th = Math.floor((l+th / 2))
            }
        }
        console.log("Binary Search Start")
        while (l <= r) {
            let mid = Math.floor((l+r) / 2)
            console.log(l, mid, r)
            if (nums[mid] === target) {
                return mid
            } else if (nums[mid] > target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return -1
    }
}
