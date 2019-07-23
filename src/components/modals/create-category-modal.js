import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Form, Input, Icon, Button } from "antd";

import { categoryAdd } from "../../actions";
import { ModalWrapper } from "../hoc";
import { handleChange } from "../../utils";

class CreateCategoryModal extends Component {
  state = { category: "" };

  handleSubmit = e => {
    e.preventDefault();
    const { createCategory, hideModal } = this.props;
    createCategory(this.state.category);
    this.setState({ category: "" });
    hideModal();
  };

  handleChange = e => handleChange.call(this, e);

  render() {
    const { visible, showModal, hideModal } = this.props;
    const { handleSubmit, handleChange } = this;
    const { category } = this.state;
    return (
      <>
        <Button onClick={showModal}>
          <Icon type="folder-add" />
          Добавить категорию
        </Button>
        <Modal
          title="Добавить категорию"
          visible={visible}
          onCancel={hideModal}
          footer={[]}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              <Input
                name="category"
                prefix={<Icon type="unordered-list" />}
                placeholder="Категория"
                value={category}
                onChange={handleChange}
                required
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Создать
            </Button>
          </Form>
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCategory: category => dispatch(categoryAdd(category))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ModalWrapper(CreateCategoryModal));
