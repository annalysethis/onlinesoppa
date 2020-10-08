import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SoupMenu from "./components/SoupMenu";

const routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/soupmenu" exact component={SoupMenu} />
  </Switch>
);

export default routes;
