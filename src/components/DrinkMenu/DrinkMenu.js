import React, { useState, useContext, Component } from 'react'
import * as styled from "./DrinkMenu.styled";
import Header from "../Header"
import Navbar from "../Navbar"
import Location from "../Location"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { drinks } from "../Data/drinks"
import MoreInfoMenu from "../MoreInfoMenu";
import MoreInfoBtn from "../MoreInfoMenu/MoreInfoBtn"
import {CartContext} from "../ShoppingCart/CartContext"
import AddButton from "../AddButton"

export default function DrinkMenu({open, setOpen}) {
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
    
{drinks.map((product, index) => {
    const addToCart = () =>{
        console.log("clicked..");
        const drink = {...product}
        setCart(currentCartState =>[...currentCartState, drink]);
    }
    return(
    <styled.ProductContainer id={product.id} key={index}>
        <styled.ImgWrapper image={product.image}>
       
          <AddButton addToCart={addToCart} open={open} setOpen={setOpen} />
      
        </styled.ImgWrapper>
        
        <styled.Wrapper>
          <styled.DrinkType>{product.category}</styled.DrinkType>
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
          </styled.IngredientsList>

          {/* <div ref={node}>
          <MoreInfoMenu open={open} setOpen={setOpen}  product={props.product} />
          <MoreInfoBtn  open={open} setOpen={setOpen}/>
          </div> */}
          
        </styled.Wrapper>
      </styled.ProductContainer>
    )
})}
</styled.MainContainer>
)}






