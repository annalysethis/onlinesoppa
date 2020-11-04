import React from 'react'
import * as styled from "./Finished.styled";
import GoBackBtn from "../../GoBackBtn"
import CookingPot from "../../../images/Cooking-Pot.png"
import { Link } from "react-router-dom";

export default function Finished() {
    return (
        <div>
        <styled.HeaderWrapper>
        <GoBackBtn/>
            <h2>FÄRDIG</h2>
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
<div><styled.Checkmark src="https://img.icons8.com/ios/50/000000/checkmark.png"/></div>
<span/>
<div><styled.Checkmark src="https://img.icons8.com/ios/50/000000/checkmark.png"/></div>
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
<h2>Tack för din beställning!</h2>
<p>Din beställning är mottagen och behandlas. 
Du kommer motta ett mail med beställningsinformation.</p>

<button>Följ din order</button>
<Link to="/">Tillbaka till startsidan</Link>
<div><h2>Leveranstid?</h2>
<p>Beställningen bekräftades klockan 16:43. Vi uppskattar att beställningen levereras klockan 17:15.</p></div>


<styled.Pot src={CookingPot} alt="Cooking Pot"/>

            </styled.Container>
        </div>
    )
}
