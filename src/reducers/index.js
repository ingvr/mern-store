import { combineReducers } from "redux";

import products from "./products";
import categories from "./categories";
import users from "./users";

export default combineReducers({
  products,
  categories,
  users
});
