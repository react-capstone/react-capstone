import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Error from "../Error/Error";

class Hint extends Component {
  state = {
    gifImage: "",
    error: false,
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
        this.setState({
          error: true,
        });
      });
  }

  render() {
    const { gifImage, error } = this.state;
    return (
      <>
        {error ? (
          <Error />
        ) : (
          <Image src={gifImage} alt="gifImage" width="250" />
        )}
      </>
    );
  }
}

export default Hint;
