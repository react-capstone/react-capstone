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
        question: triviaQuestions[i].question,
      };
    });

    const summary = finalResults.map((result, index) => {
      return (
        <div className="result text-left">
          <li>
            <p>
              {" "}
              Question {index + 1}: {result.question}
            </p>
            <p>
              Your Answer:{" "}
              {result.user === "" ? (
                <span className="noAnswer">No Answer Given</span>
              ) : (
                result.user
              )}
            </p>
            <p>Correct Answer: {result.correct}</p>
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
