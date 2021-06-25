import React from "react";
import { Jumbotron, Image } from "react-bootstrap";
import "./Error.css";
import errorMario from "../../Images/ErrorMario.gif";

const Error = () => {
  return (
    <Jumbotron className="sorryMsg">
      <h3>Sorry, the server is unable to fulfill your request.</h3>
      <h3>Please try again later.</h3>
      <Image src={errorMario} alt="api fail"></Image>
    </Jumbotron>
  );
};

export default Error;
