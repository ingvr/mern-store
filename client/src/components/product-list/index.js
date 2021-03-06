import React, { Component } from "react";

import { Table, Divider, Button, Popconfirm } from "antd";

import { EditProductModal } from "../../containers/modals";
import Pager from "../../containers/pager";

const { Column } = Table;

class ProductList extends Component {
  componentDidMount() {
    const { loadProducts, filteredProducts } = this.props;
    loadProducts({ filteredProducts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.currentPage !== prevProps.currentPage ||
      this.props.items !== prevProps.items
    ) {
      const { currentPage: page, loadProducts, filteredProducts } = this.props;
      loadProducts({ page, categoryId: filteredProducts });
    }
  }

  render() {
    const { products, isLoading, deleteProduct } = this.props;

    return (
      <>
        <Table
          dataSource={products}
          loading={isLoading}
          pagination={false}
          rowKey={product => product._id}
        >
          <Column title="ID" key="_id" dataIndex="_id" />
          <Column title="Название товара" key="name" dataIndex="name" />
          <Column title="Цена закуп" key="rowPrice" dataIndex="rowPrice" />
          <Column title="Цена" key="fullPrice" dataIndex="fullPrice" />
          <Column
            key="action"
            render={({ _id }) => (
              <span>
                <EditProductModal productKey={_id} />
                <Divider type="vertical" />
                <Popconfirm
                  title="Вы уверены, что хотите удалить этот товар?"
                  onConfirm={() => {
                    deleteProduct(_id);
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
        {!isLoading && <Pager />}
      </>
    );
  }
}

export default ProductList;
