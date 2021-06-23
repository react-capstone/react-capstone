import React, { Component } from "react";

export default class NoMatch extends Component {
  render() {
    return (
      <h3>Sorry, there's nothing found at: {this.props.location.pathname}</h3>
    );
  }
}
