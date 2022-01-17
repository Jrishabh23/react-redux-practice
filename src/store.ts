import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { rootReducers } from "./rootReducer";

const logger = createLogger();

const store = createStore(rootReducers, applyMiddleware(logger));
export default store;
