import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SoupMenu from "./components/SoupMenu";
import ShoppingCart from './components/ShoppingCart';
import ShoppingList from './components/ShoppingList'


const routes = () => (
  
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/soupmenu" exact component={SoupMenu} />
    {/* <Route path="/shoppingart" exact component={ShoppingCart} /> */}
    <Route path="/shoppinglist" exact component={ShoppingList} />
  </Switch>
);

export default routes;
