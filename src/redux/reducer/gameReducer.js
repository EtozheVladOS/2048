import initState from '../initState';
import {
  ON_KEY_DOWN, SET_ROW_COUNT, START_GAME, CLOSE_LOSE_MODAL,
} from '../types';
import {
  getRandomCellNumber,
  initBoardSize,
  moveLeftInRow,
  moveRightInRow,
  clockwiseReverseBoard,
  counterClockwiseReverseBoard,
  boardNotFilled,
  isGameLose,
} from '../utils';

export default function gameReducer(state = initState.game, action) {
  const { type, payload } = action;

  switch (type) {
    case START_GAME: {
      const { rowCount } = state;
      const cellsValues = initBoardSize(rowCount);
      getRandomCellNumber(cellsValues);
      getRandomCellNumber(cellsValues);
      return {
        ...state, cellsValues, gameStarted: true, loseScreen: false, score: 0,
      };
    }

    case SET_ROW_COUNT: {
      return { ...state, rowCount: payload };
    }

    case ON_KEY_DOWN: {
      const {
        rowCount, cellsValues, gameStarted, score,
      } = state;
      const before = String(cellsValues);

      if (!gameStarted && isGameLose(rowCount, cellsValues)) {
        return { ...state };
      }

      let scoreAfterMove = score;

      const iteratingCells = (funcToUse) => {
        for (let row = 0; row < rowCount; row += 1) {
          scoreAfterMove += funcToUse(rowCount, cellsValues[row], score);
        }
      };

      if (payload === 'ArrowRight') {
        iteratingCells(moveRightInRow);
      } else if (payload === 'ArrowLeft') {
        iteratingCells(moveLeftInRow);
      } else if (payload === 'ArrowUp') {
        clockwiseReverseBoard(cellsValues);
        iteratingCells(moveLeftInRow);
        counterClockwiseReverseBoard(cellsValues);
      } else if (payload === 'ArrowDown') {
        counterClockwiseReverseBoard(cellsValues);
        iteratingCells(moveRightInRow);
        clockwiseReverseBoard(cellsValues);
      } else {
        return { ...state };
      }

      if (!boardNotFilled(cellsValues) && isGameLose(rowCount, cellsValues)) {
        const { hightScore } = state;
        hightScore.push(score);
        hightScore.sort((a, b) => a - b);
        if (hightScore.length > 10) {
          hightScore.length = 10;
        }
        return { ...state, hightScore, loseScreen: true };
      }

      const after = String(cellsValues);
      const resultBoard = before === after ? cellsValues : getRandomCellNumber(cellsValues);
      return { ...state, cellsValues: resultBoard, score: scoreAfterMove };
    }

    case CLOSE_LOSE_MODAL: {
      return { ...state, loseScreen: false };
    }

    default: {
      return state;
    }
  }
}
