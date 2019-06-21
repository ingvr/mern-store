import React, { Component } from "react";
import { connect } from "react-redux";

import { Layout, Menu, Row, Col, Icon, Modal, Button, Form, Input } from "antd";

import { categoryAdd, productAdd } from "../../actions";

import "./index.scss";

const { Header } = Layout;

class StoreHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryModalVisible: false,
      productModalVisible: false,
      category: "",
      categoryInProduct: "1",
      name: "",
      rowPrice: "",
      fullPrice: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleProductSubmit = this.handleProductSubmit.bind(this);
    this.handleCategorySubmit = this.handleCategorySubmit.bind(this);
  }

  showCategoryModal = () => {
    this.setState({
      categoryModalVisible: true
    });
  };

  hideCategoryModal = () => {
    this.setState({
      categoryModalVisible: false
    });
  };

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
    this.hideProductModal();
  }

  handleCategorySubmit(e) {
    e.preventDefault();
    this.props.createCategory(this.state.category);
    this.hideCategoryModal();
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
            <Col span={20}>
              <Menu
                theme="dark"
                mode="horizontal"
                className="store-header__menu"
              >
                <Menu.Item key="1" onClick={this.showProductModal}>
                  <Icon type="plus-circle" />
                  Добавить товар
                </Menu.Item>
                <Menu.Item key="2" onClick={this.showCategoryModal}>
                  <Icon type="folder-add" />
                  Добавить категорию
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>

        <Modal
          title="Добавить категорию"
          visible={categoryModalVisible}
          onCancel={this.hideCategoryModal}
          footer={[]}
        >
          <Form onSubmit={this.handleCategorySubmit}>
            <Form.Item>
              <Input
                name="category"
                prefix={<Icon type="unordered-list" />}
                placeholder="Категория"
                value={category}
                onChange={this.handleChange}
                required
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Создать
            </Button>
          </Form>
        </Modal>

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
