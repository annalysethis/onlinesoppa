import React, { Component } from "react";
import * as styled from "./FoodFilter.styled";

// export class FoodFilter extends Component {

//   render() {
//     return (
//       <styled.BtnContainer>
//         <styled.Button >Kött</styled.Button>
//         <styled.Button>Kyckling</styled.Button>
//         <styled.Button>Fisk</styled.Button>
//         <styled.Button>Vegansk</styled.Button>
//       </styled.BtnContainer>
//     );
//   }
// }

// export default FoodFilter;

export default function FoodFilter(props) {
  return (
    <React.Fragment>
      <styled.BtnContainer>
        <styled.Button value="Kött">Kött</styled.Button>
        <styled.Button>Kyckling</styled.Button>
        <styled.Button>Fisk</styled.Button>
        <styled.Button>Vegansk</styled.Button>
      </styled.BtnContainer>
    </React.Fragment>
  );
}
