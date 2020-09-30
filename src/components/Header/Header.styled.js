import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = styled.header`
  width: 100%;
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
  padding: 15px;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 5px;
  }
`;

export const CartWrapper = styled.div`
  padding: 5px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 6px;
  }
`;
export const UserWrapper = styled.div`
  padding: 5px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 6px;
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
`;

export const StyledCartIcon = styled(FontAwesomeIcon)`
  font-size: 24px !important;
  cursor: pointer;
`;
