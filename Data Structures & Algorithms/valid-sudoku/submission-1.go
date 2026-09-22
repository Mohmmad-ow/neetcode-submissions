func isValidSudoku(board [][]byte) bool {
    // Initialize maps properly - each needs its own inner map
    rowMap := make(map[int]map[byte]bool)
    colMap := make(map[int]map[byte]bool)
    boxMap := make(map[int]map[byte]bool)
    
    for i := 0; i < 9; i++ {
        rowMap[i] = make(map[byte]bool)
        colMap[i] = make(map[byte]bool)
        boxMap[i] = make(map[byte]bool)
    }
    
    for i := 0; i < 9; i++ {
        for j := 0; j < 9; j++ {
            cell := board[i][j]
            
            // Skip empty cells
            if cell == '.' {
                continue
            }
            
            // Check row
            if rowMap[i][cell] {
                return false
            }
            rowMap[i][cell] = true
            
            // Check column
            if colMap[j][cell] {
                return false
            }
            colMap[j][cell] = true
            
            // Check 3x3 box
            boxIndex := (i/3)*3 + j/3
            if boxMap[boxIndex][cell] {
                return false
            }
            boxMap[boxIndex][cell] = true
        }
    }
    
    return true
}