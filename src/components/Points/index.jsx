import React from "react";

// import _connect from '../../connect';
import Form from "./Form";
import List from "./List";

export default class Points extends React.Component {
  render() {
    return (
      <div id="points">
        <Form />
        <List />
      </div>
    );
  }
}
