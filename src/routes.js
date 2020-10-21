import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SoupMenu from "./components/SoupMenu";
import ShoppingCart from './components/ShoppingCart'

const routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/soupmenu" exact component={SoupMenu} />
    <Route path="/shoppingcart" exact component={ShoppingCart} />
  </Switch>
);

export default routes;
