import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Points from "../components/Points";

Enzyme.configure({ adapter: new Adapter() });

it("snapshot", () => {
  const wrapper = shallow(<Points />);
  expect(wrapper).toMatchSnapshot();
});
