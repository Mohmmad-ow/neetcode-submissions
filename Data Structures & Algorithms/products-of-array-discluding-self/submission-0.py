class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        prefix = [1] * len(nums)
        postfix = [1] * len(nums)
        for i in range(len(nums)):
            j = len(nums)-1-i
            if i == 0:
                continue
            else:
                prefix[i] = prefix[i-1] * nums[i-1]
                postfix[j] = postfix[j+1] * nums[j+1]
        res:list[int] = [1] * len(nums)
        for i in range(len(nums)):
            res[i] = prefix[i] * postfix[i]
        return res

        