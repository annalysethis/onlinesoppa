import styled from "styled-components";

export const AddBtn = styled.button`

right:1rem;
position:absolute;
bottom: 10px;
border-radius: 50%;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 4.5rem;
height: 4.5rem;
background: ${({ theme }) => theme.mainColor};
border: none;
cursor: pointer;
padding: 0;

&:focus {
  outline: none;
}

div{
  width: 3rem;
  background: white;
  border-radius: 5px;
  transition: all 0.4s linear;
  position: relative;
  transform-origin: 5.5px;
  margin:auto;
  

  :first-child {
    top:17px;
    transform: ${({ open }) => (open ? "rotate(30deg)" : "rotate(0deg)")};
    height: 3px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 3px;
    }
  }

  :nth-child(2) {
    left: 20px;
    
    opacity: ${({ open }) => (open ? "1" : "1")};
    transform: ${({ open }) => (open ? "rotate(-50deg)" : "rotate(-90deg)")};
    height: 3px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      height: 3px;
    }
  }

`;
