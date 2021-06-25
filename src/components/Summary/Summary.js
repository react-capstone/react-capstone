import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Summary.css";
import { Link } from "react-router-dom";
class Summary extends Component {
  handleClick = (event) => {
    window.location.reload(false);
  };
  render() {
    const { status, triviaQuestions, userAnswers, points, playerName } =
      this.props;
    let finalResults = userAnswers.map((userAnswer, i) => {
      return {
        user: userAnswer,
        correct: triviaQuestions[i].correct_answer,
        question: triviaQuestions[i].question,
        isCorrect:
          userAnswer.toLowerCase().trim() ===
          triviaQuestions[i].correct_answer.toLowerCase(),
      };
    });

    const summary = finalResults.map((result, index) => {
      return (
        <div className="result text-left">
          <i
            dangerouslySetInnerHTML={{
              __html: `Question ${index + 1}: ${result.question}`,
            }}
          ></i>
          <div
            className={`display ${result.isCorrect ? `yes` : `wrongAnswer`}`}
          >
            Your Answer:{" "}
            {result.user === "" ? (
              <span className="noAnswer">No Answer Given</span>
            ) : (
              result.user
            )}
          </div>

          <div
            className="display"
            dangerouslySetInnerHTML={{
              __html: `Correct Answer: ${result.correct}`,
            }}
          ></div>
        </div>
      );
    });
    console.log("finalResults", finalResults);
    const winOrLost = status ? "win" : "lost";
    return (
      <div className="summary-container text-center">
        <h1>Thanks for playing {playerName}!</h1>
        <h3>Here is how you did :)</h3>
        {status ? (
          <h2 className={winOrLost}>You have won the game!</h2>
        ) : (
          <h2 className={winOrLost}>Better luck next time!</h2>
        )}
        <div className="points">Total points: {points}</div>
        <p>{summary}</p>
        <div>
          {" "}
          <Link to="/game">
            <Button onClick={this.handleClick}>Start Over</Button>
          </Link>
        </div>
        <br />
        <div>
          <Link to="/">
            <Button variant="danger">New Player, Same Questions</Button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Summary;
