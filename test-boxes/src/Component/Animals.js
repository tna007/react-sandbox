import React, { Component } from "react";
import { animals } from "./AnimalList";
import Search from "./Search";

const AnimalCard = (props) => {
  const getName = () => {
    alert("This is a " + props.name);
  };
  return (
    <div className="animalCard">
      <h2>{props.name}</h2>
      <img
        src={`https://source.unsplash.com/1600x900?${props.name}`}
        alt={props.name}
      ></img>
      <button onClick={getName}>More</button>
    </div>
  );
};

class Animals extends Component {
  state = {
    animals: animals,
    searchInput: "",
  };

  clickHandler = (name) => {
    alert("My name is", name);
  };

  searchHandler = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
    console.log(this.state.searchInput);
  };
  render() {
    const animalFilter = this.state.animals.filter((obj) => {
      return obj.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });

    const animalList = animalFilter.map((animal) => {
      return (
        <AnimalCard
          key={animal.name}
          name={animal.name}
          clickme={() => this.clickHandler(animal.name)}
        />
      );
    });

    return (
      <main>
        <Search search={this.searchHandler} />
        <p>{this.state.searchInput}</p>
        <div className="animal">{animalList} </div>
      </main>
    );
  }
}
export default Animals;
