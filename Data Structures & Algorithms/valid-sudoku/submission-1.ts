class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let boxes: string[][];

        for(let boxRows = 0; boxRows < 9; boxRows += 3){
            for( let boxCollumns = 0; boxCollumns < 9; boxCollumns += 3){
                let currentBox = []

                for (let row = 0; row < 3; row++){
                    for (let collumn = 0; collumn < 3; collumn++){
                        const cell = board[boxRows + row][boxCollumns + collumn]
                        if(cell != "."){
                            currentBox.push(cell)
                        }

                    }
                }

                if (new Set(currentBox).size != currentBox.length){
                    return false;
                }
            }
        }

        for (let r = 0; r < 9; r++){
            let rowCells = []
            for (let c = 0; c < 9; c++){
                let cell = board[r][c]
                if (cell != "."){
                    rowCells.push(cell)
                }
            }
            if(new Set(rowCells).size != rowCells.length){
                return false;
            }
        }

        for (let c = 0; c < 9; c++){
            let columnCells = []
            for (let r = 0; r < 9; r++){
                let cell = board[r][c]
                if(cell != "."){
                    columnCells.push(cell)
                }
            }
            if(new Set(columnCells).size != columnCells.length){
                return false;
            }
        }

        return true;
    }
}
