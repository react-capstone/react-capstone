import React, { Component } from "react";
import { Button, Jumbotron } from "react-bootstrap";
import "./Summary.css";
import { Link } from "react-router-dom";

class Summary extends Component {
  handleClick = (event) => {
    window.location.reload(false);
  };

  render() {
    const { status, triviaQuestions, userAnswers, points, playerName } =
      this.props;
    console.log("name", playerName);
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
            <p
              dangerouslySetInnerHTML={{
                __html: `Question ${index + 1}: ${result.question}`,
              }}
            ></p>
            <p>
              Your Answer:{" "}
              {result.user === "" ? (
                <span className="noAnswer">No Answer Given</span>
              ) : (
                result.user
              )}
            </p>

            <p
              dangerouslySetInnerHTML={{
                __html: "Correct Answer: " + result.correct,
              }}
            ></p>
          </li>
        </div>
      );
    });
    console.log("finalResults", finalResults);
    const winOrLost = status ? "win" : "lost";
    return (
      <Jumbotron>
        <body className="summary-container text-center">
          <h1>Thanks for playing {playerName}!</h1>
          <h3>Here is how you did :)</h3>
          {status ? (
            <h2 className={winOrLost}>You have won the game!</h2>
          ) : (
            <h2 className={winOrLost}>Better luck next time!</h2>
          )}
          <div className="points">Total points: {points}</div>
          <ul>{summary}</ul>
          <Link to="/game">
            <Button onClick={this.handleClick}>Start over</Button>
          </Link>{" "}
          <Link to="/">
            <Button variant="danger">New Player</Button>
          </Link>
        </body>
      </Jumbotron>
    );
  }
}

export default Summary;
