import React, { Component } from "react";
import { Button } from "react-bootstrap";

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
        <div className="result">
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
    return (
      <>
        <h1>Thanks for playing! Here is the summary of what you learned :)</h1>
        <h2>{points}</h2>
        <ul>
          Here is how it went: <br />
          {summary}
        </ul>
        <Button>Start over</Button>
      </>
    );
  }
}

export default Summary;
