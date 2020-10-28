import React, { useState, useRef, useContext } from "react";
import * as styled from "./SoupItem.styled";
// import { data } from "../Data/data";
import MoreInfoMenu from "../MoreInfoMenu";
import MoreInfoBtn from "../MoreInfoMenu/MoreInfoBtn"
import {CartContext} from "../ShoppingCart/CartContext"
import AddButton from "../AddButton"

// const node = useRef();
// useOnClickOutside(node, () => setOpen(false));
// 

// const [showMoreInfo, setShowMoreInfo] = React.useState(false);

// const [showMoreInfo, setShowMoreInfo] = React.useState(false)
// todo AH: (svårast: gör utan googling, näst svårast gör med googling.)
// 0. välj hooks eller klass-state
// 1. gör om till klasskomponent
// 2. fixa knapp. Vid klick på knapp ändras state
// 3. i rendern, gör en conditional rendering utifrån state:
// 4a. Visa textingredients, endast första 4, ELLER dölj textingredients och visa MoreInfoMenu
// optional 5. rotera pilen :)



export default function SoupList(props ) {
  const [cart, setCart] = useContext(CartContext)
  const node = useRef();
  const [open, setOpen] = useState(false);

  const addToCart = () =>{
    console.log("clicked..");
    //const soup = {title: props.product.title, price: props.product.price}
    const soup = {...props.product}
    setCart(currentCartState =>[...currentCartState, soup]);
}

  return (
    <React.Fragment>
      <styled.Container id={props.product.id}>
        <styled.ImgWrapper>
          <styled.Image
            src={props.product.image}
            alt={props.product.title}
          ></styled.Image>
          <AddButton addToCart={addToCart} />
      
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
