import React, {useContext} from 'react'
import * as styled from "./ShoppingList.styled";
import GoBackBtn from "../GoBackBtn"
import ShoppingCart from "../ShoppingCart"
import {CartContext} from "../ShoppingCart/CartContext";
import { calculateCart } from "./index.js";
import CartButton from "../CartButton";

export default function ShoppingList(props) {
    const [cart, setCart] = useContext(CartContext)
    //const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    
    const decreaseAmount = (productToDecrease) => {
      // console.log(productToDecrease)
      let newCart = [];
      let foundIndex = cart.findIndex((t) => {return (t.title == productToDecrease.title)})
      // console.log("found at " + foundIndex)
      newCart = cart.filter((elem, index) => (index !== foundIndex))
      setCart(newCart);
    }
    
    const increaseAmount = (productToIncrease) => {
      setCart(currentCartState =>[...currentCartState, productToIncrease]);
    }


    const removeFromCart = (productToRemove) => {

      setCart(cart.filter((product) => product.title !== productToRemove.title));
      };
      let soupAmounts = calculateCart(cart);
      const totalPrice = soupAmounts.reduce((acc, curr) => acc + (curr.price * curr.amount), 0);
    return (
        <div>
        <styled.HeaderWrapper>
        <GoBackBtn/>
            <h2>VARUKORG</h2>
            <ShoppingCart/>
            </styled.HeaderWrapper>

            <styled.TitleWrapper>
          <h4>Antal</h4><h4>Pris</h4>
          </styled.TitleWrapper>
        <styled.ProductContainer>
          {soupAmounts.map((product, idx) => {
            return (
              <div key={idx} >
                <styled.NewImgWrapper image={product.image}/>

                <h4>{product.title}</h4>
                <styled.AmountWrapper>
                <button onClick={() => decreaseAmount(product)}>-</button>
                <p>{product.amount}</p>
                <button onClick={() => increaseAmount(product)}>+</button>
                </styled.AmountWrapper>
                <h4>{product.price} kr</h4>
                <styled.DeleteBtn onClick={() => removeFromCart(product)}>x</styled.DeleteBtn>
              </div>
            );
          })}
 <hr/>
          </styled.ProductContainer>
          <styled.SectionContainer>
            <h3>Meddelande till Köket</h3>
            <p>Här kan du skriva om det är något du vill ta bort eller lägga till i din beställning.</p>
<textarea type="text"></textarea>
<styled.SaveBtn>Spara</styled.SaveBtn>

</styled.SectionContainer>

          <styled.TotalPrice>
          <h3>Totalt (ink.moms):</h3>
          <h3>{totalPrice}</h3>
          </styled.TotalPrice>

          <CartButton/>
            </div>
    )
}
