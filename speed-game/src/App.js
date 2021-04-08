import "./App.css";

import React, { Component } from "react";

import Circle from "./Circle";

class App extends Component {
  state = {
    circles: [
      {
        id: 1,
        color: "green",
      },
      {
        id: 2,
        color: "black",
      },
      {
        id: 3,
        color: "pink",
      },
      {
        id: 4,
        color: "orange",
      },
    ],
    score: 0,
  };

  calScore = () => {
    this.setState({
      score: this.state.score + 1,
    });
  };

  render() {
    const circles = this.state.circles.map((circle) => {
      return <Circle key={circle.id} id={circle.id} color={circle.color} />;
    });
    return (
      <div className="App">
        <h1>Speed Game</h1>
        <p>Score: {this.state.score}</p>
        <div className="circleGroup" onClick={this.calScore}>
          {circles}
        </div>
        <button>Start</button>
        <button>Stop</button>
      </div>
    );
  }
}

export default App;
