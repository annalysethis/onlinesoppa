import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SoupMenu from "./components/SoupMenu";
import AccountPage from "./components/AccountPage";
import ShoppingList from './components/ShoppingList';


const routes = () => (
  
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/soupmenu" exact component={SoupMenu} />
    <Route path="/shoppinglist" exact component={ShoppingList} />
    <Route path="/accountpage" exact component={AccountPage} />
  </Switch>
);

export default routes;
