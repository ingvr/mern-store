import React, { Component } from "react";
import { connect } from "react-redux";

import { Table, Divider, Button, Popconfirm } from "antd";

import { productDelete } from "../../actions";

import { EditProductModal } from "../modals";

const { Column } = Table;

class ProductList extends Component {
  render() {
    const { products, filteredCategory } = this.props;
    const visibleProducts = products.filter(
      product =>
        filteredCategory === product.categoryId || filteredCategory === 0
    );
    return (
      <Table dataSource={visibleProducts}>
        <Column title="ID" key="key" dataIndex="key" />
        <Column title="Название товара" key="name" dataIndex="name" />
        <Column title="Цена закуп" key="rowPrice" dataIndex="rowPrice" />
        <Column title="Цена" key="fullPrice" dataIndex="fullPrice" />
        <Column
          key="action"
          render={product => (
            <span>
              <EditProductModal productKey={product.key} />
              <Divider type="vertical" />
              <Popconfirm
                title="Вы уверены, что хотите удалить этот товар?"
                onConfirm={() => {
                  this.props.deleteProduct(product.key);
                }}
                onCancel={() => {
                  return false;
                }}
                okText="Да"
                cancelText="Нет"
              >
                <Button type="danger" icon="delete">
                  Удалить
                </Button>
              </Popconfirm>
            </span>
          )}
        />
      </Table>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.items,
    filteredCategory: state.products.filteredCategory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: product => dispatch(productDelete(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
