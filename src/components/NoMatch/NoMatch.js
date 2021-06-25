import React from "react";
import "./NoMatch.css";
import { Jumbotron, Image } from "react-bootstrap";
import nomatchmario from "../../Images/nomatchmario.gif";

const NoMatch = () => {
  return (
    <Jumbotron className="noMatchJumbo">
      <h3 className="noMatchMsg">
        No match for the path: {this.props.location.pathname}
      </h3>
      <Image src={nomatchmario} alt="No page found" className="noMatchImg" />
    </Jumbotron>
  );
};

export default NoMatch;
