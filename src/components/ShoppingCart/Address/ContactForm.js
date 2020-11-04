import React from 'react'
import * as styled from "./Address.styled";

export default function ContactForm() {
    return (
        <styled.MainContainer> 
            <h5>NAMN OCH TELEFONNUMMER TILL MOTTAGAREN</h5>
           <hr/>
        <styled.FormContainer>
           

       
          <styled.FirstNameInput>
            <p>Förnamn</p>
            <input type="text"/>
            </styled.FirstNameInput>


            <styled.LastNameInput>
            <p>Efternamn</p>
            <input type="text"/>
            </styled.LastNameInput>
        

        </styled.FormContainer>
        <styled.PhoneNumInput>
                <p>Mottagarens Mobilnummer</p>
            <input type="text"/>
         </styled.PhoneNumInput>
        </styled.MainContainer>
    )
}
