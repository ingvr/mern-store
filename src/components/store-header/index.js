import React, { Component } from "react";
import { connect } from "react-redux";

import { categoryAdd } from '../../actions';

import { Layout, Menu, Row, Col, Icon } from "antd";

const { Header } = Layout;

class StoreHeader extends Component {
	addItem = () => {
		this.props.addItem();
	}

	render() {
	  return (
	    <Header className="Header">
	      <Row gutter={16}>
	        <Col
	          span={4}
	          style={{ color: "white", fontWeight: "900", fontSize: "1.2rem" }}
	        >
	          <Icon type="fire" theme="filled" /> SuperStore
	        </Col>
	        <Col span={20}>
	          <Menu
	            theme="dark"
	            mode="horizontal"
	            style={{ lineHeight: "64px", textAlign: "right" }}
	          >
	            <Menu.Item key="1">
	              <Icon type="plus-circle" />
	              Добавить товар
	            </Menu.Item>
	            <Menu.Item key="2" onClick={this.addItem}>
	              <Icon type="folder-add" />
	              Добавить категорию
	            </Menu.Item>
	          </Menu>
	        </Col>
	      </Row>
	    </Header>
	  );
	};
};

function mapDispatchToProps(dispatch) {
  return ({
  	addItem: () => dispatch(categoryAdd())
  })
}

export default connect(null, mapDispatchToProps)(StoreHeader);
