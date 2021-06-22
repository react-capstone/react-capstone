import React, { Component } from "react";
// import Points from "../../components/Points/Points";
import Question from "../../components/Question/Question";

class Game extends Component {
  render() {
    const { triviaQuestions } = this.props;
    return (
      <div>
        {/* <Points /> */}
        <Question triviaQuestions={triviaQuestions} />
      </div>
    );
  }
}

export default Game;
