import React, { Component } from "react";
// import Points from "../../components/Points/Points";
import Question from "../../components/Question/Question";
import { House } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

class Game extends Component {
  render() {
    const { triviaQuestions } = this.props;
    return (
      <div>
        <Link to="/">
          <House size={50} />
        </Link>
        {/* <Points /> */}
        <Question triviaQuestions={triviaQuestions} />
      </div>
    );
  }
}

export default Game;
