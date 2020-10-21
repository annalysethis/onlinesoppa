import React from 'react'
import { GlobalStyles } from "./global";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { theme } from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

 

function App() {
  
  return (

    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
         <Header />
        <Routes />
      </ThemeProvider>
    </Router>
);
}

export default App;
