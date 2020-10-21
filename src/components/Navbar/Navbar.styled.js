import styled from "styled-components";

export const Nav = styled.nav`
  min-width: 100%;
  background: ${({ theme }) => theme.mainColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  // min-height: 6vh;
  overflow: hidden;


  ul {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    list-style: none;
  }

  a {
    text-decoration: none;
    padding: 15px;
   min-width: 33.33%;
    display: flex;
    overflow: hidden;
    justify-content: center;
    background: ${({ theme }) => theme.mainColor};

    
  }

  li {
    color: black;
    font-weight: bold;
    justify-content: space-between;
    overflow: hidden;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 14px;

    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    overflow: hidden;
  }
`;
