import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./Error.css";

const Error = () => {
  return (
    <Jumbotron className="sorryMsg">
      <h3>Sorry, the server is unable to fulfill your request.</h3>
      <h3>Please try again later.</h3>
    </Jumbotron>
  );
};

export default Error;
