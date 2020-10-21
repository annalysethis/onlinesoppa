import styled from "styled-components";


export const Container = styled.div`
  width: 80%;
  display: flex;
  display:inline;
  flex-direction: column;
  overflow:hidden;
  left:0;
  bottom:0;
  z-index:1;
  background: ${({ theme }) => theme.primaryLight};
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 200px;
    
  }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
      z-index:1;
      
   }
`;

export const IngredientsList = styled.ul`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 0;



  li {
    text-align: center;
    list-style: none;
    background:  ${({ theme }) => theme.grey};
    border-radius: 10px;
    margin: 0 5px 0 5px;
  }

  p {
    text-align: center;
    padding: 0 5px 0 5px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
  }
`;

export const Image = styled.img`
  text-align: center;
  padding: 5px;
  width: 50px;
  
`;

export const Title = styled.h5`
  padding: 2px 10px;
  margin: 10px 0px;
  color: ${({ theme }) => theme.textColor2};
  text-transform: uppercase;
`;

export const NutricionList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-left: 10px;
  margin-top: 0px;

  li {
    list-style: none;
    background: #f6f6f6;
    border-radius: 10px;
    margin: 0 5px 0 5px;

    p {
      text-align: center;
      padding: 0 5px 0 5px;
    }
  }
`;
