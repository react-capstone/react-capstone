import React, { Component } from "react";
import { Button, Form, Jumbotron, ProgressBar } from "react-bootstrap";
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
  };

  calculatePoints = (question) => {
    // if (question.difficulty === "easy") {
    //   return 100;
    // } else if (question.difficulty === "medium") {
    //   return 200;
    // } else {
    //   return 300;
    // }
    return ["", "easy", "medium", "hard"].indexOf(question.difficulty) * 100;
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
      currentAnswer.toLowerCase().trim() ===
      currentQuestion.correct_answer.toLowerCase()
    ) {
      pointsAdd = this.calculatePoints(currentQuestion);
    }

    hint ? (pointsAdd -= 50) : (pointsAdd += 0);

    this.setState((currentState) => {
      return {
        userAnswer: answers,
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
    const progress = (currentQuestionNumber + 1) / triviaQuestions.length;
    return (
      <>
        {points < 1000 && currentQuestionNumber === triviaQuestions.length ? (
          <Jumbotron className="jumbo">
            {" "}
            <div className="text-center">
              {" "}
              <Link to="/">
                <House size={50} />
              </Link>
            </div>
            <Summary
              status={false}
              triviaQuestions={triviaQuestions}
              userAnswers={userAnswers}
              points={points}
              playerName={playerName}
            />
          </Jumbotron>
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

            {points < 1000 ? (
              <>
                {playerName === "" ? (
                  <p className="text-center"> Current Points: {points}</p>
                ) : (
                  <p className="text-center">
                    Current Points for {playerName}: {points}
                  </p>
                )}

                <h3 className="text-center">{currentQuestion.category} </h3>
                <hr />
                <h3
                  dangerouslySetInnerHTML={{
                    __html:
                      "<i className='question'>Question: </i>" +
                      currentQuestion.question,
                  }}
                ></h3>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicInput">
                    <Form.Label></Form.Label>{" "}
                    <Form.Text className="worth text-center">
                      This question is worth:{" "}
                      {this.calculatePoints(currentQuestion)} points
                    </Form.Text>{" "}
                    <Form.Control
                      type="text"
                      placeholder="Enter answer"
                      value={this.state.currentAnswer}
                      onChange={this.handleChange}
                    />
                    {allAnswersMapped ? (
                      <div className="text-center choices-container">
                        {" "}
                        <p className="choices">
                          <i>Here are the choices:</i>
                        </p>{" "}
                        {allAnswersMapped}
                      </div>
                    ) : (
                      <></>
                    )}
                    <ProgressBar
                      animated
                      variant="success"
                      now={progress * 100}
                      label={`${currentQuestionNumber + 1}/${
                        triviaQuestions.length
                      }`}
                    />
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
                        Need a Hint? (-50 points)
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Hint currentQuestion={currentQuestion} />
                    </div>
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
