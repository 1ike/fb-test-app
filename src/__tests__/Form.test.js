import React from "react";
import ReactDOM from "react-dom";

import initialStore from "../__fixtures__/initialStore";
import ConnectedForm, { Form } from "../components/Points/Form";

console.log(Form);
// class App extends React.Component {
//   render() {
//     return <span />;
//   }
// }

xit("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});
