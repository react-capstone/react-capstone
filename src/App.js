import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Game from "./pages/Game/Game";
import Summary from "./components/Summary/Summary";
import Question from "./components/Question/Question";

class App extends Component {
  state = {
    questions: {},
    playerName: "",
  };

  handleNameChange = (playerName) => {
    this.setState({
      playerName: playerName,
    });
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
    const { questions, playerName } = this.state;
    console.log(playerName);
    return (
      <div>
        <main>
          <Switch>
            <Route exact path="/">
              <Landing
                handleNameChange={this.handleNameChange}
                playerName={this.state.playerName}
              />
            </Route>
            <Route exact path="/game">
              <Game triviaQuestions={questions} />
            </Route>
            {/* <Route exact path="/points">
          <Points />
        </Route> */}
            <Route exact path="/summary">
              <Summary />
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
