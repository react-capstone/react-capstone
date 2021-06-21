import React, { Component } from "react";
import Instructions from "../Instructions";
import { Button } from "react-bootstrap";

class LandingLayOut extends Component {
  render() {
    return (
      <div>
        <h1>LandingLayOut</h1>
        <Instructions />
        <Button>START</Button>
      </div>
    );
  }
}

export default LandingLayOut;
