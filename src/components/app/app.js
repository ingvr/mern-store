import React from 'react';

import { Layout, Icon, Table, Divider, Button } from 'antd';
import "antd/dist/antd.css";

import StoreHeader from '../store-header';
import Nav from '../nav';

import './app.scss';

const { Footer, Sider, Content } = Layout;
const { Column } = Table;

const App = () => {
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
		<div className="App">
			<StoreHeader />
			<Layout>
				<Nav />
				<Layout style={{ padding: '0 24px 24px' }}>
					<Content
						style={{
							background: '#fff',
							padding: 24,
							margin: 0,
							minHeight: 280,
						}}
					>
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
					</Content>
				</Layout>
			</Layout>
			<Footer style={{ textAlign: 'center' }}>
				&copy; Copyright 2322 by Igor Leontev
			</Footer>
		</div>
	);
}

export default App;
