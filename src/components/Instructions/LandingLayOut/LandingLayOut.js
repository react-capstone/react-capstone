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
          <p className="instructionsPara">
            -Vivamus eu nibh elementum, consequat massa vitae, venenatis ipsum.
            <br></br>
            -Quisque faucibus erat hendrerit purus aliquet blandit.
            <br></br>
            -Nam vitae ipsum sed dui mattis efficitur nec a mi.
            <br></br>
            -Phasellus sed mi pretium, placerat odio sit amet, pulvinar dui.
          </p>
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
