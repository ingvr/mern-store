import React from "react";
import { shallow } from "../../enzyme";

import { Layout } from "antd";

import StoreHeader from "./index";
import {
  CreateCategoryModal,
  CreateProductModal
} from "../../containers/modals";

const { Header } = Layout;

const setup = () => {
  const enzymeWrapper = shallow(<StoreHeader />);
  return { enzymeWrapper };
};

describe("StoreHeader component", () => {
  it("renders without crashing", () => {
    shallow(<StoreHeader />);
  });
  it("should render self and subcomponents", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(Header).hasClass("store-header")).toBe(true);
    expect(enzymeWrapper.contains(<CreateProductModal />)).toBe(true);
    expect(enzymeWrapper.contains(<CreateCategoryModal />)).toBe(true);
  });
});
