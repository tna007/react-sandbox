import React, { Component } from "react";

import "./App.css";

import Form from "./Component/Form";
import View from "./Component/View";
import PopUp from "./Component/PopUp";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    role: "",
    message: "",
    showPopUp: false,
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(
      this.state.firstName,
      this.state.lastName,
      this.state.phoneNumber,
      this.state.role,
      this.state.message
    );
  };
  render() {
    return (
      <div className="App">
        <Form value={this.changeHandler} />
        <View
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phoneNumber={this.state.phoneNumber}
          role={this.state.role}
          message={this.state.message}
        />
        {this.state.showPopUp && <PopUp />}
      </div>
    );
  }
}

export default App;
