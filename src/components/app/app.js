import React from 'react';

import { Layout, Icon } from 'antd';
import "antd/dist/antd.css";

import StoreHeader from '../store-header';
import Nav from '../nav';
import ProductList from '../product-list';

import './app.scss';

const { Footer, Sider, Content } = Layout;

const App = () => {
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
						<ProductList />
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
