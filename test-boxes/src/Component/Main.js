import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Boxes from "./Boxes";
import Animals from "./AnimalCard";

function Home() {
  return (
    <div>
      <h1>This is homepage</h1>
    </div>
  );
}
function Gallery() {
  return (
    <div>
      <h1>This is Gallery</h1>
    </div>
  );
}
function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/box">Box</Link>
          </li>
          <li>
            <Link to="/animal">Animal</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Main() {
  return (
    <div className="MainRouter">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/box" component={Boxes} />
        <Route path="/animal" component={Animals} />
      </Switch>
    </div>
  );
}

export default Main;
