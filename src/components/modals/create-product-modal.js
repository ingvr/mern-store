import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Form, Input, Icon, Button, notification } from "antd";

import { productAdd } from "../../actions";
import { ModalWrapper } from "../hoc";
import { handleChange, validatePrice } from "./utils";

class CreateProductModal extends Component {
  initialState = {
    categoryId: "5d2309641c9d4400006c0d13",
    name: "",
    rowPrice: "",
    fullPrice: ""
  };

  state = this.initialState;

  handleSubmit = e => {
    e.preventDefault();
    const { categoryId, name, rowPrice, fullPrice } = this.state;
    if (!validatePrice(rowPrice, fullPrice)) {
      notification.open({
        message: "Ошибка создания товара",
        description: "Цена должна быть целым положительным числом",
        icon: <Icon type="exclamation-circle" style={{ color: "#CE0014" }} />
      });
      return false;
    }

    const { createProduct, hideModal } = this.props;
    const product = { categoryId, name, rowPrice, fullPrice };

    createProduct(product);
    this.setState(this.initialState);
    hideModal();
  };

  handleChange = e => handleChange.call(this, e);

  render() {
    const { visible, showModal, hideModal, categories } = this.props;
    const { categoryId, name, rowPrice, fullPrice } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <>
        <Button
          type="primary"
          onClick={showModal}
          style={{ marginRight: "10px" }}
        >
          <Icon type="plus-circle" />
          Добавить товар
        </Button>
        <Modal
          title="Добавить товар"
          visible={visible}
          onCancel={hideModal}
          footer={[]}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              <select
                name="categoryId"
                placeholder="Выберите категорию"
                value={categoryId}
                onChange={handleChange}
                required
                style={{ width: "100%", lineHeight: "32px" }}
              >
                {categories.map(({ _id, title }) => (
                  <option key={_id} value={_id}>
                    {title}
                  </option>
                ))}
              </select>
            </Form.Item>
            <Form.Item>
              <Input
                name="name"
                prefix={<Icon type="font-colors" />}
                placeholder="Название"
                value={name}
                onChange={handleChange}
                required
              />
            </Form.Item>
            <Form.Item>
              <Input
                name="rowPrice"
                prefix={<Icon type="dollar" />}
                placeholder="Закупочная цена"
                value={rowPrice}
                onChange={handleChange}
                required
              />
            </Form.Item>
            <Form.Item>
              <Input
                name="fullPrice"
                prefix={<Icon type="dollar" />}
                placeholder="Цена"
                value={fullPrice}
                onChange={handleChange}
                required
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Добавить
            </Button>
          </Form>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProduct: product => dispatch(productAdd(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalWrapper(CreateProductModal));
