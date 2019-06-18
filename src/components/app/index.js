import React from 'react';

import { Layout } from 'antd';
import "antd/dist/antd.css";

import StoreHeader from '../store-header';
import Nav from '../nav';
import ProductList from '../product-list';
import StoreFooter from '../store-footer';
import { CreateProductModal } from '../modals';

const { Content } = Layout;

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
						<CreateProductModal />
					</Content>
				</Layout>
			</Layout>
			<StoreFooter />
		</div>
	);
}

export default App;