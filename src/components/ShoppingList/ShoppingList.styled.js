import styled from "styled-components";



//top right bottom left
export const HeaderWrapper = styled.div`
display: flex;
justify-content: center; 
align-items: center; 
justify-content: space-between;
margin-right: 15px;


@media (max-width: ${({ theme }) => theme.mobile}) {
    margin-right:5px;
    
  }
`;

export const ProductContainer = styled.div`
padding:20px;

div{
    padding:10px;
    align-items: center; 
    display:flex;
    flex-direction:row;
    justify-content: space-between;
}

img{
width: 110px;
height:100px;
border-radius: 50%;
border: 3px solid ${({ theme }) => theme.mainColor};
   
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

        button{
            width:10px;
            
            
            }

    img{
        width: 50px;
       height: 50px;
    }
  }

`;

export const NewImgWrapper = styled.div`
position:relative;
width: 120px;
height: 120px;
border-radius: 50%;
border: 3px solid ${({ theme }) => theme.mainColor};
  overflow: hidden;
  padding:0;
  margin:0;
  background: ${props => `url(${props.image}) no-repeat center center`};
  
  background-size: cover;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 50px;
    height: 50px;
    
  }
`;


export const ImgWrapper = styled.div`
position:relative;
width: 120px;
height: 120px;
  overflow: hidden;
  padding:0;
  margin:0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
   
    
  }
`;


export const TotalPrice = styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;

    h3{
        padding:20px;
    }
`;

export const Wrapper = styled.div`
display:flex;
flex-direction:row;
justify-content: flex-end;


h4{
    padding-right: 200px;

    @media (max-width: ${({ theme }) => theme.tablet}) {
        padding-right: 130px;
       
       }

    @media (max-width: ${({ theme }) => theme.mobile}) {
    padding-right: 45px;
   
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
// border:1px solid black;
padding: 0 10px 0 10px;
`;