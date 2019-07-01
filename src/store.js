import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./reducers";

const logger = createLogger({
  level: "log"
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
