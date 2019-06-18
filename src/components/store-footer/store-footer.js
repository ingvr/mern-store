import React from 'react';

import { Layout, Icon } from 'antd';

import './store-footer.scss';

const { Footer } = Layout;

const StoreFooter = () => {
	return (
		<Footer style={{ textAlign: 'center' }}>
			&copy; Copyright 2322 by Igor Leontev
		</Footer>
	);
}

export default StoreFooter;