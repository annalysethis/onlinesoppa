import React from 'react'
import { useHistory } from 'react-router-dom';
import {
    faAngleLeft,
  } from "@fortawesome/free-solid-svg-icons";
  import * as styled from "./GoBackBtn.styled";

export default function GoBackBtn() {
let history = useHistory();

    return (
        <div>
           <styled.Btn onClick={history.goBack}> <styled.StyledAngleIcon icon={faAngleLeft} /></styled.Btn> 
        </div>
    )
}
