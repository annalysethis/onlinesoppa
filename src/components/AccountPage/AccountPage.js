import React from 'react'
import * as styled from "./AccountPage.styled";
import {
    faFlag,
    faAngleRight,
    faUmbrellaBeach,
    faMapMarkedAlt,
    faKey,
    faCreditCard,
    faFileAlt,
    faBoxOpen
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import GoBackBtn from "../GoBackBtn";
  import user from "../../images/user.jpg"

export default function AccountPage() {
    return (
        <styled.Container>
            <styled.AccountHeader>
                <GoBackBtn/>
                
                <styled.YellowBox></styled.YellowBox>
                <img src={user} alt="User Image"/><h4>CHLOÉ WILSON</h4>
            </styled.AccountHeader>
           <styled.List>
               <li><styled.StyledIcon icon={faFlag}/> CHANGE LANGUAGE <styled.StyledAngleIcon icon={faAngleRight} /></li>
               <li><styled.StyledIcon icon={faBoxOpen} />BESTÄLLINGSHISTORIK <styled.StyledAngleIcon icon={faAngleRight} /></li>
               <li><styled.StyledIcon icon={faFileAlt} />PERSONLIG INFO <styled.StyledAngleIcon icon={faAngleRight} /></li>
               <li><styled.StyledIcon icon={faCreditCard} />BETALNINGSMETODER <styled.StyledAngleIcon icon={faAngleRight} /></li>
               <li><styled.StyledIcon icon={faKey} />BYT LÖSENORD <styled.StyledAngleIcon icon={faAngleRight} /></li>
               <li><styled.StyledIcon icon={faMapMarkedAlt} />SPÅRA ORDER <styled.StyledAngleIcon icon={faAngleRight} /></li>
               <li><styled.StyledIcon icon={faUmbrellaBeach} />LOGGA UT <styled.StyledAngleIcon icon={faAngleRight} /></li>
           </styled.List>
        </styled.Container>
    )
}