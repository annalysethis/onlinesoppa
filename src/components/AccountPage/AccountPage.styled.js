import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Container = styled.div`
display:flex;
justify-content: center;
 align-items: center; 
 flex-direction: column;

 
 
`;

export const PositionWrapper = styled.div`
position:asbolute;
z-index:-1;
`;

export const AccountHeader = styled.header`
 width:100%;
`;

export const YellowBox = styled.div`
padding:80px;
width:10%;
background: #F8F8AA;

`;

export const List = styled.ul`
padding:50px;



li{
     position:relative;
    list-style:none;
    padding: 15px 50px 15px 0;
    border-bottom: 1px solid black;
    font-weight: bold;
    cursor:pointer;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size:15px;
      }


}

`;

export const StyledIcon = styled(FontAwesomeIcon)`
font-size: 15px !important;
margin-right:15px;

`;

export const StyledAngleIcon = styled(FontAwesomeIcon)`
position:absolute;
right: 0;
font-size:20px!important;


`;
