import React from 'react';

import { Layout, Menu, Row, Col, Icon} from 'antd';

const { Header } = Layout;

const StoreHeader = () => {
	const createProduct = (e) => {
		console.log("Create Product show modal");
	};

	return (
		<Header className="Header">
			<Row gutter={16}>
				<Col span={4} style={{ color: 'white', fontWeight: '900', fontSize: '1.2rem' }}>
					<Icon type="fire" theme="filled" /> SuperStore
				</Col>
				<Col span={20}>
					<Menu
						theme="dark"
						mode="horizontal"
						style={{ lineHeight: '64px', textAlign: 'right' }}
					>
						<Menu.Item key="1" onClick={createProduct}>
							<Icon type="plus-circle" />
							Добавить товар
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="folder-add" />
							Добавить категорию
						</Menu.Item>
					</Menu>
				</Col>
			</Row>
		</Header>
	);
}

export default StoreHeader;