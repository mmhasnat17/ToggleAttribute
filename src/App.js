import React, { Component } from "react";
import ReactDOM from "react-dom";
import Switch from "react-switch";

class App extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <label>
        <h2>Toggle Swtich</h2>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
        <p>
          Toggle is <b>{this.state.checked ? "ON" : "OFF"}</b>
        </p>
      </label>
    );
  }
}

export default App;
