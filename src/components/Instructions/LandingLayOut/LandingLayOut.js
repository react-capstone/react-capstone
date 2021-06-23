import React, { Component } from "react";
import { Button, Jumbotron } from "react-bootstrap";
import "./LandingLayOut.css";
import { Link } from "react-router-dom";

class LandingLayOut extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     playerName: "",
  //   };
  // }

  handleChange = (event) => {
    this.props.handleNameChange(event.target.value);
  };

  render() {
    const { playerName } = this.props;
    // console.log(this.state.playerName);
    return (
      <Jumbotron className="border jumbo">
        {/* <h1>{this.props.playerName}</h1> */}
        <div className="landingPage">
          <h1 className="title">Triva Time</h1>
          <h3 className="instructionsTitle">Instructions</h3>
          <span className="instructionsPara">
            -1000 points wins the game.
            <br />
            -Each round has up to 15 questions.
            <br />
            -Easy questions are worth 100 points.
            <br />
            -Medium questions are worth 200 points.
            <br />
            -Hard questions are worth 300 points.
            <br />
            -Hints cost 50 points and display a helpful GIF.
            <br />
            -If you have not scored 1000 points after question 15, you lose the
            game.
            <br />
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
