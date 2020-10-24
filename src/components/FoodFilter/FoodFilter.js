import React from "react";
import * as styled from "./FoodFilter.styled";
import SoupItem from "../SoupItem";

export default function FoodFilter(props) {
  return (
    <React.Fragment>
      <styled.BtnContainer>
        {props.btns.map((btn, index) => {
          return (
            <styled.Button key={index} value={btn} onClick={props.handleBtns}>
              {btn}
            </styled.Button>
          );
        })}
      </styled.BtnContainer>

      <div>
        {props.products.map((product) => {
          return <SoupItem key={product.id} product={product} />;
        })}
      </div>
    </React.Fragment>
  );
}
