import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
width:100%;
display: flex;
justify-content: center; 
`;

export const CartBtn = styled.button`
font-weight: bold;
font-size: 14px;
padding:12px;
width:95%;
text-transform:uppercase;
    border: none;
    margin:10px;
    background:${({ theme }) => theme.mainColor};
    
`;

export const StyledLink = styled(Link)`
width:95%;
text-decoration: none;
`;