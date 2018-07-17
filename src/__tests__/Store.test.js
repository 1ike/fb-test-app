import { createStore } from "redux";

import reducers from "../redux/reducers";
import {
  createPoint,
  deletePoint,
  shiftPoint,
  reoderPoints,
  shiftCenter
} from "../redux/actions";

import initialStore, { reorderedPoints } from "../__fixtures__/initialStore";
import { point, coordinates } from "../__fixtures__/testPoint";

describe("Redux store", () => {
  let store;

  beforeEach(() => {
    store = createStore(reducers, initialStore);
  });

  it("createPoint", () => {
    store.dispatch(createPoint(point));
    expect(store.getState()).toMatchSnapshot();
  });

  it("deletePoint", () => {
    store.dispatch(deletePoint(1));
    expect(store.getState()).toMatchSnapshot();
  });

  it("shiftPoint", () => {
    store.dispatch(shiftPoint({ id: 0, coordinates }));
    expect(store.getState()).toMatchSnapshot();
  });

  it("reoderPoints", () => {
    store.dispatch(reoderPoints(reorderedPoints));
    expect(store.getState()).toMatchSnapshot();
  });

  it("shiftCenter", () => {
    store.dispatch(shiftCenter(coordinates));
    expect(store.getState()).toMatchSnapshot();
  });
});
