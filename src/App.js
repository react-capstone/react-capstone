import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Game from "./pages/Game/Game";
import Summary from "./components/Summary/Summary";
import NoMatch from "./components/NoMatch/NoMatch";
import Error from "./components/Error/Error";

class App extends Component {
  state = {
    questions: {},
    playerName: "",
    error: false,
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
          questions: data.results,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  }

  render() {
    const { questions, playerName, error } = this.state;
    return (
      <main>
        {error ? (
          <Error />
        ) : (
          <Switch>
            <Route exact path="/">
              <Landing
                handleNameChange={this.handleNameChange}
                playerName={this.state.playerName}
              />
            </Route>
            <Route exact path="/game">
              <Game triviaQuestions={questions} playerName={playerName} />
            </Route>
            <Route exact path="/summary">
              <Summary playerName={playerName} />
            </Route>
            <Route path="*" component={NoMatch} />
          </Switch>
        )}
      </main>
    );
  }
}

export default App;
