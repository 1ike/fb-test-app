import React from "react";
import { Provider } from "react-redux";
import { reduxForm } from "redux-form";

import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Form } from "../components/Points/Form";

import initialStore from "../__fixtures__/initialStore";
import { createStore } from "redux";
import reducers from "../redux/reducers";

Enzyme.configure({ adapter: new Adapter() });

const inputSelector = "input#inputPoint";

const store = createStore(reducers, initialStore);
const WrappedForm = reduxForm({ form: "createPoint" })(Form);

it("Form snapshots", () => {
  const wrapper = mount(
    <Provider store={store}>
      <WrappedForm />
    </Provider>
  );
  wrapper
    .find(inputSelector)
    .simulate("change", { target: { value: "test point 1" } });
  expect(wrapper.html()).toMatchSnapshot();
});
