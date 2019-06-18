import React from 'react';

import { Layout } from 'antd';
import "antd/dist/antd.css";

import StoreHeader from '../store-header';
import Nav from '../nav';
import ProductList from '../product-list';
import StoreFooter from '../store-footer';
import { CreateProductModal } from '../modals';

import './index.scss';

const { Content } = Layout;

const App = () => {
 return (
		<div className="App">
			<StoreHeader />
			<Layout>
				<Nav />
				<Layout className="app__layout">
					<Content className="app__content">
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