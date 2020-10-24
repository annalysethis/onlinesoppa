import  React, {useContext} from 'react'
import * as styled from "./ShoppingCart.styled";
import ArrowBack from "../ArrowBack"
import {
    faShoppingCart,
    
  } from "@fortawesome/free-solid-svg-icons";
  import {CartContext} from "./CartContext";


export default function ShoppingCart() {
    const [cart, setCart] = useContext(CartContext)
    return (
        <styled.Container>
        {/* <styled.Container >
        <styled.ontainerd.Wrapper>
            <ArrowBack/>
           <h2>VARUKORG</h2> */}
           
           <span >
           <styled.StyledCartIcon  icon={faShoppingCart} />
           </span>
           <styled.Cart>{cart.length}</styled.Cart>
          
           {/* </styled.ontainerd.Wrapper>
        </styled.Container> */}
        </styled.Container>
    )
}



