import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//top right bottom left
export const BtnContainer = styled.span`
cursor: pointer;
display:flex;
 align-items: center; 
 padding:10px;
 max-width: 100%;
 justify-content: space-between;
 border: 1px solid ${({ theme }) => theme.grey};
 
 @media (max-width: ${({ theme }) => theme.mobile}) {
  margin-bottom: 15px;
  width: 100%;
}

p{

  margin:0;
  margin-left: 10px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textColor2};
  font-size: 15px;

`;

// :nth-child(2)

export const StyledCaretIcon = styled(FontAwesomeIcon)`
  font-size: 24px !important;
  color: ${({ theme }) => theme.textColor2};
  margin-right: 10px;
  
  transform: ${({ open }) => (open ? "rotate(-180deg)" : "rotate(0)")};
  

  
`;