import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import Points from "./components/Points";
import Map from "./components/Map";
import store from "./store";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <Points />
      <Map />
    </React.Fragment>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
