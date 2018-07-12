import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./redux/reducers";

const initialStore = {
  points: [
    {
      id: 0,
      name: "p0",
      placemark: {
        geometry: {
          coordinates: [55.78, 37.63]
        },
        properties: {
          hintContent: "p0",
          balloonContent: "p0"
        },
        options: {
          preset: "islands#blueCircleDotIconWithCaption",
          draggable: true
        }
      }
    },
    {
      id: 1,
      name: "p1",
      placemark: {
        geometry: {
          coordinates: [55.74, 37.62]
        },
        properties: {
          hintContent: "p1",
          balloonContent: "p1"
        },
        options: {
          preset: "islands#blueCircleDotIconWithCaption",
          draggable: true
        }
      }
    },
    {
      id: 2,
      name: "p2",
      placemark: {
        geometry: {
          coordinates: [55.76, 37.67]
        },
        properties: {
          hintContent: "p2",
          balloonContent: "p2"
        },
        options: {
          preset: "islands#blueCircleDotIconWithCaption",
          draggable: true
        }
      }
    }
  ]
};

const middlewares = [applyMiddleware(thunk)];

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  // eslint-disable-line
  middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__()); // eslint-disable-line
}

export default createStore(reducers, initialStore, compose(...middlewares));
