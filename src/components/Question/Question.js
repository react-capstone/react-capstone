import React, { Component } from "react";
import { Button, Form, Jumbotron } from "react-bootstrap";
import "./Question.css";
import Summary from "../Summary/Summary";
import Hint from "../Hint/Hint";
import { House } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

class Question extends Component {
  state = {
    points: 0,
    userAnswers: [],
    currentAnswer: "",
    hint: false,
    // currentQuestionNumber: 0,
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
    this.props.handleNextQuestion();
    const { userAnswers, currentAnswer, hint } = this.state;
    const { currentQuestionNumber } = this.props;
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
      // this.props.currentQuestionNumber + 1;
      // this.props.handleNextQuestion();
      return {
        userAnswer: answers,
        // currentQuestionNumber: currentState.currentQuestionNumber + 1,
        points: currentState.points + pointsAdd,
        currentAnswer: "",
        hint: false,
      };
    });
  };
  render() {
    const {
      triviaQuestions,
      playerName,
      currentQuestionNumber,
      allAnswersMapped,
    } = this.props;
    const { userAnswers, points, hint } = this.state;
    const currentQuestion = triviaQuestions[currentQuestionNumber];
    // console.log("currentQuestionNumber", currentQuestionNumber);
    // console.log(hint);
    // console.log("currentQuestion", currentQuestion);
    // let allAnswers;
    // let allAnswersMapped;

    // if (currentQuestion) {
    //   let randomNum = Math.random() * 4;
    //   allAnswers = [...currentQuestion.incorrect_answers];
    //   allAnswers.splice(randomNum, 0, currentQuestion.correct_answer);
    //   allAnswersMapped = allAnswers.map((answer) => (
    //     <span
    //       key={answer}
    //       dangerouslySetInnerHTML={{
    //         __html: answer + ", ",
    //       }}
    //     ></span>
    //   ));
    // }

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
              playerName={playerName}
            />
          </h1>
        ) : (
          <></>
        )}
        {currentQuestion && (
          <Jumbotron className="jumbo">
            <div className="text-center">
              {" "}
              <Link to="/">
                <House size={50} />
              </Link>
            </div>

            <hr />

            {points < 100 ? (
              <>
                <p className="text-center">
                  Current Points for {playerName}: {points}
                </p>

                <h3>
                  <i className="category">Category: </i>"
                  {currentQuestion.category}"{" "}
                </h3>
                <hr />
                <h3
                  dangerouslySetInnerHTML={{
                    __html:
                      "<i className='question'>Question: </i>" +
                      currentQuestion.question,
                  }}
                >
                  {/* Question: {currentQuestion.question} */}
                </h3>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicInput">
                    <Form.Label></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter answer"
                      value={this.state.currentAnswer}
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted worth">
                      This question is worth:{" "}
                      {this.calculatePoints(currentQuestion)} points
                    </Form.Text>{" "}
                    {allAnswersMapped ? (
                      <div className="text-center">
                        {" "}
                        <p className="choices">Here are the choices:</p>{" "}
                        {allAnswersMapped}
                      </div>
                    ) : (
                      <></>
                    )}
                  </Form.Group>{" "}
                  <div className="text-center">
                    <Button
                      className="button submit-btn"
                      variant="primary"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
                <br />
                <div>
                  {!hint ? (
                    <div className="text-center">
                      {" "}
                      <Button
                        onClick={this.handleHint}
                        className="button"
                        variant="warning"
                        type="submit"
                      >
                        Need a Hint? (50 points)
                      </Button>
                    </div>
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
                playerName={playerName}
              />
            )}
          </Jumbotron>
        )}
      </>
    );
  }
}
export default Question;
