import React, { Component } from "react";
import LandingLayOut from "../../components/Instructions/LandingLayOut/LandingLayOut";
// import Instructions from "../../components/Instructions/Instructions";

class Landing extends Component {
  render() {
    const { handleNameChange, playerName } = this.props;
    return (
      <div>
        <LandingLayOut
          handleNameChange={handleNameChange}
          playerName={playerName}
        />
        {/* <Instructions /> */}
      </div>
    );
  }
}

export default Landing;
