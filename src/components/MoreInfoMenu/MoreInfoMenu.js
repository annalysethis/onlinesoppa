import * as styled from "./MoreInfoMenu.styled";
// import { data } from "../Data/data";
import React from "react";
import carrot from "./../../images/carrot.png";
import garlic from "./../../images/garlic.png";
import paprika from "./../../images/paprika.png";
import pumpkin from "./../../images/pumpkin.png";
import pepper from "./../../images/pepper.png";
import salt from "./../../images/salt.png";
import chilipepper from "./../../images/chili-pepper.png";
import leek from "./../../images/leek.png";
import broccoli from "./../../images/broccoli.png";
import greenery from "./../../images/greenery.png";
import { bool } from "prop-types";

const ingredientArray = [pumpkin, carrot, paprika, garlic, pepper, salt, chilipepper, leek, broccoli, greenery];

const nutricionName = ["KAL", "FETT", "KOLH.", "PROT."];


export default function MoreInfoMenu({ open, product }) {
  return (
    // 716D6A
// props.XYZ
    // ingredienser
    
   <React.Fragment> 
     {open &&
      <styled.Container open={open} >
        <styled.IngredientsList>
          {product.ingredients.map((ing, index) => 
          <li key={index} >
            <p>{ing}</p>
          <styled.Image src={ingredientArray[index]} />
        </li>
          )}
        
        {/* Näringsvärde */}
        </styled.IngredientsList>
        <styled.Headline>Näringsvärde per portion:</styled.Headline>
        <styled.NutricionList>
        {product.nutricionValue.map((nutr, index) => 
          <li key={index} >
            <p>{nutricionName[index]}</p>
            <p>{nutr}</p>
        </li>
          )}
         
        </styled.NutricionList>
      </styled.Container>}
     </React.Fragment> 
  );
}

MoreInfoMenu.propTypes = {
  open: bool.isRequired,
};


