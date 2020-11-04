import React, { Component } from "react";
import * as styled from "./Location.styled";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

class Location extends Component {
  
  render() {
    return (
      <styled.AdressWrapper>
        <styled.StyledUserIcon icon={faMapMarkerAlt} />
        <styled.Location>
        Stockholmsvägen 75
        </styled.Location>
      </styled.AdressWrapper>
    );
  }
}

export default Location;
