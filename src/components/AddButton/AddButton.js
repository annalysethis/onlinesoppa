import React, { useState }from 'react'
import * as styled from "./AddButton.styled";
import { bool, func } from "prop-types";

export default function AddButton({addToCart}) {

    const [check, setChecked] = useState(false);
  
    return (
        <React.Fragment >
        <styled.AddBtn onClick={addToCart}  >
            <div/>
            <div/>
          </styled.AddBtn>
        </React.Fragment>
    )
}

// AddButton.propTypes = {
//     check: bool.isRequired,
//     setChecked: func.isRequired,
//   };
