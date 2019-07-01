import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import { fetchCategories } from "./actions";

import reducer from "./reducers";

const logger = createLogger({
  level: "log"
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

store
  .dispatch(fetchCategories("categories"))
  .then(() => console.log(store.getState()));

export default store;
