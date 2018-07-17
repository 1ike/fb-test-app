import { createStore, compose } from "redux";

import reducers from "./redux/reducers";
// import initialStore from "./__fixtures__/initialStore";

const initialStore = {};

const middlewares = [];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  // eslint-disable-line
  middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__()); // eslint-disable-line
}

export default createStore(reducers, initialStore, compose(...middlewares));
