import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
  
    min-height: 100vh;
    
    background: ${({ theme }) => theme.primaryLight};
    text-rendering: optimizeLegibility;
  }
`;
