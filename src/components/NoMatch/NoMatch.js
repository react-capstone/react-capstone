import React from "react";
import { Component } from "react";
import "./NoMatch.css";

class NoMatch extends Component {
  render() {
    return (
      <h3 className="noMatchMsg">
        No match for the path: {this.props.location.pathname}
      </h3>
    );
  }
}

export default NoMatch;
