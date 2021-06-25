import "./NoMatch.css";
import { Jumbotron, Image } from "react-bootstrap";
import nomatchmario from "../../Images/nomatchmario.gif";
import { useLocation } from "react-router-dom";

function NoMatch(props) {
  const location = useLocation();
  return (
    <Jumbotron className="noMatchJumbo">
      <h3 className="noMatchMsg">No match for the path: {location.pathname}</h3>
      <Image src={nomatchmario} alt="No page found" className="noMatchImg" />
    </Jumbotron>
  );
}

export default NoMatch;
