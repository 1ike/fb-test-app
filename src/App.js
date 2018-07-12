import React, { Component } from "react";

//import logo from './logo.svg';
import "./App.css";
import Points from "./components/Points";
import Map from "./components/Map";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Points />
        <Map />
      </React.Fragment>
    );
  }
}

export default App;
