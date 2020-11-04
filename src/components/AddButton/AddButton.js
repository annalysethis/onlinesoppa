import React from 'react'
import * as styled from "./AddButton.styled";
import ToggleContent from "../PopupWindow/ToggleContent"
import PopupWindow from "../PopupWindow"

export default function AddButton({addToCart}) {
  
    return (
        <React.Fragment >
        <ToggleContent
      toggle={show => <styled.AddBtn onClick={() => {addToCart(); show();}}>
            <div/>
            <div/>
          </styled.AddBtn>}
      content={hide => ( 
          <PopupWindow >
          <h5>LAGD I VARUKORG</h5>
          </PopupWindow>
      )}
    />
        </React.Fragment>
    )
}

