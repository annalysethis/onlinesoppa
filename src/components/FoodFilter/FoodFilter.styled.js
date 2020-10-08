import styled from "styled-components";

export const BtnContainer = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  min-width: 25%;
  background: ${({ theme }) => theme.primaryLight};
  border: none;
  padding: 15px;
  font-size: 15px;
  cursor: pointer;
  outline: none;
`;
