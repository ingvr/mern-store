import React from "react";
import { shallow } from "enzyme";

import { categoriesRequested } from "./categories";

describe("categories actions", () => {
  describe("categoriesRequested", () => {
    it("should create an action when categories requested", () => {
      const payload = "some data";
      const expectedAction = {
        type: "CATEGORIES_REQUESTED",
        payload
      };
      expect(categoriesRequested(payload)).toEqual(expectedAction);
    });
  });
});
