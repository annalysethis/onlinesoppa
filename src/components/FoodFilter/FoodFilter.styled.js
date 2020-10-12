import styled from "styled-components";

export const BtnContainer = styled.div`
  width: 100%;
`;
// top right bottom left
export const Button = styled.button`
  min-width: 25%;
  background: ${({ theme }) => theme.primaryLight};
  border: none;
  padding: 15px 10px 15px 10px;
  font-size: 17px;
  cursor: pointer;
  outline: none;
`;
