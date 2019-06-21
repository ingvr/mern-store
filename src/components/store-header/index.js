import React, { Component } from "react";
import { connect } from "react-redux";

import { Layout, Menu, Row, Col, Icon, Modal, Button, Form, Input } from "antd";

import { categoryAdd, productAdd } from "../../actions";
import { CreateCategoryModal } from "../modals";

import "./index.scss";

const { Header } = Layout;

class StoreHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productModalVisible: false,
      categoryInProduct: "1",
      name: "",
      rowPrice: "",
      fullPrice: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleProductSubmit = this.handleProductSubmit.bind(this);
  }

  showProductModal = () => {
    this.setState({
      productModalVisible: true
    });
  };

  hideProductModal = () => {
    this.setState({
      productModalVisible: false
    });
  };

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleProductSubmit(e) {
    e.preventDefault();
    const { categoryInProduct, name, rowPrice, fullPrice } = this.state;
    const product = { categoryInProduct, name, rowPrice, fullPrice };
    this.props.createProduct(product);
    this.setState({
      productModalVisible: false,
      categoryInProduct: "1",
      name: "",
      rowPrice: "",
      fullPrice: ""
    });
  }

  render() {
    const {
      categoryModalVisible,
      productModalVisible,
      category,
      categoryInProduct,
      name,
      rowPrice,
      fullPrice
    } = this.state;

    const { categories } = this.props;

    return (
      <div>
        <Header className="store-header">
          <Row gutter={16}>
            <Col span={4} className="store-header__logo">
              <Icon type="fire" theme="filled" /> SuperStore
            </Col>
            <Col span={20} style={{ textAlign: "right" }}>
              <Button
                type="primary"
                onClick={this.showProductModal}
                style={{ marginRight: "10px" }}
              >
                <Icon type="plus-circle" />
                Добавить товар
              </Button>
              <CreateCategoryModal />
            </Col>
          </Row>
        </Header>

        <Modal
          title="Добавить товар"
          visible={productModalVisible}
          onCancel={this.hideProductModal}
          footer={[]}
        >
          <Form onSubmit={this.handleProductSubmit}>
            <Form.Item>
              <select
                name="categoryInProduct"
                placeholder="Выберите категорию"
                value={categoryInProduct}
                onChange={this.handleChange}
                required
                style={{ width: "100%", lineHeight: "32px" }}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

function mapDispatchToProps(dispatch) {
  return {
    createCategory: category => dispatch(categoryAdd(category)),
    createProduct: product => dispatch(productAdd(product))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreHeader);
