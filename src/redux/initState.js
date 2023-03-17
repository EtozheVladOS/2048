import { rowCountList } from '../2048/HeaderPanel';

const initState = {
  game: {
    rowCount: rowCountList.small,
    score: 0,
    gameStarted: false,
    loseScreen: false,
    cellsValues: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    hightScore: [],
  },
};

export default initState;
