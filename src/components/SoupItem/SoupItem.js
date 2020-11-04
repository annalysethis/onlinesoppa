import React, { useState, useRef, useContext } from "react";
import * as styled from "./SoupItem.styled";
// import { data } from "../Data/data";
import MoreInfoMenu from "../MoreInfoMenu";
import MoreInfoBtn from "../MoreInfoMenu/MoreInfoBtn";
import {CartContext} from "../ShoppingCart/CartContext";
import AddButton from "../AddButton";
import PopupWindow from "../PopupWindow";
import ToggleContent from "../PopupWindow/ToggleContent"


export default function SoupList(props ) {
  const [cart, setCart] = useContext(CartContext)
  const node = useRef();
  const [open, setOpen] = useState(false);
  

  const addToCart = () =>{
    console.log("clicked..");
    const soup = {...props.product}
    setCart(currentCartState =>[...currentCartState, soup]);
}

  return (
    <React.Fragment>
      <styled.Container id={props.product.id}>
     
        <styled.ImgWrapper image={props.product.image}>
        <AddButton addToCart={addToCart} open={open} setOpen={setOpen} />
        </styled.ImgWrapper>
        <styled.Wrapper>
       
          <styled.SoupType>{props.product.category}</styled.SoupType>
          <styled.titlePriceWrapper>
            <h3>{props.product.title}</h3>
            <h3>{props.product.price} KR</h3>
          </styled.titlePriceWrapper>
          <styled.Info>{props.product.info}</styled.Info>
          <styled.IngredientsHeader>Ingredienser:</styled.IngredientsHeader>
          
          <styled.IngredientsList>
            {!open &&<li>
              <p>{props.product.ingredients[0]}</p>
            </li>}
            {!open &&<li>
              <p>{props.product.ingredients[1]}</p>
            </li>}
            {/* {!open ?  */}
            {!open &&<li>
              <p>{props.product.ingredients[2]}</p>
            </li> }
            {/* : <li>hej</li>} */}
            {!open &&<li>
              <p>{props.product.ingredients[3]}</p>
            </li>}
          </styled.IngredientsList>

          <div ref={node}>
          <MoreInfoMenu open={open} setOpen={setOpen}  product={props.product} />
          <MoreInfoBtn  open={open} setOpen={setOpen}/>
          </div>
          
        </styled.Wrapper>
       
      </styled.Container>
    </React.Fragment>
  );
}
{

}
