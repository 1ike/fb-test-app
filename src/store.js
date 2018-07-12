import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./redux/reducers";

const initialStore = {
  points: [{ id: 0, name: "p0" }, { id: 1, name: "p1" }, { id: 2, name: "p2" }]
};

const middlewares = [applyMiddleware(thunk)];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  // eslint-disable-line
  middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__()); // eslint-disable-line
}

export default createStore(reducers, initialStore, compose(...middlewares));
