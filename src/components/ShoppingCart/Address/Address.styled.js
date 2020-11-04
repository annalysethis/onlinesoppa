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

export const AdressContainer = styled.section`
margin-top:20px;
padding: 0 50px 0 50px;

@media (max-width: ${({ theme }) => theme.mobile}) {
padding:0 40px 0 40px;
}

h5{
    padding:0;
    margin:0;
    font-weight:1;
}

`;
export const LocationBox = styled.div`
display: flex;
justify-content: center;
 align-items: center; 
margin-top:20px;
border:1px solid ${({ theme }) => theme.mainColor};
padding:20px 0px;

@media (max-width: ${({ theme }) => theme.mobile}) {
padding:40px 20px;
}
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

// ************************** ContactForm *******************************
export const MainContainer = styled.section`
width:100%;
margin-top:40px;

@media (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 15px;
}
`;



export const FormContainer = styled.section`
width:100%;
display: flex;
justify-content: center; 
align-items: center; 
flex-direction: row;
 margin-top: 20px;


`;

export const FirstNameInput = styled.div`
width:100%;
margin-right: 5px;
input{
    width:95%;
    padding:10px;
    border: 1px solid ${({ theme }) => theme.mainColor};
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        width:100%;
        margin:0; 
        
    }
}

p{
margin:0;
padding-bottom:5px;
font-weight:bold;
}
`;

export const LastNameInput = styled.div`
width:100%;
margin-left: 5px;

input{
    width:95%;
padding:10px;
border: 1px solid ${({ theme }) => theme.mainColor};

@media (max-width: ${({ theme }) => theme.mobile}) {
    margin:0; 
    width:100%;
}
}

p{
    margin:0;
    padding-bottom: 5px;
    font-weight:bold;
    }

`;

export const PhoneNumInput  = styled.div`


input{
width:98%;
padding:10px;
border: 1px solid ${({ theme }) => theme.mainColor};

}

p{
    margin:0;
    padding: 5px 0 5px 0;
    font-weight:bold;
    }

`;
