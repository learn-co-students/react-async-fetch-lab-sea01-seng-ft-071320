import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return;
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((resp) => resp.json())
      .then(this.setState);
  }
}

export default App;
