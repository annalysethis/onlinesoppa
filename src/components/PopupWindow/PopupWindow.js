import React, {useState} from 'react';
import ReactDOM from "react-dom"
import * as styled from "./Popup.styled";

export default function PopupWindow({ children }) {

    return (
         <React.Fragment>
     
        <styled.Container>
            {children}
        </styled.Container>
   
        </React.Fragment>
    )
}
