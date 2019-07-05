import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Form, Input, Icon, Button } from "antd";

import { productEdit } from "../../actions";
import { ModalWrapper } from "../hoc";
import { handleChange } from "./utils";

class EditProductModal extends Component {
  state = {
    categoryId: "1",
    name: "",
    rowPrice: "",
    fullPrice: ""
  };

  componentDidMount() {
    const { products, productKey } = this.props;
    const currentProduct = products.find(product => product.key === productKey);
    const { categoryId, name, rowPrice, fullPrice } = currentProduct;
    this.setState({
      categoryId,
      name,
      rowPrice,
      fullPrice
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { categoryId, name, rowPrice, fullPrice } = this.state;
    const { productKey: key, editProduct, hideModal } = this.props;
    const product = { key, categoryId, name, rowPrice, fullPrice };
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
                {categories.map(({ key, title }) => (
                  <option key={key} value={key}>
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

const mapStateToProps = state => {
  return {
    categories: state.categories.items,
    products: state.products.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editProduct: product => dispatch(productEdit(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalWrapper(EditProductModal));
