import { SudokuNode } from '@components/Games/Sudoku/SudokuGrid';

const isValidNode = (
  row: number,
  col: number,
  value: number,
  board: any[][],
) => {
  const cellValue = value;

  //check horizontal ===
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === cellValue) return false;
  }

  //check vertical
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === cellValue) return false;
  }

  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[boxRow + i][boxCol + j] === cellValue) return false;
    }
  }

  return true;
};

const solveRandomSudoku = (board: any) => {
  //   console.log(board);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        for (let k = 1; k <= 9; k++) {
          let num = Math.floor(Math.random() * 9) + 1;
          if (isValidNode(i, j, num, board)) {
            board[i][j] = num;
            if (solveRandomSudoku(board)) return true;
            board[i][j] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
};

const countSudokuSolution = (board: any) => {
  //   console.log(board);
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        let count = 0;
        for (let k = 1; k <= 9; k++) {
          if (isValidNode(i, j, k, board)) {
            board[i][j] = k;
            count += countSudokuSolution(board);
            board[i][j] = 0;
          }
        }
        return count;
      }
    }
  }
  return 1;
};

const getSudokuGrid = (maxEmptyCellsCount: number) => {
  let sudokuGrid: any = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  solveRandomSudoku(sudokuGrid);

  let emptyCellsCount = 0;
  let shuffledCells = [];
  for (let i = 0; i < 81; i++) {
    shuffledCells.push(i);
  }

  shuffledCells.sort(() => Math.random() - 0.6); //shuffle the array

  let index = 0;
  while (emptyCellsCount < maxEmptyCellsCount && index < 81) {
    if (shuffledCells.length === 0) break;

    let cell = shuffledCells[index];
    index++;

    let i = Math.floor(cell / 9);
    let j = cell % 9;

    let value = sudokuGrid[i][j];
    sudokuGrid[i][j] = 0;

    let count = countSudokuSolution(sudokuGrid);
    if (count === 1) emptyCellsCount++;
    else sudokuGrid[i][j] = value;
  }

  return sudokuGrid;
};

const getNode = (
  row: number,
  col: number,
  value: number,
  isModified: boolean,
) => {
  return {
    row,
    col,
    value,
    isModified: isModified,
    isPressed: false,
  };
};

export const createSudokuGrid = (maxEmptyCellsCount: number): any[] => {
  const numberGrid = getSudokuGrid(maxEmptyCellsCount);
  let sudokuGrid = [];
  for (let i = 0; i < 9; i++) {
    let row = [];
    for (let j = 0; j < 9; j++) {
      const isModified = numberGrid[i][j] === 0;
      const node = getNode(i, j, numberGrid[i][j], isModified);
      row.push(node);
    }
    sudokuGrid.push(row);
  }

  return sudokuGrid;
};

export const isValidNodeCheck = (
  row: number,
  col: number,
  value: number,
  board: any[][],
) => {
  const cellValue = value;
  console.log('🚀 ~ file: sudoku-utils.ts:156 ~ cellValue:', cellValue);

  //check horizontal ===
  for (let i = 0; i < 9; i++) {
    if (board[row][i].value === cellValue) return false;
  }

  //check vertical
  for (let i = 0; i < 9; i++) {
    if (board[i][col].value === cellValue) return false;
  }

  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[boxRow + i][boxCol + j].value === cellValue) return false;
    }
  }

  console.log('value', value);
  return true;
};

export const solveSudoku = (gridParams: SudokuNode[][]) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      for (let k = 1; k <= 9; k++) {
        if (isValidNodeCheck(i, j, k, gridParams)) {
          gridParams[i][j].value = k;
          if (solveSudoku(gridParams)) return true;
          gridParams[i][j].value = 0;
        }
      }
      return false;
    }
  }
  return true;
};

export const checkBoard = (board: SudokuNode[][]) => {
  const wrongRow: any = getWrongLines(board, 'row');
  const wrongCol: any = getWrongLines(board, 'col');
  const wrongBox: any = getWrongBoxes(board);

  const wrongPositions: any = {};

  wrongPositions['row'] = [...wrongRow];
  wrongPositions['col'] = [...wrongCol];
  wrongPositions['box'] = [...wrongBox];

  return wrongPositions;
};

const getWrongLines = (board: SudokuNode[][], type: string) => {
  const wrongLines = new Set();
  for (let i = 0; i < 9; i++) {
    let dict: Record<string, number> = {};

    for (let j = 0; j < 9; j++) {
      let key;
      if (type === 'row') key = board[i][j].value;
      else key = board[j][i].value;
      if (key === 0) continue;

      if (Object.hasOwnProperty.call(dict, key)) {
        dict[key] += 1;
        if (dict[key] > 1) {
          wrongLines.add(i);
          break;
        }
      } else dict[key] = 1;
    }
  }
  return wrongLines;
};

const getWrongBoxes = (board: SudokuNode[][]) => {
  const wrongBoxes = new Set<number>();

  for (let boxRow = 0; boxRow < 9; boxRow += 3) {
    for (let boxCol = 0; boxCol < 9; boxCol += 3) {
      const dict: Record<number, number> = {};

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const row = boxRow + i;
          const col = boxCol + j;
          const key = board[row][col].value;

          if (key === 0) continue;

          if (Object.prototype.hasOwnProperty.call(dict, key)) {
            dict[key] += 1;
            if (dict[key] > 1) {
              const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
              wrongBoxes.add(boxIndex);
            }
          } else {
            dict[key] = 1;
          }
        }
      }
    }
  }

  return wrongBoxes;
};
