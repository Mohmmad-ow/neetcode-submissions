class Solution {
    
    
    findIndex(start, nums, target) {
        for (let i = start; i < nums.length; i++) {
            if (nums[i] === target) {
                return i
            }
        }
        return -1
    }

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => a-b)
        let result = new Set()
        let p1 = 0
        
        while (p1 < nums.length-2) {
            let p2 = p1+1
            let toSkip = new Set()
            while (p2 < nums.length-1) {
                let target = (nums[p1] + nums[p2]) * -1
                let idx = this.findIndex(p2+1, nums, target)
                if (idx > p2 && !toSkip.has(idx) && idx !== -1) {
                    let res = nums[p1] + "," + nums[p2] + "," + nums[idx]
                    result.add(res)
                }
                p2++
            }
            p1++
        }
        
        return Array.from(result).map(str => str.split(',').map(Number))
    }
}
