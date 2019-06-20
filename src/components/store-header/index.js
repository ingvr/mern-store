import React, { Component } from "react";
import { connect } from "react-redux";

import { Layout, Menu, Row, Col, Icon, Modal, Button, Form, Input } from "antd";

import { categoryAdd } from "../../actions";

import "./index.scss";

const { Header } = Layout;

class StoreHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categoryModalVisible: false,
			category: "",
			categoryInProduct: "",
			title: "",
			rowPrice: "",
			fullPrice: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleProductSubmit = this.handleProductSubmit.bind(this);
		this.handleCategorySubmit = this.handleCategorySubmit.bind(this);
	}

	showCategoryModal = () => {
		this.setState({
			categoryModalVisible: true
		});
	};

	hideCategoryModal = () => {
		this.setState({
			categoryModalVisible: false
		});
	};

	handleChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	handleProductSubmit(e) {
		e.preventDefault();
		console.log(this.state.categoryInProduct);
		console.log(this.state.title);
		console.log(this.state.rowPrice);
		console.log(this.state.fullPrice);
		//this.props.createCategory();
	}

	handleCategorySubmit(e) {
		e.preventDefault();
		this.props.createCategory(this.state.category);
	}

	render() {
		const {
			productModalVisible,
			categoryModalVisible,
			category,
			categoryInProduct,
			title,
			rowPrice,
			fullPrice
		} = this.state;
		return (
			<div>
				<Header className="store-header">
					<Row gutter={16}>
						<Col span={4} className="store-header__logo">
							<Icon type="fire" theme="filled" /> SuperStore
						</Col>
						<Col span={20}>
							<Menu
								theme="dark"
								mode="horizontal"
								className="store-header__menu"
							>
								<Menu.Item key="1">
									<Icon type="plus-circle" />
									Добавить товар
								</Menu.Item>
								<Menu.Item key="2" onClick={this.showCategoryModal}>
									<Icon type="folder-add" />
									Добавить категорию
								</Menu.Item>
							</Menu>
						</Col>
					</Row>
				</Header>

				<Modal
					title="Добавить категорию"
					visible={categoryModalVisible}
					onCancel={this.hideCategoryModal}
					footer={[]}
				>
					<Form onSubmit={this.handleCategorySubmit}>
						<Form.Item>
							<Input
								name="category"
								prefix={<Icon type="unordered-list" />}
								placeholder="Категория"
								value={category}
								onChange={this.handleChange}
								required
							/>
						</Form.Item>
						<Button type="primary" htmlType="submit" style={{ width: "100%" }}>
							Создать
						</Button>
					</Form>
				</Modal>

				<Modal
					title="Добавить товар"
					visible={productModalVisible}
					onCancel={this.hideProductModal}
					footer={[]}
				>
					<Form onSubmit={this.handleProductSubmit}>
						<Form.Item>
							<Input
								name="categoryInProduct"
								prefix={<Icon type="unordered-list" />}
								placeholder="Категория"
								value={categoryInProduct}
								onChange={this.handleChange}
							/>
							<Input
								name="title"
								prefix={<Icon type="user" />}
								placeholder="Название"
								value={title}
								onChange={this.handleChange}
							/>
							<Input
								name="rowPrice"
								prefix={<Icon type="user" />}
								placeholder="Закупочная цена"
								value={rowPrice}
								onChange={this.handleChange}
							/>
							<Input
								name="fullPrice"
								prefix={<Icon type="user" />}
								placeholder="Цена"
								value={fullPrice}
								onChange={this.handleChange}
							/>
						</Form.Item>
						<Button type="primary" htmlType="submit" style={{ width: "100%" }}>
							Добавить
						</Button>
					</Form>
				</Modal>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		createCategory: (category) => dispatch(categoryAdd(category))
	};
}

export default connect(
	null,
	mapDispatchToProps
)(StoreHeader);
