import React, { Component } from "react";
import { Modal, Form, Input, Icon, Button, notification } from "antd";

import { ModalWrapper } from "../hoc";
import { handleChange, validatePrice } from "../../utils";

export class EditProductModal extends Component {
  state = {
    categoryId: "1",
    name: "",
    rowPrice: "",
    fullPrice: ""
  };

  updateState() {
    const { products, productKey } = this.props;
    const currentProduct = products.find(product => product._id === productKey);
    const { categoryId, name, rowPrice, fullPrice } = currentProduct;
    this.setState({
      categoryId,
      name,
      rowPrice,
      fullPrice
    });
  }

  componentDidMount() {
    this.updateState();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.updateState();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { categoryId, name, rowPrice, fullPrice } = this.state;
    if (!validatePrice(rowPrice, fullPrice)) {
      notification.open({
        message: "Ошибка изменения товара",
        description: "Цена должна быть целым положительным числом",
        icon: <Icon type="exclamation-circle" style={{ color: "#CE0014" }} />
      });
      return false;
    }
    const { productKey: _id, editProduct, hideModal } = this.props;
    const product = { _id, categoryId, name, rowPrice, fullPrice };
    editProduct(product);
    hideModal();
  };

  handleChange = e => handleChange.call(this, e);

  render() {
    const { visible, showModal, hideModal, categories } = this.props;
    const { categoryId, name, rowPrice, fullPrice } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <>
        <Button type="primary" icon="edit" onClick={showModal}>
          Изменить
        </Button>
        <Modal
          title="Изменить товар"
          visible={visible}
          onCancel={hideModal}
          footer={[]}
        >
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              <select
                name="categoryId"
                placeholder="Выберите категорию"
                defaultValue={categoryId}
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
              Изменить
            </Button>
          </Form>
        </Modal>
      </>
    );
  }
}

export default ModalWrapper(EditProductModal);
