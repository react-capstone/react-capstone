import React, { Component } from "react";
import { Button, Tab, Row, Nav, Col } from "react-bootstrap";
import UserAnswers from "../UserAnswers";
import CorrectAnswers from "../CorrectAnswers";

class Summary extends Component {
  render() {
    const { status, triviaQuestions, userAnswers, points } = this.props;
    const finalUserAnswers = userAnswers.map((answer) => <li>{answer}</li>);
    return (
      <>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <UserAnswers />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <CorrectAnswers />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        <h1>Thanks for playing! Here is the summary of what you learned :)</h1>
        <h2>{points}</h2>
        <ul>Your answers: {finalUserAnswers}</ul>
        <Button>Start over</Button>
      </>
    );
  }
}

export default Summary;
