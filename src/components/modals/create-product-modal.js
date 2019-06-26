import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Form, Input, Icon, Button } from "antd";

import { productAdd } from "../../actions";
import { ModalWrapper } from "../hoc";
import { handleChange } from "./utils";

class CreateProductModal extends Component {
  initialState = {
    category: "1",
    name: "",
    rowPrice: "",
    fullPrice: ""
  };

  state = this.initialState;

  handleSubmit = e => {
    e.preventDefault();
    const { category, name, rowPrice, fullPrice } = this.state;
    const { createProduct, hideModal } = this.props;
    const product = { category, name, rowPrice, fullPrice };
    createProduct(product);
    this.setState(this.initialState);
    hideModal();
  };

  handleChange = e => handleChange.call(this, e);

  render() {
    const { visible, showModal, hideModal, categories } = this.props;
    const { category, name, rowPrice, fullPrice } = this.state;

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
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              <select
                name="category"
                placeholder="Выберите категорию"
                value={category}
                onChange={this.handleChange}
                required
                style={{ width: "100%", lineHeight: "32px" }}
              >
                {categories.map(category => (
                  <option key={category.key} value={category.key}>
                    {category.title}
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
                onChange={this.handleChange}
                required
              />
            </Form.Item>
            <Form.Item>
              <Input
                name="rowPrice"
                prefix={<Icon type="dollar" />}
                placeholder="Закупочная цена"
                value={rowPrice}
                onChange={this.handleChange}
                required
              />
            </Form.Item>
            <Form.Item>
              <Input
                name="fullPrice"
                prefix={<Icon type="dollar" />}
                placeholder="Цена"
                value={fullPrice}
                onChange={this.handleChange}
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
