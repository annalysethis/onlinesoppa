import React from 'react'
import * as styled from "./Address.styled";
import GoBackBtn from "../../GoBackBtn";
import Location from "../../Location";
import CartButton from "../CartButton";
import ContactForm from "./ContactForm"


export default function Address() {

    return (
        <div>
        <styled.HeaderWrapper>
        <GoBackBtn/>
            <h2>ADRESS</h2>
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
<div></div>
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
            
            <styled.AdressContainer>
                <h5>PAKETET SKICKAS TILL</h5>
            <hr/>
            <styled.LocationBox>
            <img src="https://img.icons8.com/ios-filled/50/000000/home.png"/>
                <Location/>
            </styled.LocationBox>
            <ContactForm/>
            </styled.AdressContainer>
            
            <styled.FooterWrapper>
            <styled.StyledLink to="/payment">
          <CartButton/>
          </styled.StyledLink>
            </styled.FooterWrapper>
           
        </div>
    )
}
