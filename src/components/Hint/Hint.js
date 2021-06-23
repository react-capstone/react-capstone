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
        this.setState({
          gifImage: info.data[0].images.original.url,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { currentQuestion } = this.props;
    const { gifImage } = this.state;
    console.log("hint gif", gifImage);
    return (
      <>
        {/* <i>Hi</i> */}
        <img src={gifImage} alt="gifImage" width="250" />
      </>
    );
  }
}

export default Hint;
