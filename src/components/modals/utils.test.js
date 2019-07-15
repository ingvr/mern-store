import { validatePrice } from "./utils";

describe("Modal utils tests", () => {
  it("return true if all prices are positive integers", () => {
    expect(validatePrice(1, 100, 100500)).toEqual(true);
  });
  it("return false if one of the price not integer", () => {
    expect(validatePrice(100, "foo", 50)).toEqual(false);
  });
  it("return false if one of the price less than zero", () => {
    expect(validatePrice(1, -1, 2)).toEqual(false);
  });
});
