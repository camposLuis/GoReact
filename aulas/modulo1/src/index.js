import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class Button extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

class App extends Component {
  state = {
    counter: 0
  };

  henderOnclick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <h1>Hello Rocketseat</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.henderOnclick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
