import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledUserIcon = styled(FontAwesomeIcon)`
  margin: 0px 10px 10px 0;
`;

export const AdressWrapper = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 20px;
`;
//top right bottom left
export const Location = styled.p`
  margin: 0 0 10px 0;
  font-weight: bold;
`;