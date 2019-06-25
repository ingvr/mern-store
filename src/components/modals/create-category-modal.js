import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Form, Input, Icon, Button } from "antd";

import { categoryAdd } from "../../actions";
import { ModalWrapper } from "../hoc";

class CreateCategoryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createCategory(this.state.category);
    this.setState({
      category: ""
    });
    this.props.hideModal();
  };

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { visible, showModal, hideModal } = this.props;
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
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              <Input
                name="category"
                prefix={<Icon type="unordered-list" />}
                placeholder="Категория"
                value={this.state.category}
                onChange={this.handleChange}
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
