import React from 'react'
import { withRouter } from 'react-router-dom';
import {
    faAngleLeft,
  } from "@fortawesome/free-solid-svg-icons";
  import * as styled from "./GoBackBtn.styled";
//   import BrowserHistory from "react-router/lib/BrowserHistory";



  
export default function GoBackBtn(props) {
    // const BrowserHistory = require('react-router/lib/BrowserHistory').default;
//     const navigateBack = () => {
//         this.goBack();
//onClick={history.goBack}
//   }

    return (
        <div>
           <styled.Btn onClick={() => props.history.go(-1)}> <styled.StyledAngleIcon icon={faAngleLeft} /></styled.Btn> 
        </div>
    )
}

// export default withRouter(ArrowBack);