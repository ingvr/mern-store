import React from 'react';

import { Table, Divider, Button } from 'antd';

import './product-list.scss';

const { Column } = Table;

const ProductList = () => {
	const dataSource = [
		{
			key: '1',
			product: 'Товар 1',
			rowPrice: '2000',
			fullPrice: '2500'
		},
		{
			key: '2',
			product: 'Товар 2',
			rowPrice: '2200',
			fullPrice: '2700'
		},
		{
			key: '3',
			product: 'Товар 3',
			rowPrice: '2200',
			fullPrice: '2700'
		},
		{
			key: '4',
			product: 'Товар 4',
			rowPrice: '2200',
			fullPrice: '2700'
		},
	];

	return (
		<Table dataSource={dataSource}>
			<Column
				title="ID"
				key="key"
				dataIndex="key"
			/>
			<Column
				title="Название товара"
				key="product"
				dataIndex="product"
			/>
			<Column
				title="Цена закуп"
				key="rowPrice"
				dataIndex="rowPrice"
			/>
			<Column
				title="Цена"
				key="fullPrice"
				dataIndex="fullPrice"
			/>
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
};

export default ProductList;