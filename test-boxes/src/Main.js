import React, { Component } from "react";

const Box = (props) => {
  const sayHi = () => {
    console.log("clicked");
  };
  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
      <button onClick={sayHi}>Test</button>
    </div>
  );
};

class Main extends Component {
  state = {
    persons: [
      {
        name: "Anh T",
        age: 25,
        title: "student",
      },
      {
        name: "Dan R",
        age: 28,
        title: "ceo",
      },
      {
        name: "Ted K",
        age: 29,
        title: "cfo",
      },
    ],
  };

  sayHi = () => {
    this.setState({
      persons: [
        {
          name: "Dara T",
          age: 25,
          title: "student",
        },
        {
          name: "Louis R",
          age: 28,
          title: "ceo",
        },
        {
          name: "Cindy K",
          age: 29,
          title: "cfo",
        },
      ],
    });
  };

  render() {
    return (
      <main>
        <button onClick={this.sayHi}>Hello from main component</button>
        <div>
          <Box
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            title={this.state.persons[0].title}
          />
          <Box
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            title={this.state.persons[1].title}
          />
          <Box
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            title={this.state.persons[2].title}
          />
        </div>
      </main>
    );
  }
}

export default Main;
