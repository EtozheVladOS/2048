export const initBoardSize = (rowCount) => {
  const board = [];
  for (let i = 0; i < rowCount; i += 1) {
    board.push(new Array(rowCount).fill(0));
  }
  return board;
};

export const boardNotFilled = (board) => board.flat().some((cell) => !cell);

export const getRandomCellNumber = (cellsValues) => {
  const rowCount = cellsValues.length;
  let valueAreFinden = false;

  while (!valueAreFinden) {
    const row = Math.floor(Math.random() * rowCount);
    const column = Math.floor(Math.random() * rowCount);
    if (cellsValues[row][column] === 0) {
      const value = Math.random() > 0.5 ? 2 : 4;
      cellsValues[row][column] = value;
      valueAreFinden = true;
    }
  }
  return cellsValues;
};

const getForLeftNextInRow = (column, currentRow) => {
  for (let i = column + 1; i < currentRow.length; i += 1) {
    if (currentRow[i] !== 0) {
      return i;
    }
  }
  return -1;
};

const getForRightNextInRow = (column, currentRow) => {
  for (let i = column - 1; i >= 0; i -= 1) {
    if (currentRow[i] !== 0) {
      return i;
    }
  }
  return -1;
};

const horizontalMove = (nextCell, currentRow, column) => {
  let scoreAfterMove = 0;
  if (nextCell !== -1) {
    if (currentRow[column] === 0) {
      currentRow[column] = currentRow[nextCell];
      currentRow[nextCell] = 0;
      column -= 1;
    } else if (currentRow[column] === currentRow[nextCell]) {
      const cellValue = currentRow[column] * 2;
      currentRow[column] = cellValue;
      currentRow[nextCell] = 0;
      scoreAfterMove = cellValue;
    }
  }
  return scoreAfterMove;
};

export const moveLeftInRow = (rowCount, currentRow) => {
  let finalScore = 0;
  for (let column = 0; column < rowCount - 1; column += 1) {
    const nextCell = getForLeftNextInRow(column, currentRow);
    finalScore += horizontalMove(nextCell, currentRow, column);
  }
  return finalScore;
};

export const moveRightInRow = (rowCount, currentRow) => {
  let finalScore = 0;
  for (let column = rowCount - 1; column > 0; column -= 1) {
    const nextCell = getForRightNextInRow(column, currentRow);
    finalScore += horizontalMove(nextCell, currentRow, column);
  }
  return finalScore;
};

export const clockwiseReverseBoard = (board) => {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = i + 1; j < board.length; j += 1) {
      const cell = board[i][j];
      board[i][j] = board[j][i];
      board[j][i] = cell;
    }
  }
};

export const counterClockwiseReverseBoard = (board) => {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = i + 1; j < board.length; j += 1) {
      const cell = board[j][i];
      board[j][i] = board[i][j];
      board[i][j] = cell;
    }
  }
};

export const isGameLose = (rowCount, board) => {
  for (let row = 0; row < rowCount; row += 1) {
    for (let column = 0; column < rowCount; column += 1) {
      if (board[row][column] === 0) {
        return false;
      }
      if (column < rowCount - 1) {
        if (board[row][column] === board[row][column + 1]) {
          return false;
        }
      }
      if (row < rowCount - 1) {
        if (board[row][column] === board[row + 1][column]) {
          return false;
        }
      }
    }
  }
  return true;
};
