import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './Board.module.css';
import Cell from '../Cell';
import { onKeyDown } from '../../redux/actions/game';

function Board() {
  const dispatch = useDispatch();
  const { cellsValues, gameStarted } = useSelector((state) => state.game);
  const rowCount = cellsValues.length;

  const onPressKey = (e) => dispatch(onKeyDown(e.key));

  useEffect(() => {
    document.addEventListener('keydown', onPressKey);

    return () => {
      document.removeEventListener('keydown', onPressKey);
    };
  }, []);

  const getBoardCells = () => {
    const board = [];
    for (let i = 0; i < rowCount; i += 1) {
      const cells = [];
      for (let j = 0; j < rowCount; j += 1) {
        const value = typeof cellsValues[i][j] === 'object' ? cellsValues[i][j].value : cellsValues[i][j];
        cells.push(<Cell place={{ column: j, row: i }} value={value} newValue={cellsValues[i][j].newValue} key={`${j} ${i}`} />);
      }
      board.push(<div className={styles.row} key={`row ${i}`}>{cells}</div>);
    }
    return board;
  };

  return (
    <div className={styles.conteiner}>
      {gameStarted && getBoardCells()}
    </div>
  );
}

export default Board;
