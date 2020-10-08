import React from "react";
import { GlobalStyles } from "./global";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { theme } from "./theme";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Routes from "./routes";

function App(props) {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <p>{props.location && props.location.adress}</p>
        </div> */}
        <Header />
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
