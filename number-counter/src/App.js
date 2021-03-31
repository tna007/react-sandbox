import "./App.css";
import React, { Component } from "react";
import "./Header";
import "./Footer";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  state = {
    counter: 0,
  };

  addNum = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  removeNum = () => {
    console.log("removed");
    this.setState({
      counter:
        this.state.counter > 0 ? this.state.counter - 1 : this.state.counter,
    });
  };
  reset = () => {
    console.log("reloaded");
    this.setState({
      counter: 0,
    });
  };

  render() {
    let numberClass = `${
      this.state.counter === 0
        ? ""
        : this.state.counter % 2 === 0
        ? "even "
        : "odd "
    }number`;
    return (
      <div className="App">
        <Header />
        <h1 className={numberClass}>{this.state.counter}</h1>
        <div className="buttons">
          <button onClick={this.addNum}>Increase</button>
          <button onClick={this.removeNum}>Decrease</button>
          <button onClick={this.reset}>Reset</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
