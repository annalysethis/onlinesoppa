import React, {useContext} from 'react'
import * as styled from "./ShoppingList.styled";
import ArrowBack from "../ArrowBack"
import ShoppingCart from "../ShoppingCart"
import {CartContext} from "../ShoppingCart/CartContext";

export default function ShoppingList() {
    const [cart, setCart] = useContext(CartContext)
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    
    
    const removeFromCart = (productToRemove) => {
        setCart(cart.filter((product) => product !== productToRemove));
      };

    return (
        <div>
        <styled.WrapperDiv>
        <ArrowBack/>
            <h2>VARUKORG</h2>
            <ShoppingCart/>
            </styled.WrapperDiv>


        <styled.ProductContainer>
          {cart.map((product, idx) => {
            return (
              <div key={idx} >
              <img src={product.image} alt={product.title}></img>
                <h3>{product.title}</h3>
                <button onClick={() => removeFromCart(product)}>Remove</button>
                <h4>{product.price} kr</h4>
              
              </div>
            );
          })}
          </styled.ProductContainer>
          <styled.TotalPrice>
          <h3>Totalt (ink.moms):</h3>
          <h3>{totalPrice}</h3>
          </styled.TotalPrice>
            </div>
    )
}
