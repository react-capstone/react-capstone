import React, { Component } from "react";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Game from "./pages/Game/Game";
import Summary from "./components/Summary/Summary";

class App extends Component {
  render() {
    return (
      <>
        <Landing />
        <Game />
        <Summary />
      </>
    );
  }
}

export default App;
