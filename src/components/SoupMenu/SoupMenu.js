import React from "react";
import SoupData from "./../Data/Soups.json";
import * as styled from "./SoupMenu.styled";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./../Navbar";
import FoodFilter from "./../FoodFilter";

// class SoupMenu extends Component {
//   render() {
//     return (
//       <div>
//         {/* <Location /> */}
//         <styled.AdressWrapper>
//           <styled.StyledUserIcon icon={faMapMarkerAlt} />
//           <styled.Location>
//             {this.props.location.state && this.props.location.state.adress}
//           </styled.Location>
//         </styled.AdressWrapper>
//         <Navbar />
//         <FoodFilter />
//         {SoupData.map((item, index) => {
//           return (
//             <styled.Container key={index} id={item.id}>
//               <styled.ImgWrapper>
//                 <styled.Image src={item.image}></styled.Image>
//               </styled.ImgWrapper>
//               <styled.Wrapper>
//                 <styled.SoupType>{item.category}</styled.SoupType>

//                 <styled.SoupTitle>{item.title}</styled.SoupTitle>
//                 <styled.Info>{item.info}</styled.Info>
//                 <styled.IngrediensHeader>INGREDIENSER:</styled.IngrediensHeader>
//                 <styled.IngrediensWrapper>
//                   <styled.Ingrediens>{item.ing1}</styled.Ingrediens>
//                   <styled.Ingrediens>{item.ing2}</styled.Ingrediens>
//                   <styled.Ingrediens>{item.ing3}</styled.Ingrediens>
//                   <styled.Ingrediens>{item.ing4}</styled.Ingrediens>
//                 </styled.IngrediensWrapper>
//               </styled.Wrapper>
//             </styled.Container>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default SoupMenu;

export default function SoupMenu(props) {
  return (
    <div>
      <styled.AdressWrapper>
        <styled.StyledUserIcon icon={faMapMarkerAlt} />
        <styled.Location>
          {props.location.state && props.location.state.adress}
        </styled.Location>
      </styled.AdressWrapper>
      <Navbar />
      <FoodFilter />
      {SoupData.map((item, index) => {
        return (
          <React.Fragment>
            <styled.Container key={index} id={item.id}>
              <styled.ImgWrapper>
                <styled.Image src={item.image}></styled.Image>
              </styled.ImgWrapper>
              <styled.Wrapper>
                <styled.SoupType>{item.category}</styled.SoupType>

                <styled.SoupTitle>{item.title}</styled.SoupTitle>
                <styled.Info>{item.info}</styled.Info>
                <styled.IngrediensHeader>INGREDIENSER:</styled.IngrediensHeader>
                <styled.IngrediensWrapper>
                  <styled.Ingrediens>{item.ing1}</styled.Ingrediens>
                  <styled.Ingrediens>{item.ing2}</styled.Ingrediens>
                  <styled.Ingrediens>{item.ing3}</styled.Ingrediens>
                  <styled.Ingrediens>{item.ing4}</styled.Ingrediens>
                </styled.IngrediensWrapper>
              </styled.Wrapper>
            </styled.Container>
          </React.Fragment>
        );
      })}
    </div>
  );
}
