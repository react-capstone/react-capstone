import React, { Component } from "react";
// import Points from "../../components/Points/Points";
import Question from "../../components/Question/Question";
import { House } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

class Game extends Component {
  state = {
    currentQuestionNumber: 0,
  };

  // showChoices = () => {
  //   const { currentQuestionNumber } = this.state;
  //   const { triviaQuestions } = this.props;
  //   const currentQuestion = triviaQuestions[currentQuestionNumber];
  //   let allAnswers;
  //   let allAnswersMapped;

  //   if (currentQuestion) {
  //     let randomNum = Math.random() * 4;
  //     allAnswers = [...currentQuestion.incorrect_answers];
  //     allAnswers.splice(randomNum, 0, currentQuestion.correct_answer);
  //     allAnswersMapped = allAnswers.map((answer) => (
  //       <span
  //         key={answer}
  //         dangerouslySetInnerHTML={{
  //           __html: answer + ", ",
  //         }}
  //       ></span>
  //     ));
  //   }
  // };

  nextQuestion = () => {
    this.setState((currentState) => {
      return {
        currentQuestionNumber: currentState.currentQuestionNumber + 1,
      };
    });
  };

  render() {
    const { triviaQuestions, playerName } = this.props;
    const { currentQuestionNumber } = this.state;

    const currentQuestion = triviaQuestions[currentQuestionNumber];
    let allAnswers;
    let allAnswersMapped;

    if (currentQuestion) {
      let randomNum = Math.random() * 4;
      allAnswers = [...currentQuestion.incorrect_answers];
      allAnswers.splice(randomNum, 0, currentQuestion.correct_answer);
      allAnswersMapped = allAnswers.map((answer) => (
        <p
          className="choices"
          key={answer}
          dangerouslySetInnerHTML={{
            __html: answer,
          }}
        ></p>
      ));
    }
    return (
      <div>
        {/* <Link to="/">
          <House size={50} />
        </Link> */}
        {/* <Points /> */}
        <Question
          currentQuestionNumber={currentQuestionNumber}
          triviaQuestions={triviaQuestions}
          playerName={playerName}
          allAnswersMapped={allAnswersMapped}
          handleNextQuestion={this.nextQuestion}
        />
      </div>
    );
  }
}

export default Game;
