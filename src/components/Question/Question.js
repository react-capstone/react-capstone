import React, { Component } from "react";
import { Button, Form, Jumbotron } from "react-bootstrap";
import "./Question.css";
import Summary from "../Summary/Summary";
import Hint from "../Hint/Hint";

class Question extends Component {
  state = {
    points: 0,
    userAnswers: [],
    currentAnswer: "",
    hint: false,
    currentQuestionNumber: 0,
  };
  calculatePoints = (question) => {
    if (question.difficulty === "easy") {
      return 100;
    } else if (question.difficulty === "medium") {
      return 200;
    } else {
      return 300;
    }
  };
  handleChange = (event) => {
    this.setState({
      currentAnswer: event.target.value,
    });
  };

  handleHint = () => {
    this.setState({
      hint: true,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { userAnswers, currentAnswer, currentQuestionNumber, points, hint } =
      this.state;
    //push currentAnswer into userAnswers and set that as userAnswers state
    const answers = userAnswers.push(currentAnswer);
    const currentQuestion = this.props.triviaQuestions[currentQuestionNumber];

    let pointsAdd = 0;

    if (
      currentAnswer.toLowerCase() ===
      currentQuestion.correct_answer.toLowerCase()
    ) {
      pointsAdd = this.calculatePoints(currentQuestion);
    }

    hint ? (pointsAdd -= 50) : (pointsAdd += 0);
    this.setState((currentState) => {
      console.log("currentState", currentState);
      return {
        userAnswer: answers,
        currentQuestionNumber: currentState.currentQuestionNumber + 1,
        points: currentState.points + pointsAdd,
        currentAnswer: "",
        hint: false,
      };
    });
  };
  render() {
    const { triviaQuestions } = this.props;
    const { currentQuestionNumber, userAnswers, points, hint } = this.state;
    const currentQuestion = triviaQuestions[currentQuestionNumber];
    console.log(hint);
    // console.log(this.props.triviaQuestions);
    return (
      <>
        {points < 100 && currentQuestionNumber === triviaQuestions.length ? (
          <h1>
            <Summary
              status={false}
              triviaQuestions={triviaQuestions}
              userAnswers={userAnswers}
              points={points}
            />
          </h1>
        ) : (
          <></>
        )}
        {currentQuestion && (
          <Jumbotron className="jumbo text-center">
            {/* <h3>Points: {points}</h3> */}
            <hr />

            {points < 100 ? (
              <>
                <h3>Points: {points}</h3>
                <h1>Category: "{currentQuestion.category}" </h1>
                <hr />
                <h2
                  dangerouslySetInnerHTML={{
                    __html: "Question: " + currentQuestion.question,
                  }}
                >
                  {/* Question: {currentQuestion.question} */}
                </h2>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicInput">
                    <Form.Label></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter answer"
                      value={this.state.currentAnswer}
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                      This question is worth:{" "}
                      {this.calculatePoints(currentQuestion)}
                    </Form.Text>
                  </Form.Group>
                  <div>
                    <Button className="button" variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
                <br />
                <div>
                  {!hint ? (
                    <Button
                      onClick={this.handleHint}
                      className="button"
                      variant="warning"
                      type="submit"
                    >
                      Need a Hint? (50 points)
                    </Button>
                  ) : (
                    <Hint currentQuestion={currentQuestion} />
                  )}
                </div>
              </>
            ) : (
              <Summary
                status={true}
                userAnswers={userAnswers}
                points={points}
                triviaQuestions={triviaQuestions}
              />
            )}
          </Jumbotron>
        )}
      </>
    );
  }
}
export default Question;
