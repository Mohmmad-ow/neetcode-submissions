class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            let tmp = Math.abs(nums[i])
            console.log(tmp, nums[tmp])
            if (nums[tmp] < 0) {
                return tmp
            } else {
                nums[tmp] *= -1
            }
        }
        console.log(nums)
        return -1
    }
}
