import React from "react";
import { shallow } from "../../enzyme";

import { Modal } from "antd";

import { EditProductModal } from "./edit-product-modal";

const setup = () => {
  const props = {
    categories: [
      { _id: "foo", title: "Категория 1" },
      { _id: "bar", title: "Категория 2" }
    ],
    products: [
      {
        _id: 1,
        name: "Товар 1",
        rowPrice: 1000,
        fullPrice: 1500,
        categoryId: "foo"
      },
      {
        _id: 2,
        name: "Товар 2",
        rowPrice: 2000,
        fullPrice: 2500,
        categoryId: "bar"
      }
    ],
    productKey: 1
  };
  const enzymeWrapper = shallow(<EditProductModal {...props} />);
  return {
    props,
    enzymeWrapper
  };
};

describe("EditProductModal component", () => {
  const { enzymeWrapper, props } = setup();

  it("should render self and subcomponents", () => {
    expect(enzymeWrapper.find(Modal)).toBeDefined();
  });

  it("should update state by productKey", () => {
    const { products, productKey } = props;
    const currentProduct = products.find(product => product._id === productKey);
    expect(enzymeWrapper.state().name).toBe(currentProduct.name);
  });
});
