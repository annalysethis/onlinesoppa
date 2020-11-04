import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
display: flex;
justify-content: center; 
align-items:center;
border-bottom: 1px solid #E7E4E4;
box-shadow: 0px 0px 14px #7777;

@media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 13px;
  }
`;

export const CheckflowContainer = styled.div`
padding: 15px 15px 0 15px;

@media (max-width: ${({ theme }) => theme.mobile}) {
    
}
`;

export const CheckBoxContainer = styled.div`
display: flex;
flex-direction:row;
justify-content:space-between;
 align-items: center; 

 span{
    width: 13%;
    padding:1px;
    background:${({ theme }) => theme.mainColor};

    @media (max-width: ${({ theme }) => theme.mobile}) {
       width:10%;
        
    }
} 
 


div{
    border: 1px solid ${({ theme }) => theme.mainColor};
    border-radius: 50%;
    padding:5px;
    width:40px;
    height:40px;
    margin:2px;
    z-index:1;
    background-color:white;
    display: flex;
 align-items: center; 
 justify-content: center; 

}
   
}
`;

export const Checkmark = styled.img`
width:35px;

@media (max-width: ${({ theme }) => theme.mobile}) {
    width:30px;
    

  }

`;

export const TextContainer = styled.div`
display: flex;
flex-direction:row;
padding: 0 10px;
margin 0;
justify-content:space-between;

@media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 5px;
    
}

 p{
     margin:0;
     font-size: 12px;

     @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 11px;
        
    }
 }
`;

export const Container = styled.div`
padding:50px;

h5{
  margin:0;
  font-weight: 1;
}
`;

export const BtnWrapper = styled.section`
display:flex;
justify-content:center;
 align-items: center; 
 flex-direction:column;
 


 button{
   position:relative;
   border-radius: 5px;
   border: 1px solid ${({ theme }) => theme.mainColor};
   background: #FAE29A;
   width: 100%;
  padding:10px;
  margin:10px;
  font-weight:bold;
  font-size:15px;
 }
`;

export const PaymentImg = styled.img`
position:absolute;
left:10px;
top:5px;
bottom:5px;
width:30px;
`;

export const Payment2Img = styled.img`
position:absolute;
left:40px;
top:5px;
bottom:5px;
width:30px;
`;

export const FooterWrapper = styled.footer`
width:100%;
position:absolute;
bottom:0;

`;

export const StyledLink = styled(Link)`
width:100%;
text-decoration: none;
`;