class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        # check rows
        for r in board:
            s = set()
            for num in r:
                if num in s and num != '.':
                    return False
                s.add(num)
        for i in range(len(board[0])):
            s = set()
            for j in range(len(board)):
                num = board[j][i]
                if num in s and num != '.':
                    return False
                s.add(num)
        for i in range(1,len(board),3):
            for j in range(1, len(board[i]), 3):
                s = set()
                for c1 in range(i-1, i+2):
                    for c2 in range(j-1, j+2):
                        num = board[c1][c2]
                
                        if num in s and num != '.':
                            return False
                        s.add(num)
        return True

