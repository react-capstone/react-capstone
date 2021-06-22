import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./LandingLayOut.css";
import { Link } from "react-router-dom";

class LandingLayOut extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     playerName: "",
  //   };
  // }

  // handleChange = (event) => {
  //   this.props.handleNameChange();
  // };

  render() {
    // const { playerName } = this.state;
    // console.log(this.state.playerName);
    return (
      <>
        <div className="border">
          <body className="landingPage">
            <section>
              <h1 className="title">Triva Time</h1>
              <h3 className="instructionsTitle">Instructions</h3>
              <p className="instructionsPara">
                -Vivamus eu nibh elementum, consequat massa vitae, venenatis
                ipsum.
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
                  // onChange={this.handleChange}
                  type="text"
                  name="Player Name:"
                />
              </form>
            </section>
            <Link to="/game">
              <Button>START</Button>
            </Link>
          </body>
        </div>
      </>
    );
  }
}

export default LandingLayOut;
