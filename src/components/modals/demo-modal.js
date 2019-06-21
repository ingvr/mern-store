import React from "react";
import { Modal, Button } from "antd";

import { ModalWrapper } from "../hoc";

const DemoModal = ({ visible, showModal, hideModal }) => {
  return (
    <>
      <Modal
        title="Пример модалки"
        visible={visible}
        onCancel={hideModal}
        footer={[]}
      >
        text
      </Modal>
      <Button onClick={showModal}>Показать модалку</Button>
    </>
  );
};

export default ModalWrapper(DemoModal);
