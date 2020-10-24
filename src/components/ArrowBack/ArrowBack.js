import React from 'react'
import {
    faAngleLeft,
  } from "@fortawesome/free-solid-svg-icons";
  import * as styled from "./ArrowBack.styled";

  const PAGE_PRODUCTS = "products";
export default function ArrowBack({navigateTo}) {
    return (
        <div>
           <styled.Btn onClick={() => navigateTo(PAGE_PRODUCTS)}> <styled.StyledAngleIcon icon={faAngleLeft} /></styled.Btn> 
        </div>
    )
}
