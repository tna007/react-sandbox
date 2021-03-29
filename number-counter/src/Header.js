import React, { Component } from "react";

class Header extends Component {
  state = {
    today: Date(),
  };
  render() {
    return (
      <header>
        <nav>
          <h1>Number counter</h1>
          <p>{this.state.today}</p>
        </nav>
      </header>
    );
  }
}

export default Header;
