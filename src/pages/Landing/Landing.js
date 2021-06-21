import React, { Component } from "react";
import LandingLayOut from "../../components/Instructions/LandingLayOut/LandingLayOut";
import Instructions from "../../components/Instructions/Instructions";

class Landing extends Component {
  render() {
    return (
      <div>
        <LandingLayOut />
        <Instructions />
      </div>
    );
  }
}

export default Landing;
