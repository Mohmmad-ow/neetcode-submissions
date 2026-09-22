class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
       let maxArea = 0
       let stack = []
       for (let i = 0; i < heights.length; i++) {
            let st = i
            while (stack.length > 0 && (stack[stack.length-1].val > heights[i])) {
    
                let {index, val} = stack.pop()
                maxArea = Math.max(maxArea, (i-index) * val)
                st = index
            }
            stack.push({index: st,val: heights[i]})
           // console.log(stack)
       }

       for (let i = 0; i < stack.length; i++) {
            maxArea = Math.max(maxArea, stack[i].val * (heights.length - stack[i].index))
       }
       return maxArea

    }
}
