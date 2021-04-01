import React from "react";
import Home from "./Home";
import About from "./About";
import Recipes from "./Recipes";

import { Switch, Route } from "react-router-dom";
function Main() {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/recipes" component={Recipes} />
      </Switch>
    </main>
  );
}

export default Main;
