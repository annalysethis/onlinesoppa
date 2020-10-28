import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const MainContainer = styled.div`
position: relative;
overflow:hidden;
`;

export const Container = styled.div`
padding-top:80px;
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

export const HeaderWrapper = styled.div`
width:100%;
z-index:1;
position:fixed;

`;
