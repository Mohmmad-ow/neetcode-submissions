class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let p1 = 0
        let p2 = heights.length -1 
        let maxArea = 0
        while (p1 < p2) {
            maxArea = Math.max(maxArea, Math.min(heights[p1], heights[p2]) * (p2-p1))
            if (heights[p1] > heights[p2]) {
                p2--
            } else {
                p1++
            }
        }
        return maxArea
    }
}
