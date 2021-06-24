import React from "react";
import { Jumbotron } from "react-bootstrap";

const NoMatch = () => {
  return (
    <Jumbotron>
      <h3>Sorry, there's nothing found at: {this.props.location.pathname}</h3>
    </Jumbotron>
  );
};

export default NoMatch;
