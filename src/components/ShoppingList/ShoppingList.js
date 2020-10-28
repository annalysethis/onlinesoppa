import React, {useContext} from 'react'
import * as styled from "./ShoppingList.styled";
import ArrowBack from "../ArrowBack"
import ShoppingCart from "../ShoppingCart"
import {CartContext} from "../ShoppingCart/CartContext";
import { calculateCart } from "./index.js";

export default function ShoppingList(props) {
    const [cart, setCart] = useContext(CartContext)
    //const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
    
    const decreaseAmount = (productToDecrease) => {
      console.log(productToDecrease)
      // kolla titlen, ta bort första bästa soppa ur cart med den titeln
      //productToDecrease.amount += 1;
      //setCart(currentCartState =>[...currentCartState, productToDecrease]);
      //let newCart = cart.find(item => item.title == productToDecrease.title)
      let newCart = [];
      let foundIndex = cart.findIndex((t) => {return (t.title == productToDecrease.title)})
      console.log("found at " + foundIndex)
      //newCart = cart.filter((elem, index, self) => self.findIndex(
      //  (t) => {return (t.title !== elem.title)}) === index)
      newCart = cart.filter((elem, index) => (index !== foundIndex))
      //cart.splice(foundIndex, 1)
      //itemToChange.amount -=1;
      //setCart(currentCartState =>[...currentCartState, productToIncrease]);
      
      setCart(newCart);
    }
    
    const increaseAmount = (productToIncrease) => {
      //productToIncrease.amount += 1;
      //productToIncrease ??
      //let itemToChange = cart.filter(item => item.title == productToIncrease.title)
      //itemToChange.amount +=1;
      setCart(currentCartState =>[...currentCartState, productToIncrease]);
      //setCart(cart);
    }


    const removeFromCart = (productToRemove) => {

      setCart(cart.filter((product) => product.title !== productToRemove.title));
      };
      let soupAmounts = calculateCart(cart);
      const totalPrice = soupAmounts.reduce((acc, curr) => acc + (curr.price * curr.amount), 0);
    return (
        <div>
        <styled.HeaderWrapper>
        <ArrowBack/>
            <h2>VARUKORG</h2>
            <ShoppingCart/>
            </styled.HeaderWrapper>

            <styled.Wrapper>
          <h4>Antal</h4><h4>Pris</h4>
          </styled.Wrapper>
        <styled.ProductContainer>
          {soupAmounts.map((product, idx) => {
            return (
              <div key={idx} >
                <styled.NewImgWrapper image={product.image}>
   
              </styled.NewImgWrapper>
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
          {/* {soupAmounts.map((product, idx) => {
            return (
              <div key={idx} >
                <styled.ImgWrapper>
              <img src={product.image} alt={product.title}></img>
              </styled.ImgWrapper>
                <h4>{product.title}</h4>
                <styled.AmountWrapper>
                <button onClick={() => decreaseAmount(product.amount)}>-</button>
                <p>{product.amount}</p>
                <button onClick={() => increaseAmount(product.amount)}>+</button>
                </styled.AmountWrapper>
                <h4>{product.price} kr</h4>
                <styled.DeleteBtn onClick={() => removeFromCart(product)}>x</styled.DeleteBtn>
              </div>
            );
          })} */}
 
          </styled.ProductContainer>
          <styled.TotalPrice>
          <h3>Totalt (ink.moms):</h3>
          <h3>{totalPrice}</h3>
          </styled.TotalPrice>
            </div>

            
    )
}
