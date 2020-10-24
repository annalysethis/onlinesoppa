import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  padding: 0;
  margin: 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px 40px 0 40px;
`;

export const StyledInput = styled.input`
  font-family: inherit;
  font-size: 15px;
  padding: 10px;
  margin: 5px;
  border: 1px solid ${({ theme }) => theme.mainColor};
`;
export const StyledButton = styled.input`
  padding: 10px;
  margin: 5px;
  border: none;
  background: ${({ theme }) => theme.mainColor};
`;
