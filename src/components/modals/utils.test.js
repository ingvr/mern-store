import { validatePrice } from "./utils";

describe("Modal utils tests", () => {
  it("pirce validation", () => {
    expect(validatePrice({ foo: 1, bar: 9999 })).toEqual(true);
    expect(validatePrice({ foo: "some", bar: 9999 })).toEqual(false);
    expect(validatePrice({ foo: 300, bar: "t" })).toEqual(false);
    expect(validatePrice({ foo: 300, bar: 0 })).toEqual(false);
    expect(validatePrice({ foo: -1 })).toEqual(false);
    expect(validatePrice({ bar: 1.5 })).toEqual(true);
  });
});
