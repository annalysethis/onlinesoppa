import React from "react";
import * as styled from "./SoupList.styled";
import { data } from "../Data/data";
// import soups from "./../Data/soups.json";

export default function SoupList(props, index) {
  return (
    <React.Fragment>
      {data.map((product, index) => (
        <styled.Container key={index} id={product.id}>
          <styled.ImgWrapper>
            <styled.Image
              src={product.image}
              alt={product.title}
            ></styled.Image>
          </styled.ImgWrapper>
          <styled.Wrapper>
            <styled.SoupType>{product.category}</styled.SoupType>
            <styled.titlePriceWrapper>
              <styled.SoupTitle>{product.title}</styled.SoupTitle>
              <styled.Price>{product.price} KR</styled.Price>
            </styled.titlePriceWrapper>
            <styled.Info>{product.info}</styled.Info>
            <styled.IngrediensHeader>INGREDIENSER:</styled.IngrediensHeader>
            <styled.IngrediensWrapper>
              <styled.Ingrediens>{product.ing1}</styled.Ingrediens>
              <styled.Ingrediens>{product.ing2}</styled.Ingrediens>
              <styled.Ingrediens>{product.ing3}</styled.Ingrediens>
              <styled.Ingrediens>{product.ing4}</styled.Ingrediens>
            </styled.IngrediensWrapper>
          </styled.Wrapper>
        </styled.Container>
      ))}
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
