import React, { Component } from "react";
import "./App.css";
import Form from "./Component/Form";
import View from "./Component/View";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    role: "",
    message: "",
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
        <header className="App-header">
          <h1>Hello</h1>
        </header>
        <Form value={this.changeHandler} />
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
