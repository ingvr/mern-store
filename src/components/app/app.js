import React from 'react';

import { Layout, Menu, Row, Col, Icon } from 'antd';
import "antd/dist/antd.css";

import './app.scss';

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
	return (
		<div className="App">
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
							<Menu.Item key="1">
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
			<Layout>
				<Sider width={200} style={{ background: '#fff' }}>
					<Menu
						mode="inline"
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						style={{ height: '100%', borderRight: 0 }}
					>
							<Menu.Item key="1">option1</Menu.Item>
							<Menu.Item key="2">option2</Menu.Item>
							<Menu.Item key="3">option3</Menu.Item>
							<Menu.Item key="4">option4</Menu.Item>
					</Menu>
				</Sider>
				<Layout style={{ padding: '0 24px 24px' }}>
					<Content
						style={{
							background: '#fff',
							padding: 24,
							margin: 0,
							minHeight: 280,
						}}
					>
						Content
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
