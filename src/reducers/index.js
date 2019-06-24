import { combineReducers } from "redux";

import products from "./products";
import categories from "./categories";

const reducer = () => {
  return combineReducers({
    products,
    categories
  });
};

export default reducer;
