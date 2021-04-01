import React from "react";
import { Switch, Route, Link } from "react-router-dom";

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
        </ul>
      </nav>
    </div>
  );
}

function MainRouter() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gallery" component={Gallery} />
      </Switch>
    </div>
  );
}

export default MainRouter;
