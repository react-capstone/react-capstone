import React, { Component } from "react";
import Instructions from "../Instructions";
import { Button } from "react-bootstrap";
import css from "./LandingLayOut.css";


class LandingLayOut extends Component {
  render() {
    return (
      <div className="landingPage">
        <section>
        <h1 className="title">Triva Time</h1>
        <h3 className="instructionsTitle">Instructions</h3>
        <p className="instructionsPara">-Vivamus eu nibh elementum, consequat massa vitae, venenatis ipsum.
          <br></br>
-Quisque faucibus erat hendrerit purus aliquet blandit.
<br></br>
-Nam vitae ipsum sed dui mattis efficitur nec a mi.
<br></br>
-Phasellus sed mi pretium, placerat odio sit amet, pulvinar dui.</p>
        <form>
          <label for="PlayerName">Player Name:</label>
        <input type="text" className="playerName" name="Player Name:" /> 
        </form>
        </section>
        {/* <Instructions /> */}
        <Button>START</Button>
      </div>
    );
  }
}

export default LandingLayOut;
