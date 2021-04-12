import "./App.css";

import React, { Component } from "react";

import Circle from "./Circle";

const randNum = function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}; // returns a randnum between included min and excluded max

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
    current: 0,
  };

  timer;
  SPEED = 1000;

  calScore = (id) => {
    console.log(`You clicked ${id}`);
    this.setState({
      score: this.state.score + 1,
    });
  };

  nextCircle = () => {
    let nextActive;

    //let current;
    // do {
    //   nextActive = randNum(0, 4);
    // } while (current === nextActive);

    do {
      nextActive = randNum(1, 5);
    } while (nextActive === this.state.current);

    // current = nextActive;

    this.setState({
      current: nextActive,
    });

    console.log(`Active circle: ${this.state.current}`);

    this.SPEED -= 25;
    this.timer = setTimeout(this.nextCircle, this.SPEED);
    console.log("Speed now:", this.SPEED);
  };

  startGame = () => {
    this.nextCircle();
  };

  clearGame = () => {
    clearTimeout(this.timer);
  };

  render() {
    const circles = this.state.circles.map((circle) => {
      return (
        <Circle
          key={circle.id}
          id={circle.id}
          color={circle.color}
          click={() => this.calScore(circle.id)}
        />
      );
    });
    return (
      <div className="App">
        <h1>Speed Game</h1>
        <p>Score: {this.state.score}</p>
        <div className="circleGroup" /* onClick={this.calScore} */>
          {circles}
        </div>
        <button onClick={this.startGame}>Start</button>
        <button onClick={this.clearGame}>Stop</button>
      </div>
    );
  }
}

export default App;
