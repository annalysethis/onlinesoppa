import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Container = styled.div`
display:flex;
flex-direction: row;
padding: 0;
margin:0;

`;

export const CartContainer = styled.div`
width: 100%;
`;

export const Wrapper = styled.div`
display: flex;
justify-content: center; 
align-items: center; 
justify-content: space-between;

`;

export const StyledCartIcon = styled(FontAwesomeIcon)`
  font-size: 24px !important;
  cursor: pointer;
  margin:10px;
`;

export const Cart = styled.span`
position:absolute;
right:5px;
top:18px;
background: ${({ theme }) => theme.mainColor};
border-radius: 50%;
padding: 0 4px 0 4px;
font-size: 16px;
text-align:center;
`;
