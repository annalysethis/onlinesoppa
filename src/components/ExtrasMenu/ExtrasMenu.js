import React, { useState, useContext, Component } from 'react'
import * as styled from "./ExtrasMenu.styled";
import Header from "../Header"
import Navbar from "../Navbar"
import Location from "../Location"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { extras } from "../Data/extras"
import MoreInfoMenu from "../MoreInfoMenu";
import MoreInfoBtn from "../MoreInfoMenu/MoreInfoBtn"
import {CartContext} from "../ShoppingCart/CartContext"
import AddButton from "../AddButton"

export default function ExtrasMenu({open, setOpen}) {
const [cart, setCart] = useContext(CartContext)
   
    return (
         <styled.MainContainer>
        <styled.HeaderWrapper>
      <Header/>
      </styled.HeaderWrapper>
      <styled.Container>
   <Location />
      <Navbar/>
      </styled.Container>
    
{extras.map((product, index) => {
    const addToCart = () =>{
        console.log("clicked..");
        const extras = {...product}
        setCart(currentCartState =>[...currentCartState, extras]);
    }
    return(
    <styled.ProductContainer id={product.id} key={index}>
        <styled.ImgWrapper image={product.image} alt={product.title}>

          <AddButton addToCart={addToCart} open={open} setOpen={setOpen} />
      
        </styled.ImgWrapper>
        
        <styled.Wrapper>
          <styled.ExtrasType>{product.category}</styled.ExtrasType>
          <styled.titlePriceWrapper>
            <h3>{product.title}</h3>
            <h3>{product.price} KR</h3>
          </styled.titlePriceWrapper>
          <styled.Info>{product.info}</styled.Info>
          <styled.IngredientsHeader>Ingredienser:</styled.IngredientsHeader>
          
          <styled.IngredientsList>
            <li>
              <p>{product.ingredients[0]}</p>
            </li>
            <li>
              <p>{product.ingredients[1]}</p>
            </li>
           <li>
              <p>{product.ingredients[2]}</p>
            </li> 
            <li>
              <p>{product.ingredients[3]}</p>
            </li>
            <li>
              <p>{product.ingredients[4]}</p>
            </li>
           <li>
              <p>{product.ingredients[5]}</p>
            </li>
          </styled.IngredientsList>
          
        </styled.Wrapper>
      </styled.ProductContainer>
    )
})}
</styled.MainContainer>
)}