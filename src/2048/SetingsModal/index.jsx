import {
  Modal, Button, Radio, Divider,
} from 'antd';
import styles from './SettingsModal.module.css';

function SettingsModal(props) {
  const {
    onChangeModalVisivility,
    rowCountList,
    settingsVisibility,
    settingsValue,
    onChangeSettingsValue,
    onSaveSettings,
  } = props;

  return (
    <Modal
      title="Settings"
      visible={settingsVisibility}
      onCancel={onChangeModalVisivility}
      footer={[
        <Button
          type="primary"
          onClick={onSaveSettings}
        >
          Save
        </Button>,
        <Button
          type="default"
          onClick={onChangeModalVisivility}
        >
          Cancle
        </Button>,
      ]}
    >
      <div>
        <h4>Board size: </h4>
        <Radio.Group
          className={styles.radio}
          onChange={onChangeSettingsValue}
          value={settingsValue}
          defaultValue={settingsValue}
        >
          {Object.entries(rowCountList).map(([title, value]) => (
            <Radio
              className={styles.radioItem}
              value={value}
              key={value}
            >
              {title}
            </Radio>
          ))}
        </Radio.Group>

      </div>
    </Modal>
  );
}

export default SettingsModal;
