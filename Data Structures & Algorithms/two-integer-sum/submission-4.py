class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d: dict[int,int] = {}
        for i in range(len(nums)):
           d[nums[i]] = i
        for i in range(len(nums)):
            key = target-nums[i]
            if d.get(key) != None and d.get(key) != i:
                return [i,d[key]]
       