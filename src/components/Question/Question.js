import React, { Component } from "react";
import { Button, Form, Jumbotron } from "react-bootstrap";
import "./Question.css";

class Question extends Component {
  state = {
    points: 0,
    userAnswers: [""],
    currentQuestion: {
      category: "",
    },
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

  handleSubmit = (event) => {
    event.preventDefault();
    const { userAnswers, currentAnswer, currentQuestionNumber, points } =
      this.state;
    //push currentAnswer into userAnswers and set that as userAnswers state
    const answers = userAnswers.push(currentAnswer);
    const currentQuestion = this.props.triviaQuestions[currentQuestionNumber];

    //if there are any questions left/ if player won logic

    let pointsAdd = 0;

    //is answer correct logic
    if (
      currentAnswer.toLowerCase() ===
      currentQuestion.correct_answer.toLowerCase()
    ) {
      pointsAdd = this.calculatePoints(currentQuestion);
    }
    this.setState((currentState) => {
      console.log("currentState", currentState);
      return {
        userAnswer: answers,
        currentQuestionNumber: currentState.currentQuestionNumber + 1,
        points: currentState.points + pointsAdd,
        currentAnswer: "",
      };
    });
  };

  render() {
    const { triviaQuestions } = this.props;
    const { currentQuestionNumber, userAnswers, points } = this.state;
    const currentQuestion = triviaQuestions[currentQuestionNumber];
    console.log(this.props.triviaQuestions);

    return (
      <>
        {currentQuestion && (
          <Jumbotron className="jumbo text-center">
            <h3>Points: {points}</h3>
            <hr />
            <h1>Category: "{currentQuestion.category}" </h1>
            <hr />

            <h2 dangerouslySetInnerHTML={{ __html: currentQuestion.question }}>
              {/* Question: {currentQuestion.question} */}
            </h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicInput">
                <Form.Label>Answer</Form.Label>
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

              <Button className="button" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Jumbotron>
        )}
      </>
    );
  }
}

export default Question;
