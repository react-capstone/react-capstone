import React, { Component } from "react";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Game from "./pages/Game/Game";
import Summary from "./components/Summary/Summary";

class App extends Component {
  state = {
    questions: {},
  };

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=15")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data.results);
        this.setState({
          // state :question has the array of 15 results from API
          questions: data.results,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    const { questions } = this.state;
    return (
      <>
        <Landing />
        <hr />
        <Game triviaQuestions={questions} />
        <hr />
        <Summary />
      </>
    );
  }
}

export default App;
