import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { List } from "../components/Points/List";

Enzyme.configure({ adapter: new Adapter() });

it("List snapshot", () => {
  const wrapper = shallow(<List />);
  expect(wrapper).toMatchSnapshot();
});
