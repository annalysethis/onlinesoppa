import React, { useState, useRef, useContext } from "react";
import * as styled from "./SoupItem.styled";
import { data } from "../Data/data";
import MoreInfoMenu from "../MoreInfoMenu";
import MoreInfoBtn from "../MoreInfoMenu/MoreInfoBtn"
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import {CartContext} from "../ShoppingCart/CartContext"

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
    const soup = {title: props.product.title, price: props.product.price}
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
          <styled.AddBtn  onClick={addToCart}>Add to Cart</styled.AddBtn>
          {/* <styled.AddBtn onClick={addToCart}>Add to Cart</styled.AddBtn> */}
        </styled.ImgWrapper>
        
        <styled.Wrapper>
          <styled.SoupType>{props.product.category}</styled.SoupType>
          <styled.titlePriceWrapper>
            <h3>{props.product.title}</h3>
            <h3>{props.product.price} KR</h3>
          </styled.titlePriceWrapper>
          <styled.Info>{props.product.info}</styled.Info>
          <styled.IngrediensHeader>Ingredienser:</styled.IngrediensHeader>
          
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
  /* {SoupData.map((item, index) => {
        return (
          <React.Fragment>
            <styled.Container key={index} id={item.id}>
              <styled.ImgWrapper>
                <styled.Image src={item.image}></styled.Image>
              </styled.ImgWrapper>
              <styled.Wrapper>
                <styled.SoupType>{item.category}</styled.SoupType>

                <styled.SoupTitle>{item.title}</styled.SoupTitle>
                <styled.Info>{item.info}</styled.Info>
                <styled.IngrediensHeader>INGREDIENSER:</styled.IngrediensHeader>
                <styled.IngrediensWrapper>
                  <styled.Ingrediens>{item.ing1}</styled.Ingrediens>
                  <styled.Ingrediens>{item.ing2}</styled.Ingrediens>
                  <styled.Ingrediens>{item.ing3}</styled.Ingrediens>
                  <styled.Ingrediens>{item.ing4}</styled.Ingrediens>
                </styled.IngrediensWrapper>
              </styled.Wrapper>
            </styled.Container>
          </React.Fragment>
        );
      })} */
}
