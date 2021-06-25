import React from "react";
import { Component } from "react";
import "./NoMatch.css";
import { Jumbotron } from "react-bootstrap";

class NoMatch extends Component {
  render() {
    return (
      <Jumbotron className="noMatchJumbo">
        <h3 className="noMatchMsg">
          No match for the path: {this.props.location.pathname}
        </h3>
      </Jumbotron>
    );
  }
}

export default NoMatch;
