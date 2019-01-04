import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";
import { HashRouter, Switch, Route } from "react-router-dom";

export default (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/wizard" component={Wizard} />
    </Switch>
  </HashRouter>
);
