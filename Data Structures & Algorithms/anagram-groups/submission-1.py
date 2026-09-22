class Solution:
    def anagram(self,str1: str, str2: str) -> bool:
        if len(str1) != len(str2):
            return False 
        arr = [0] * 26
        for i in range(len(str1)):
            arr[ord(str1[i])-ord('a')] += 1
            arr[ord(str2[i])-ord('a')] -= 1
        for i in range(len(arr)):
            if arr[i] != 0:
                return False
        return True
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        out: list[list[str]] = []
        out.append([strs[0]])
        for i in range(1,len(strs)):
            isAna = False
            for j in range(len(out)):
                if Solution.anagram(self,strs[i], out[j][0]):
                    out[j].append(strs[i])
                    isAna = True
                    break
            if isAna == False:
                out.append([strs[i]])
        return out
                


    