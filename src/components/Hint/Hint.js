import React, { Component } from "react";
import { Image } from "react-bootstrap";

class Hint extends Component {
  state = {
    gifImage: "",
  };
  componentDidMount() {
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const answer = this.props.currentQuestion.correct_answer;
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${answer}&limit=1&offset=0&rating=g&lang=en`
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
    const { gifImage } = this.state;
    return (
      <>
        <Image src={gifImage} alt="gifImage" width="250" />
      </>
    );
  }
}

export default Hint;
