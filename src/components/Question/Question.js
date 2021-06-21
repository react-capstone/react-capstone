import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class Question extends Component {
  state = {
    points: 0,
    userAnswers: [""],
    currentQuestion: {},
    currentAnswer: "",
    submit: false,
    currentQuestionNumber: 0,
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

    let pointsAdd = 0;

    //is answer correct logic
    if (currentAnswer === currentQuestion.correct_answer) {
      pointsAdd = 1;
    }
    this.setState((currentState) => {
      console.log("currentState", currentState);
      return {
        userAnswer: answers,
        currentQuestionNumber: currentState.currentQuestionNumber + 1,
        points: currentState.points + pointsAdd,
      };
    });
  };

  render() {
    const { triviaQuestions } = this.props;
    const { currentQuestionNumber, currentAnswer, userAnswers, points } =
      this.state;

    console.log(this.props.triviaQuestions);
    console.log(userAnswers);
    console.log(points);
    return (
      <div>
        <h1>{triviaQuestions[currentQuestionNumber].question}</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicInput">
            <Form.Label>Answer</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter answer"
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">You got this!</Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Question;
