import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { SyncOutlined, CaretRightOutlined, SettingOutlined } from '@ant-design/icons';

import styles from './HeaderPanel.module.css';
import { setRowCount, gemeStart, closeLoseModal } from '../../redux/actions/game';
import LoseScreen from '../LoseScreen';
import SettingsModal from '../SetingsModal';

export const rowCountList = {
  small: 4,
  medium: 6,
  large: 8,
};

function HeaderPanel() {
  const dispatch = useDispatch();
  const {
    loseScreen, score, rowCount = rowCountList.small, gameStarted, hightScore
  } = useSelector((state) => state.game);
  const [settingsVisibility, setSettingsVisibility] = useState(false);
  const [settingsValue, setSettingsValue] = useState(rowCount);

  const onChangeModalVisivility = () => setSettingsVisibility((state) => !state);
  const onStart = () => {
    dispatch(setRowCount(settingsValue));
    dispatch(gemeStart());
  };
  const onChangeSettingsValue = (e) => setSettingsValue(e.target.value);
  const onSaveSettings = () => {
    onChangeModalVisivility();
    onStart();
  };
  const onCloseLoseModal = () => dispatch(closeLoseModal());

  return (
    <div className={styles.container}>
      <LoseScreen
        loseScreen={loseScreen}
        onCloseLoseModal={onCloseLoseModal}
        onStart={onStart}
        hightScore={hightScore}
      />
      <SettingsModal
        onChangeModalVisivility={onChangeModalVisivility}
        rowCountList={rowCountList}
        settingsVisibility={settingsVisibility}
        settingsValue={settingsValue}
        onChangeSettingsValue={onChangeSettingsValue}
        onSaveSettings={onSaveSettings}
      />
      <div>{`Score: ${score}`}</div>
      {gameStarted ? (
        <Button
          onClick={onStart}
          className={styles.restartBtn}
        >
          <SyncOutlined />
          Restart game
        </Button>
      )
        : (
          <Button
            onClick={onStart}
            className={styles.startBtn}
          >
            <CaretRightOutlined />
            Start game
          </Button>
        )}
      <SettingOutlined onClick={onChangeModalVisivility} className={styles.settingsBtn} />
    </div>
  );
}

export default HeaderPanel;
