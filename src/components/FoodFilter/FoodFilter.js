import React from "react";
import * as styled from "./FoodFilter.styled";
import SoupList from "./../SoupList";

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
          return <SoupList key={product.id} product={product} />;
        })}
      </div>
    </React.Fragment>
  );
}
