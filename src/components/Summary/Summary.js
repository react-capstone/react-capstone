import React, { Component } from "react";
import { Button, Jumbotron } from "react-bootstrap";
import "./Summary.css";

class Summary extends Component {
  render() {
    const { status, triviaQuestions, userAnswers, points } = this.props;

    let finalResults = userAnswers.map((userAnswer, i) => {
      return {
        user: userAnswer,
        correct: triviaQuestions[i].correct_answer,
      };
    });

    const summary = finalResults.map((result, index) => {
      return (
        <div className="result text-left">
          <li>
            Question {index + 1} <br />
            Your Answer: {result.user}
            <br />
            Correct Answer: {result.correct}
          </li>
        </div>
      );
    });
    console.log("finalResults", finalResults);
    const winOrLost = status ? "win" : "lost";
    return (
      <Jumbotron>
        <body className="summary-container text-center">
          <h1>Thanks for playing!</h1>
          <h3>Here is the summary of how it went :)</h3>
          <br />
          {status ? (
            <h2 className={winOrLost}>You have won the game!</h2>
          ) : (
            <h2 className={winOrLost}>Better luck next time!</h2>
          )}
          <div className="points">Total points: {points}</div>
          <ul>{summary}</ul>
          <Button>Start over</Button>
        </body>
      </Jumbotron>
    );
  }
}

export default Summary;
