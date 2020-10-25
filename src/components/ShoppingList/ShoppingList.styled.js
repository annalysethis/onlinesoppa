import styled from "styled-components";



//top right bottom left
export const WrapperDiv = styled.div`
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
    display:flex;
    flex-direction:row;
    justify-content: space-between;
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

