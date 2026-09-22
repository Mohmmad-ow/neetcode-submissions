class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for p in s:
            if p == '(' or p == '{' or p == '[':
                stack.append(p)
            else:
                if len(stack) == 0:
                    return False
                q = stack.pop()
                if (q == '(' and p != ')') or (q == '{' and p != '}') or (q == '[' and p != ']'):
                    return False
        return len(stack) == 0
        