import React from 'react'
import {
    faAngleDown,
  } from "@fortawesome/free-solid-svg-icons";
  import * as styled from "./MoreInfoBtn.styled";
  import { bool, func } from "prop-types";


  const MoreInfoBtn = ({ open, setOpen }) => {
    return (
      <styled.BtnContainer open={open} onClick={() => setOpen(!open)}>
            <p>Mer information</p>
           
            <styled.StyledCaretIcon icon={faAngleDown} open={open} onClick={() => setOpen(!open)}/>
            
        </styled.BtnContainer>
    );
  };

MoreInfoBtn.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
  };

  export default MoreInfoBtn;