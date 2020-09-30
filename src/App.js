import React from "react";
import { GlobalStyles } from "./global";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { theme } from "./theme";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SoupMenu from "./components/SoupMenu/SoupMenu";

function App() {
  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          {/* <Form /> */}
          <Switch>
            {/* man skriver component= {Länken} så att den länkas till rätt sida */}
            <Route path="/" exact component={Home} />
            <Route path="/soupmenu" exact component={SoupMenu} />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
