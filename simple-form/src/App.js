import React, { Component } from "react";
import "./App.css";
import Form from "./Component/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello</h1>
        </header>
        <main>
          <Form />
        </main>
      </div>
    );
  }
}

export default App;
