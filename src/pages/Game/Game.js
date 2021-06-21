import React, { Component } from "react";
import Points from "../../components/Points/Points";
import Question from "../../components/Question/Question";

class Game extends Component {
  render() {
    return (
      <div>
        <Points />
        <Question />
      </div>
    );
  }
}

export default Game;
