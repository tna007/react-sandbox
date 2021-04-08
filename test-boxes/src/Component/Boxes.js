import React, { Component } from "react";

function Box(props) {
  const sayHi = () => {
    console.log("Yeee");
  };
  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
      <button onClick={sayHi}>Click Me</button>
    </div>
  );
}

class Boxes extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: "Anh T",
        age: 25,
        title: "student",
      },
      {
        id: 2,
        name: "Dan R",
        age: 28,
        title: "ceo",
      },
      {
        id: 3,
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
          id: 1,
          name: "Dara T",
          age: 25,
          title: "student",
        },
        {
          id: 2,
          name: "Louis R",
          age: 28,
          title: "ceo",
        },
        {
          id: 3,
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
          {this.state.persons.map((person) => {
            return (
              <Box
                name={person.name}
                age={person.age}
                title={person.title}
                key={person.id}
              />
            );
          })}

          <Box
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            title={this.state.persons[0].title}
          />
        </div>
      </main>
    );
  }
}

export default Boxes;
