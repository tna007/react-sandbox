import React, { Component } from "react";

const AnimalCard = (props) => {
  const getName = () => {
    alert("This is a " + props.name);
  };
  return (
    <div className="animalCard">
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name}></img>
      <button onClick={getName}>More</button>
    </div>
  );
};

class Animals extends Component {
  state = {
    animals: [
      {
        id: 1,
        name: "Fox",
        img: "https://source.unsplash.com/xUUZcpQlqpM/1600x1000",
      },
      {
        id: 2,
        name: "Rabbit",
        img: "https://source.unsplash.com/um1BsyEVB5U/1600x1000",
      },
      {
        id: 3,
        name: "Wolf",
        img: "https://source.unsplash.com/WFPWB7Vum1E/1600x1000",
      },
    ],
  };

  render() {
    const animalList = this.state.animals.map((animal) => {
      return <AnimalCard key={animal.id} name={animal.name} img={animal.img} />;
    });

    return <main className="animal">{animalList}</main>;
  }
}
export default Animals;
