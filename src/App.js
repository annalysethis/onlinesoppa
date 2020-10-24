import React from 'react'
import { GlobalStyles } from "./global";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { theme } from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { CartProvider } from "./components/ShoppingCart/CartContext"



function App() {
 
  
  return (

    <Router>
    <CartProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
         {/* <Header /> */}
        <Routes />
      </ThemeProvider>
      </CartProvider>
    </Router>
    
    
  )}

export default App;
