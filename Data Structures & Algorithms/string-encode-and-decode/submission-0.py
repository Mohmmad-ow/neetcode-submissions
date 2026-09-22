class Solution:
    def checkEncoding(self, s: str,curr: str, idx: int):
        currNum = ""
        res = {'isDecode': False, 'index': -1}
        for i in range(idx, len(s)):
            if s[i] == '}':
                if len(curr) == int(currNum):
                    res['isDecode'] = True
                    res['index'] = i
                    return res
                else:
                    return res
            else:
                currNum += s[i]
        return res


    def encode(self, strs: List[str]) -> str:
        res: str = ""
        for s in strs:
           res += s + "{" + str(len(s)) + "}"
        print(res)
        return res
    def decode(self, s: str) -> List[str]:
        res: list[str] = []
        currStr = ""
        i = 0
        while i != len(s):
            if s[i] == '{':
                r = Solution.checkEncoding(self, s, currStr, i+1)
                if r['isDecode'] == True:
                    print(i)
                    i = r['index']
                    print(i)
                    res.append(currStr)
                    currStr = ""
                else:
                    currStr += s[i]
                
                
            else:
                currStr += s[i]
            i+=1
        print(currStr)
        return res



            








