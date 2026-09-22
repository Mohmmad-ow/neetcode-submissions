class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        posToSpd: dict[int,int] = {}
        for i in range(len(position)):
            posToSpd[position[i]] = speed[i]
        position.sort()
        stack = []
        ans = 0
        for i in range(len(position)-1, -1, -1):
            hours = (target - position[i]) / posToSpd[position[i]]
            if not (stack and stack[-1] >= hours):
                ans += 1
                stack.append(hours)
        return len(stack)
        