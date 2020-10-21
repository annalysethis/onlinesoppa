import React from 'react'
import * as styled from "./ShoppingCart.styled";
import ArrowBack from "./../ArrowBack"

export default function ShoppingCart() {
    return (
        <styled.Container>
            <ArrowBack/>
           <h2>VARUKORG</h2>
        </styled.Container>
    )
}
