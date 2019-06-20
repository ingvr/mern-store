import React, { Component } from "react";
import { Modal, Button } from "antd";

export default class CreateProductModal extends Component {
  state = {
    ModalText: "Content",
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      visible: false
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { visible, ModalText } = this.state;

    return (
      <div>
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}
