import React, { Component } from "react";
import * as styled from "./FoodFilter.styled";

export class FoodFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: null,
    };
  }
  render() {
    return (
      <styled.BtnContainer>
        <styled.Button onClick="show">Kött</styled.Button>
        <styled.Button>Kyckling</styled.Button>
        <styled.Button>Fisk</styled.Button>
        <styled.Button>Vegansk</styled.Button>
      </styled.BtnContainer>
    );
  }
}

export default FoodFilter;
