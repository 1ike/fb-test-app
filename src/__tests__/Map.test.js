import React from "react";
import { Provider } from "react-redux";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import initialStore from "../__fixtures__/initialStore";
import { createStore } from "redux";
import reducers from "../redux/reducers";

import ConnectedMapBasics from "../components/Map";

Enzyme.configure({ adapter: new Adapter() });

const store = createStore(reducers, initialStore);

it("Map snapshot", async () => {
  const wrapper = shallow(
    <Provider store={store}>
      <ConnectedMapBasics />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
