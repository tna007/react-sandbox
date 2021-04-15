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
  };

  showPopUpHandler = (event) => {
    event.preventDefault();
    this.setState({
      showPopUp: true,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.showPopUp && (
          <PopUp
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            phoneNumber={this.state.phoneNumber}
            role={this.state.role}
            message={this.state.message}
          />
        )}
        <Form value={this.changeHandler} showOverlay={this.showPopUpHandler} />
        <View
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phoneNumber={this.state.phoneNumber}
          role={this.state.role}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
