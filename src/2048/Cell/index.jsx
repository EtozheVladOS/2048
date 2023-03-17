import styles from './Cell.module.css';

function Cell(props) {
  const { column, row, value } = props;
  const valuToShow = value > 0 ? value : null;

  return (
    <div className={`${styles.container} ${styles[`n${value}`]}`} column={column} row={row}>
      {valuToShow}
    </div>
  );
}

export default Cell;
