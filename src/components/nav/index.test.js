import React from "react";
import { shallow } from "../../enzyme";

import { Layout, Menu } from "antd";

import { Nav } from "./index";

const { Sider } = Layout;

const setup = () => {
  const props = {
    categories: [
      { _id: "foo", title: "Категория 1" },
      { _id: "bar", title: "Категория 2" }
    ],
    loadCategories() {
      return this.categories;
    }
  };
  const enzymeWrapper = shallow(<Nav {...props} />);
  return {
    props,
    enzymeWrapper
  };
};

describe("Nav component", () => {
  const { enzymeWrapper, props } = setup();

  it("should render self and subcomponents", () => {
    expect(enzymeWrapper.find(Sider).hasClass("nav")).toBe(true);
    expect(enzymeWrapper.find(Menu)).toBeDefined();
  });

  it("should render categories from props and two static ('all' and 'without category')", () => {
    const { categories } = props;
    const numberOfCategories = categories.length + 2;
    expect(enzymeWrapper.find(Menu.Item)).toHaveLength(numberOfCategories);
  });
});
