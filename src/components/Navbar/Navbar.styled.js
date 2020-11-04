import styled from "styled-components";

export const Nav = styled.nav`
  min-width: 100%;
  background: ${({ theme }) => theme.mainColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
 


  ul {
   min-width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    list-style: none;
    
  }

  a {
    margin:0;
    text-decoration: none;
    padding: 0px;
    display: flex;
    overflow: hidden;
    justify-content: center;
    background: ${({ theme }) => theme.mainColor}; 

    
    @media (max-width: ${({ theme }) => theme.tablet}) {
      min-width: 28.5%;
     }
  }

  li {
    // width: 100%;
    color: black;
    padding: 15px 10px;
    font-weight: bold;
    justify-content: space-between;
    overflow: hidden;


    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 14px;
    }
  }
  
  
`;
