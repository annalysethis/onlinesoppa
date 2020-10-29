import styled from "styled-components";

export const Styledimg = styled.img`
  width: 50%;
  margin: auto;
`;
export const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  text-align: center;
  font-weight: 1000;
  margin: 25px 0 0 0;
`;

export const Article = styled.article`
font-size: 17px;
padding: 5px 50px;
text-align: center;
`;

export const Section = styled.section`
padding: 10px 30px;

`;

export const SoupImgWrapper = styled.div`
position:relative;
width: 250px;
height: 170px;
  overflow: hidden;
  padding:0;
  margin:10px;
  background-size: cover;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 170px;
height: 110px;

    
  }

  img{
    width: 250px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 170px;
      
    }
 
  }

`;

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center; //centrerat horisontellt
 align-items: center; //centrerat vertikalt
`;