import React, { Component } from "react";
import { Image } from "react-bootstrap";

class Hint extends Component {
  state = {
    gifImage: "",
  };
  componentDidMount() {
    const answer = this.props.currentQuestion.correct_answer;
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=iCE14LxKwLeqaGc2y1lO1Q8UCwnmR5Lh&q=${answer}&limit=1&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((info) => {
        console.log("gif data", info);
        // this.setState({
        //   gifImage: data.
        // })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { currentQuestion } = this.props;
    console.log("hint current", currentQuestion);
    return (
      <>
        <div>Hi</div>
      </>
    );
  }
}

export default Hint;
