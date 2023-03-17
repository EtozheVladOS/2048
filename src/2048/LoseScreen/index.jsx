import { Modal, Button, List } from 'antd';

function LoseScreen(props) {
  const { loseScreen, onCloseLoseModal, onStart, hightScore } = props;

  return (
    <Modal
      title={null}
      visible={loseScreen}
      onCancel={onCloseLoseModal}
      width="350px"
      footer={[
        <Button
          type="primary"
          onClick={onStart}
        >
          Start new game
        </Button>,
      ]}
    >
      <>
        <h2>You, lose</h2>
        <List
          size="small"
          header={<div>Higth score:</div>}
          bordered
          dataSource={hightScore}
          renderItem={(item, idx) => <List.Item key={idx}>{`${idx + 1}. ${item}`}</List.Item>}
        />
      </>
    </Modal>
  );
}

export default LoseScreen;
