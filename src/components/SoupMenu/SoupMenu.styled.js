import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`

display: flex:
flex-direction: column;

@media (max-width: ${({ theme }) => theme.mobile}) {
  align-self: flex-start;

}
`;

export const Image = styled.img`
  margin: 0;
  width: 400px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  width: 450px;
  height: 250px;
  overflow: hidden;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    height: 250px;
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

export const StyledUserIcon = styled(FontAwesomeIcon)`
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

export const SoupTitle = styled.h3`
  text-transform: uppercase;
  margin: 0;
  padding: 10px 10px 5px 10px;
`;

export const Info = styled.p`
  padding: 2px 0 20px 10px;
  margin: 0;
`;

export const SoupType = styled.p`
  padding: 10px 10px 0px 10px;
  margin: 0;
  text-transform: uppercase;
  font-size: 13px;
  color: #4caf50;
  font-weight: bold;
`;

//top right bottom left
export const Ingrediens = styled.p`
  text-align: center;
  background: #eee;
  padding: 5px;
  width: 70px;
  margin: 5px;
  border-radius: 10px;
`;

export const IngrediensWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 10px 10px;
`;

export const IngrediensHeader = styled.h5`
  padding: 0 0 2px 10px;
  margin: 0px;
  color: ${({ theme }) => theme.textColor2};
`;
