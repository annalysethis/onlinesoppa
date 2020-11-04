import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  padding:10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eee;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    border:none;
    padding:0;
    
  }
`;

export const Wrapper = styled.div`
position:relative;
width:50%;
display: flex:
flex-direction: column;


@media (max-width: ${({ theme }) => theme.mobile}) {
  width:100%;

}
`;

export const ImgWrapper = styled.div`
position:relative;
width: 350px;
height: 250px;
  overflow: hidden;
  padding:10px;
  background: ${props => `url(${props.image}) no-repeat center center`};
  background-size: cover;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0;
    padding: 0;
    width: 100%;
    
  }
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


export const IngredientsList = styled.ul`
display: flex;
  flex-direction: row;
  padding-left: 10px;
  margin: 0;
  overflow: auto;

  li {
    display:flex;
    justify-content: center; 
    align-items: center; 
    list-style: none;
    background: #f6f6f6;
    margin: 0 5px 0 5px;
    padding: 0;
    border-radius: 10px;
  }

  p {
    margin:5px;
    text-align: center;
    padding: 0 10px 0 10px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
  }
`;

export const IngredientsHeader = styled.h5`
  padding: 0 0 2px 10px;
  margin: 0px;
  color: ${({ theme }) => theme.textColor2};
  text-transform: uppercase;
`;


export const titlePriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 
  h3{
    text-transform: uppercase;
    margin: 0;
    padding: 10px 10px 5px 10px;

    @media (max-width: ${({ theme }) => theme.tablet}) {
      padding: 10px 10px 0px 10px;
    }

  }
 
`;

