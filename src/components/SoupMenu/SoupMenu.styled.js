import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
position:absolute;
`;

export const StyledMapIcon = styled(FontAwesomeIcon)`
  margin: 0px 10px 10px 0;
`;

export const AdressWrapper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0px 0 5px 0;
  overflow: hidden;
`;
//top right bottom left
export const Location = styled.p`
  margin: 0 0 10px 0;
  font-weight: bold;
`;

export const AddBtn = styled.button`
position:absolute;
font-size: 20px;
right: 16px;
 

@media (max-width: ${({ theme }) => theme.mobile}) {
 
}

`;