func threeSum(nums []int) [][]int {
    sort.Ints(nums)
    ans := [][]int{}
    
    for i := 0; i < len(nums)-2; i++ {
        // Skip duplicates for i
        if i > 0 && nums[i] == nums[i-1] {
            continue
        }
        
        left, right := i+1, len(nums)-1
        
        for left < right {
            sum := nums[i] + nums[left] + nums[right]
            
            if sum == 0 {
                ans = append(ans, []int{nums[i], nums[left], nums[right]})
                
                // Skip duplicates for left
                for left < right && nums[left] == nums[left+1] {
                    left++
                }
                // Skip duplicates for right
                for left < right && nums[right] == nums[right-1] {
                    right--
                }
                
                left++
                right--
            } else if sum < 0 {
                left++
            } else {
                right--
            }
        }
    }
    
    return ans
}