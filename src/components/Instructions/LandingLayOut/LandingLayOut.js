import React, { Component } from "react";
import { Button, Jumbotron } from "react-bootstrap";
import "./LandingLayOut.css";
import { Link } from "react-router-dom";

class LandingLayOut extends Component {
  handleChange = (event) => {
    this.props.handleNameChange(event.target.value);
  };

  render() {
    const { playerName } = this.props;
    return (
      <Jumbotron className="border jumbo">
        <div className="landingPage">
          <h1 className="title">Trivia Time</h1>
          <h3 className="instructionsTitle">Instructions</h3>
          <span className="instructionsPara">
            <ul className="ruleList">
              <li>1000 points wins the game.</li>
              <li>Each round has up to 15 questions.</li>
              <li>Easy questions are worth 100 points.</li>
              <li>Medium questions are worth 200 points.</li>
              <li>Hard questions are worth 300 points.</li>
              <li>Hints cost 50 points and display a helpful GIF.</li>
              <li>
                If you have not scored 1000 points after question 15, you lose
                the game.
              </li>
            </ul>
          </span>
          <form>
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
          </form>

          <Link to="/game">
            <Button>START</Button>
          </Link>
        </div>
      </Jumbotron>
    );
  }
}

export default LandingLayOut;
