import styled from "styled-components";

export const StyledBurger = styled.button`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.9rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2.5rem;
    background: black;
    border-radius: 5px;
    transition: all 0.4s linear;
    position: relative;
    transform-origin: 5.5px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 2rem;
      transform-origin: 2px;
    }

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      height: 3px;

      @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 3px;
      }
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
      height: 3px;

      @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 3px;
      }
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      height: 3px;

      @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 3px;
      }
    }
  }
`;
