import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Layout } from "antd";

import StoreHeader from "./index";
import { CreateCategoryModal, CreateProductModal } from "../modals";

const { Header } = Layout;

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {};
  const enzymeWrapper = shallow(<StoreHeader {...props} />);
  return {
    props,
    enzymeWrapper
  };
};

describe("components", () => {
  describe("StoreHeader", () => {
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
});
