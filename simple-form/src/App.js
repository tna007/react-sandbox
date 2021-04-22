import React, { Component } from "react";

import "./App.css";

import Form from "./Component/Form";
import View from "./Component/View";
import PopUp from "./Component/PopUp";
import Notes from "./Component/Notes";

class App extends Component {
  state = {
    inputData: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      role: "",
      message: "",
    },
    showPopUp: false,
    notes: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/notes")
      .then((resp) => resp.json())
      .then((json) =>
        this.setState({
          notes: json,
        })
      );
  }

  changeHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  showPopUpHandler = (event) => {
    event.preventDefault();
    this.setState({
      showPopUp: true,
    });
  };

  sendDataHandler = () => {
    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.inputData),
    };
    fetch("http://localhost:3001/notes", requestOption)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        console.log(data.id);
      });
    alert("Note posted", window.location.reload());
  };

  render() {
    return (
      <div className="App">
        {this.state.showPopUp && (
          <PopUp {...this.state.inputData} submit={this.sendDataHandler} />
        )}
        <Form value={this.changeHandler} showOverlay={this.showPopUpHandler} />
        <section>
          <View {...this.state.inputData} />
          <Notes notes={this.state.notes} />
        </section>
      </div>
    );
  }
}

export default App;
