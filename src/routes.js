import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SoupMenu from "./components/SoupMenu";
import AccountPage from "./components/AccountPage";
import ShoppingList from './components/ShoppingCart/ShoppingList';
import Location from "./components/Location"
import DrinkMenu from "./components/DrinkMenu"
import ExtrasMenu from "./components/ExtrasMenu"
import Address from "./components/ShoppingCart/Address";
import Payment from "./components/ShoppingCart/Payment"
import Finished from "./components/ShoppingCart/Finished"


const routes = () => (
  
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/soupmenu" exact component={SoupMenu} />
    <Route path="/shoppinglist" exact component={ShoppingList} />
    <Route path="/accountpage" exact component={AccountPage} />
    <Route path="/location" exact component={Location} />
    <Route path="/drinks" exact component={DrinkMenu} />
    <Route path="/extras" exact component={ExtrasMenu} />
    <Route path="/address" exact component={Address} />
    <Route path="/payment" exact component={Payment} />
    <Route path="/address" exact component={Address} />
    <Route path="/finished" exact component={Finished} />
  </Switch>
);

export default routes;
