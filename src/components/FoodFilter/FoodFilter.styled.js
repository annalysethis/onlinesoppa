import styled from "styled-components";

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  margin: 15px 0;
`;
// top right bottom left
export const Button = styled.button`
  background: ${({ theme }) => theme.primaryLight};
  border: none;
  font-size: 17px;
  cursor: pointer;
  outline: none;
  padding: 2px 8px;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    background-color: ${({ theme }) => theme.mainColor};
    border-radius: 10px;
  }

  &:focus {
    background-color: ${({ theme }) => theme.mainColor};
    border-radius: 10px;
  }
`;
