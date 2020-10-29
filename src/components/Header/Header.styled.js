import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Header = styled.header`
z-index: 1;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.primaryLight};
`;

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 10px;
    text-align: center;
  }
`;

export const Soppa = styled.h2`
  color: ${({ theme }) => theme.mainColor};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 20px;
  }
`;

export const Online = styled.h2`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 20px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 11px 15px 15px 0;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1px 5px 5px 5px;
  }
`;


export const BurgerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const StyledUserIcon = styled(FontAwesomeIcon)`
  font-size: 24px !important;
  cursor: pointer;
  margin:10px 0px 10px 0;
`;

export const StyledCartIcon = styled(FontAwesomeIcon)`
  font-size: 24px !important;
  cursor: pointer;
  margin:10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const AdressWrapper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 0 5px 0;
  overflow: hidden;

  div{
    display: flex;
  flex-direction: row;
  }

  p{
    margin: 0 0 10px 0;
  font-weight: bold;
  }
`;
//top right bottom left
export const Location = styled.p`
  margin: 0 0 10px 0;
  font-weight: bold;
`;

export const StyledMapMarkerIcon = styled(FontAwesomeIcon)`
  margin: 0px 10px 10px 0;
`;

export const CartBtn = styled.button`
border:none;
background: none;
padding: 0 5px 0 5px;
`;
