import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
min-height:100vh;
`;

//top right bottom left
export const HeaderWrapper = styled.div`

display: flex;
justify-content: center; 
align-items:center;
justify-content: space-between;
margin-right: 15px;

h2{
  
  margin-left:50px;
}


@media (max-width: ${({ theme }) => theme.mobile}) {
    margin-right:5px;
    font-size: 13px;
  }
`;

export const ProductContainer = styled.section`

position:relative;
padding: 0 15px 0 15px;




div{
    padding:10px;
    align-items: center; 
    display:flex;
    flex-direction:row;
   justify-content: space-between;
}

h4{
font-weight: 1;

}

@media (max-width: ${({ theme }) => theme.mobile}) {
    padding:5px;

    h4{
        padding:5px;
        margin:0;
        }

  }

`;

export const NewImgWrapper = styled.div`
position:relative;
width: 50px;
height: 50px;
border-radius: 50%;
border: 3px solid ${({ theme }) => theme.mainColor};
  overflow: hidden;
  padding:0;
  margin:10px;
  background: ${props => `url(${props.image}) no-repeat center center`};
  background-size: cover;

`;


export const TotalPrice = styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;

    h3{
        padding:20px;
    }
`;

export const TitleWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content: flex-end;
margin:0;
padding:0;

`;

export const AmountTitle = styled.h4`
padding-right: 130px;
margin:0;

@media (max-width: ${({ theme }) => theme.tablet}) {
  padding-right: 100px;
 
 }

@media (max-width: ${({ theme }) => theme.mobile}) {
padding-right: 50px;

}
`;

export const PriceTitle = styled.h4`
padding-right: 180px;
margin:0;

@media (max-width: ${({ theme }) => theme.tablet}) {
  padding-right: 100px;
 
 }

@media (max-width: ${({ theme }) => theme.mobile}) {
padding-right: 50px;

}
`;

export const AmountWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
border: 1px solid ${({ theme }) => theme.mainColor};
height: 10px;
width: 60px;



@media (max-width: ${({ theme }) => theme.mobile}) {
    margin-right:15px;
    height: 15px;
    width: 70px;
   
   }

button{
  font-size: 20px;
    border:none;
    outline:none;
    background: none;

@media (max-width: ${({ theme }) => theme.mobile}) {
  width:30px;
  
     }
    
    }
`;
export const DeleteBtn = styled.button`
outline:none;
font-size: 20px;
background: none;
border: none;
padding: 0 10px 0 10px;
`;

export const SectionContainer = styled.section`
position:relative;
padding: 10px 80px;
display: flex;
flex-direction:column;
align-items: center; 
 text-align:center;

 @media (max-width: ${({ theme }) => theme.mobile}) {
  padding: 10px 50px;
   
   }

h3{
  margin:5px;
}  

p{
 margin:5px;
} 

textarea{
  padding:5px;
  width:98%;
    height: 90px;
    margin:5px;
    border: 1px solid ${({ theme }) => theme.mainColor};

    @media (max-width: ${({ theme }) => theme.mobile}) {
    width:100%;
    height: 80px;
    
     
     }
}

`;

export const SaveBtn = styled.button`
padding: 5px 15px;
font-weight: bold;
font-size: 17px;
border: none;
background:${({ theme }) => theme.mainColor};
display:flex;
align-self: flex-end;

`;

export const StyledLink = styled(Link)`
width:100%;
text-decoration: none;
`;