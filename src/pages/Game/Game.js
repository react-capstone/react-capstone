import React, { Component } from "react";
// import Points from "../../components/Points/Points";
import Question from "../../components/Question/Question";
import { Link } from "react-router-dom";

class Game extends Component {
  render() {
    return (
      <div>
        {/* <Points /> */}
        <Question triviaQuestions={this.props.triviaQuestions} />
      </div>
    );
  }
}

export default Game;
