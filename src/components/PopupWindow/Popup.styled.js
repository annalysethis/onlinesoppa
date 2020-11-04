import styled from "styled-components";


export const Container = styled.div`
position: fixed;
bottom:50px;
right:80px;
z-index:1;
background-color: #4CAF50;
padding: 0px;
border-radius: 20px;


animation: cssAnimation 2s ease-in 0s forwards;

  @keyframes cssAnimation {
    from   { opacity: 1; }
  to
    { opacity: 0; }    
  }

h5{
    color: white;
    // margin:15px 60px;
    margin:0;
    padding:15px 60px;;
}
`;