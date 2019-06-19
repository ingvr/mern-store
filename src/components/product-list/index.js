import React, { Component } from "react";
import { connect } from "react-redux";

import { Table, Divider, Button } from "antd";

const { Column } = Table;

class ProductList extends Component {
	render() {
		const { products } = this.props;
		return (
			<Table dataSource={products}>
				<Column title="ID" key="key" dataIndex="key" />
				<Column title="Название товара" key="product" dataIndex="product" />
				<Column title="Цена закуп" key="rowPrice" dataIndex="rowPrice" />
				<Column title="Цена" key="fullPrice" dataIndex="fullPrice" />
				<Column
					key="action"
					render={() => (
						<span>
							<Button type="primary" icon="edit">
								Изменить
							</Button>
							<Divider type="vertical" />
							<Button type="danger" icon="delete">
								Удалить
							</Button>
						</span>
					)}
				/>
			</Table>
		);
	}
}

const mapStateToProps = state => {
	return {
		products: state.products
	};
};

export default connect(mapStateToProps)(ProductList);
