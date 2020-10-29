import styled from "styled-components";

export const Container = styled.div`
width:100%;
display: flex;
justify-content: center; 

`;

export const CartBtn = styled.button`
padding:15px;
width:95%;
    border: none;
    margin:10px;
    background:${({ theme }) => theme.mainColor};
    
`;