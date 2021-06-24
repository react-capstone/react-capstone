import React, { Component } from "react";
// import Points from "../../components/Points/Points";
import Question from "../../components/Question/Question";

class Game extends Component {
  state = {
    currentQuestionNumber: 0,
  };

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
      allAnswers = [...currentQuestion.incorrect_answers];
      const randomPosition = Math.floor(
        Math.random() * (allAnswers.length + 1)
      );
      allAnswers.splice(randomPosition, 0, currentQuestion.correct_answer);
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
