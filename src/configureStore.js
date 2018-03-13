import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import weatherApp from "./reducers";

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  return createStore(weatherApp, applyMiddleware(...middlewares));
};

export default configureStore;
