import React from "react";
import { Provider } from "react-redux";

import "./App.css";
import Points from "./components/Points";
import Map from "./components/Map";
import store from "./store";

export const App = () => (
  <React.Fragment>
    <Points />
    <Map />
  </React.Fragment>
);

export default () => (
  <Provider store={store}>
    <React.Fragment>
      <Points />
      <Map />
    </React.Fragment>
  </Provider>
);
