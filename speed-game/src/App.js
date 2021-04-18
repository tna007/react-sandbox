import "./App.css";

import React, { Component } from "react";

import Circle from "./Circle";
import GameOver from "./GameOver";

import mySound from "./asset/sound/Stock.mp3";

let clickedSound = new Audio(mySound);

const randNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}; // returns a randnum between included min and excluded max

class App extends Component {
  state = {
    circles: [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
    ],
    score: 0,
    current: 0,
    round: 0,
    result: false,
    start: false,
    clicked: false,
  };

  timer;
  SPEED = 1000;

  clickHandler = (id) => {
    console.log(`You clicked ${id}`);
    clickedSound.play();

    if (this.state.current !== id) {
      this.clearGame();
      clickedSound.pause();
      return;
    }

    if (this.state.clicked === false) {
      this.setState({
        clicked: true,
        score: this.state.score + 1,
        round: 0,
      });
    }
  };

  nextCircle = () => {
    if (this.state.round >= 3) {
      this.clearGame();
      return;
    }

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
      round: this.state.round + 1,
      clicked: false,
    });

    console.log(`Active circle: ${this.state.current}`);

    this.SPEED -= 25;
    this.timer = setTimeout(this.nextCircle, this.SPEED);
    console.log("Speed now:", this.SPEED);
  };

  startGame = () => {
    this.nextCircle();
    this.setState({
      start: true,
    });
  };

  clearGame = () => {
    clearTimeout(this.timer);
    this.setState({
      result: true,
    });
  };

  render() {
    const circles = this.state.circles.map((circle) => {
      return (
        <Circle
          key={circle.id}
          id={circle.id}
          color={circle.color}
          click={() => this.clickHandler(circle.id)} // same as click={this.clickHandler.bind(this, circle.ido)}
          active={this.state.current === circle.id}
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
        <button onClick={this.startGame} disabled={this.state.start}>
          Start
        </button>
        <button onClick={this.clearGame}>Stop</button>
        {this.state.result && <GameOver score={this.state.score} />}
      </div>
    );
  }
}

export default App;
