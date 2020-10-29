import React, { useState, useRef } from "react";
import {
  faShoppingCart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import * as styled from "./Header.styled";
import Burger from "./../Burger";
import Menu from "./../Menu";
import { useOnClickOutside } from "./../../hooks";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import ShoppingCart from "../ShoppingCart"



// const PAGE_PRODUCTS = "products";
// const PAGE_CART = "cart";

function Header({navigation}) {
  
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const [open, setOpen] = useState(false);


// if (window.location.pathname.match(/shoppingcart/)){
//   return null
// }
  // if (window.location.pathname === '/shoppingcart') return null;
  return (
    <styled.Header>
      <styled.BurgerWrapper ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </styled.BurgerWrapper>
      <styled.LogoWrapper>
        <styled.StyledLink to="/">
          <styled.Online>ONLINE</styled.Online>
        </styled.StyledLink>
        <styled.StyledLink to="/">
          <styled.Soppa>SOPPA</styled.Soppa>
        </styled.StyledLink>
      </styled.LogoWrapper>
      <styled.IconWrapper>
      <styled.StyledLink to='/accountpage'>
          <styled.StyledUserIcon icon={faUserCircle} />
          </styled.StyledLink>
          <styled.StyledLink to='/shoppinglist'>
          <ShoppingCart  />
          </styled.StyledLink>
       
      </styled.IconWrapper>
      {/* <styled.AdressWrapper>
          <styled.StyledMapMarkerIcon icon={faMapMarkerAlt} />
          <div>
          <p>
           {props.location && props.location.adress}
          </p>
          </div>
        </styled.AdressWrapper> */}
    </styled.Header>
  );
}

export default Header;

// const ComponentThatHides = withRouter(Header);
