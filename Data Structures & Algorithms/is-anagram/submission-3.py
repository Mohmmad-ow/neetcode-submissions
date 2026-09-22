class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        m1: dict[str, int] = {}
        m2: dict[str, int] = {}
        for i in range(len(s)):
            if m1.get(s[i]) == None:
                m1[s[i]] = 1
            else:
                m1[s[i]]+=1
            if m2.get(t[i]) == None:
                m2[t[i]] = 1
            else:
                m2[t[i]]+=1
        for i in range(len(s)):
            if m1.get(s[i]) != m2.get(s[i]):
                return False
        return True   

            
        
        