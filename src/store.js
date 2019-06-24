import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

import reducer from "./reducers";

const logger = createLogger({
  level: "log"
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
