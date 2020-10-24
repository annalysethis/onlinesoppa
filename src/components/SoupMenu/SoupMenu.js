import React, { Component, useContext  } from "react";
import {CartContext} from "../ShoppingCart/CartContext"
import { data } from "../Data/data";
import * as styled from "./SoupMenu.styled";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./../Navbar";
import FoodFilter from "./../FoodFilter";
import Header from "../Header"




class SoupMenu extends Component {
  
  state = {
    products: data,
    productCopy: data,
    btns: ["Kött", "Kyckling", "Fisk", "Vegansk"],
  };

  //filtering button functionality
  handleBtns = (e) => {
    // console.log(e.target.value);
    let productCopy;

    if (e.target.value === null) {
      productCopy = this.state.products;
    } else {
      productCopy = this.state.products.filter(
        (item) => item.category === e.target.value
      );
    }

    this.setState({
      productCopy: productCopy,
    });
  };


  render() {
    return (
      <div>
      
      <Header/>
     
        <styled.AdressWrapper>
          <styled.StyledMapIcon icon={faMapMarkerAlt} />

          <styled.Location>
            {this.props.location.state && this.props.location.state.adress}
          </styled.Location>
        </styled.AdressWrapper>
       
        <Navbar />
        <FoodFilter
          products={this.state.productCopy}
          handleBtns={this.handleBtns}
          btns={this.state.btns}
        />
      
      </div>
    );
  }
}

export default SoupMenu;
