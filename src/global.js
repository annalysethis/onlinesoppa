import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100&display=swap');
  html, body {
    margin: 0;
    padding: 0;
   
    
  }
   @media (max-width: ${({ theme }) => theme.mobile}) {
    *, *::after, *::before {
      box-sizing: border-box;
    }
  }
  
  
  body {
    
    font-family: "Barlow Condensed", sans-serif;
    min-height: 100vh;
    
    background: ${({ theme }) => theme.primaryLight};
    text-rendering: optimizeLegibility;
  }
`;
