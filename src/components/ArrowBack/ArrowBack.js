import React from 'react'
import {
    faAngleLeft,
  } from "@fortawesome/free-solid-svg-icons";
  import * as styled from "./ArrowBack.styled";


export default function ArrowBack() {
    return (
        <div>
           <styled.Btn> <styled.StyledAngleIcon icon={faAngleLeft} /></styled.Btn> 
        </div>
    )
}
