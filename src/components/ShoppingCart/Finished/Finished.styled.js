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
display:flex;
justify-content: center;
 align-items: center; 
 flex-direction:column;
 padding: 30px;

 h2{
     font-weight:1;
 }
p{
    text-align:center;
}

button{
    padding:10px;
    font-size:20px;
    background: ${({ theme }) => theme.mainColor};
    border: none;
    border-radius: 5px;
    box-shadow: 3px 3px 10px #888888;
    border: 1px solid black;
    margin-bottom:20px;

}

div{
    padding:5px;
    margin: 20px 10px 10px 10px;
    background: ${({ theme }) => theme.mainColor};
border: 2px solid black;

    h2{
        text-align:center;
        margin:5px;
    }

    p{
        font-size: 18px;
        font-weight: bold;
        margin:10px;
    }
}
 

`;

export const Pot = styled.img`
width: 150px;
`;