import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";

import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import initialStore from "../__fixtures__/initialStore";
import { createStore } from "redux";
import reducers from "../redux/reducers";
import {
  createPoint,
  deletePoint,
  shiftPoint,
  reoderPoints,
  shiftCenter
} from "../redux/actions";

import ConnectedMapBasics, { MapBasics } from "../components/Map";

Enzyme.configure({ adapter: new Adapter() });

const store = createStore(reducers, initialStore);
describe("Map", () => {
  // const initialState = { output: 100 };
  // const mockStore = configureStore();
  // let store, container;
  const wrapper = shallow(
    <Provider store={store}>
      <ConnectedMapBasics />
    </Provider>
  );

  beforeEach(() => {
    // store = mockStore(initialState);
  });

  it("snapshot", async () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("integration", () => {
    // console.log(wrapper.debug());
    // console.log(wrapper.find(".sortable-list__item"));
    // store.dispatch(addInputs(500));
    // expect(wrapper.find(Home).prop("output")).toBe(500);
  });
});
