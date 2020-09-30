import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap');
  html, body {
    margin: 0;
    padding: 0;
    
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Oxygen', sans-serif;
    min-height: 100vh;
    
    background: ${({ theme }) => theme.primaryLight};
    text-rendering: optimizeLegibility;
  }
`;
