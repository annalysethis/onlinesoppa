import React, { useState, useRef } from "react";
import {
  faShoppingCart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import * as styled from "./Header.styled";
import Burger from "./../Burger";
import Menu from "./../Menu";
import { useOnClickOutside } from "./../../hooks";

function Header() {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const [open, setOpen] = useState(false);
  return (
    <styled.Header>
      <styled.BurgerWrapper ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </styled.BurgerWrapper>
      <styled.LogoWrapper>
        <styled.Online>ONLINE</styled.Online>
        <styled.Soppa>SOPPA</styled.Soppa>
      </styled.LogoWrapper>
      <styled.IconWrapper>
        <styled.UserWrapper>
          <styled.StyledUserIcon icon={faUserCircle} />
        </styled.UserWrapper>
        <styled.CartWrapper>
          <styled.StyledCartIcon icon={faShoppingCart} />
        </styled.CartWrapper>
      </styled.IconWrapper>
    </styled.Header>
  );
}

export default Header;
