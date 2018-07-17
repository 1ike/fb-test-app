import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ConnectedList, { List } from "../components/Points/List";

Enzyme.configure({ adapter: new Adapter() });

it("snapshot", () => {
  const wrapper = shallow(<List />);
  expect(wrapper).toMatchSnapshot();
});
