import React, { Component } from "react";
import { Button, Jumbotron } from "react-bootstrap";
import "./LandingLayOut.css";
import { Link } from "react-router-dom";

class LandingLayOut extends Component {
  handleChange = (event) => {
    this.props.handleNameChange(event.target.value);
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
  };

  render() {
    const { playerName } = this.props;
    return (
      <Jumbotron className="border jumbo">
        <div className="landingPage">
          <h1 className="title">Trivia Time</h1>
          <h3 className="instructionsTitle">Rules</h3>
          <span className="instructionsPara">
            {/* <ul className="ruleList"> */}
            <div>1000 points wins the game.</div>
            <div>Each round has up to 15 questions.</div>
            <div>Easy questions are worth 100 points.</div>
            <div>Medium questions are worth 200 points.</div>
            <div>Hard questions are worth 300 points.</div>
            <div>Hints cost 50 points and display a helpful GIF.</div>
            <div>
              If you have not scored 1000 points after question 15, you lose the
              game.
            </div>
            {/* </ul> */}
          </span>
          <form className="landingForm" onSubmit={this.onSubmit}>
            <label className="playerName" for="playerName">
              Player Name:{" "}
            </label>
            <input
              className="nameField"
              onChange={this.handleChange}
              type="text"
              name="name"
              value={playerName}
              required
            />
            <br />
            <Link to="/game">
              <Button type="submit" value="Submit">
                START
              </Button>
            </Link>
          </form>
        </div>
      </Jumbotron>
    );
  }
}

export default LandingLayOut;
