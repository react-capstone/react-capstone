import React, { Component } from "react";
import Instructions from "../Instructions";
import { Jumbotron, Button } from "react-bootstrap";
import "./LandingLayOut.css";

class LandingLayOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
    };
  }

  render() {
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
                  Player Name:
                </label>
                <input className="nameField" type="text" name="Player Name:" />
              </form>
            </section>
            {/* <Instructions /> */}
            <Button>START</Button>
          </body>
        </div>
      </>
    );
  }
}

export default LandingLayOut;
