class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        con: dict[int,int] = {}
        for num in nums:
            con[num] = num
        best = 0
        for k in con.keys():
            if con.get(k) == None:
                continue
            newKey = k+1
            start = k
            while con.get(newKey) != None:
                con[start] = con[newKey]
                con[newKey] = None
                curr = abs(start - con[start])
                if curr > best:
                    best = curr
                newKey += 1

               
        return best + 1

