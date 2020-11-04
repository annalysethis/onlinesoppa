import React from 'react'
import * as styled from "./Payment.styled";
import GoBackBtn from "../../GoBackBtn"
import CartButton from "../CartButton"
import klarna from "../../../images/klarna.png";
import swish from "../../../images/swish1.jpg";
import visa from "../../../images/visa.png";
import mastercard from "../../../images/mastercard.jpeg";

export default function Payment() {
    return (
        <div>
        <styled.HeaderWrapper>
        <GoBackBtn/>
            <h2>BETALNINGSSÄTT</h2>
            </styled.HeaderWrapper>



            <styled.CheckflowContainer>
            <styled.CheckBoxContainer>

<div>
<styled.Checkmark src="https://img.icons8.com/ios/50/000000/checkmark.png"/>
</div>
<span/>
<div>
<styled.Checkmark src="https://img.icons8.com/ios/50/000000/checkmark.png"/>
</div>
<span/>
<div>
<styled.Checkmark src="https://img.icons8.com/ios/50/000000/checkmark.png"/>
</div>
<span/>
<div></div>
<span/>
<div></div>
            </styled.CheckBoxContainer>
            <styled.TextContainer>
                <p>Logga in</p>
                <p>Adress</p>
                <p>Betalningss...</p>
                <p>Bekräftelse</p>
                <p>Färdig</p>
            </styled.TextContainer>
            </styled.CheckflowContainer>
            <styled.Container>
            <h5>VÄLJ BETALNINGSSÄTT</h5>
            <hr/>
            <styled.BtnWrapper>
                
    <button><styled.PaymentImg src={klarna} alt="Klarna Bank"/>Klarna</button>
    <button><styled.PaymentImg src={swish} alt="Swish"/>Swish</button>
    <button><styled.PaymentImg src={visa} alt="Visa Card"/><styled.Payment2Img src={mastercard} alt="Visa Card"/>Kortbetalning</button>
          </styled.BtnWrapper>
          </styled.Container>
            <styled.FooterWrapper>
            <styled.StyledLink to="/finished">
          <CartButton/>
          </styled.StyledLink>
            </styled.FooterWrapper>
        </div>
    )
}
