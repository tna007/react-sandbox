import React, { Component } from "react";

import "./App.css";

import Form from "./Component/Form";
import View from "./Component/View";
import PopUp from "./Component/PopUp";
import Notes from "./Component/Notes";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    role: "",
    message: "",
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
      [e.target.name]: e.target.value,
    });
  };

  showPopUpHandler = (event) => {
    event.preventDefault();
    this.setState({
      showPopUp: true,
    });
  };

  render() {
    const props = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      role: this.state.role,
      message: this.state.message,
    };
    return (
      <div className="App">
        {this.state.showPopUp && <PopUp {...props} />}
        <Form value={this.changeHandler} showOverlay={this.showPopUpHandler} />
        <View {...props} />
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
