import React, { Component } from "react";
import * as styled from "./Location.styled";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export class Location extends Component {
  render() {
    return (
      <styled.AdressWrapper>
        <styled.StyledUserIcon icon={faMapMarkerAlt} />
        <styled.Location>
          {this.props.location.state && this.props.location.state.adress}
        </styled.Location>
      </styled.AdressWrapper>
    );
  }
}

export default Location;
