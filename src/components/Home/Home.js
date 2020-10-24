import React, { Component } from "react";
import Form from "./../Form";
import souplogo from "./../../images/souplogo.png";
import * as styled from "./Home.styled";
import Header from "../Header"

export class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Form />
        <styled.Headline>Delad glädje är dubbel glädje</styled.Headline>
        <styled.ImgWrapper>
          <styled.Styledimg
            alt="An icon of a hand givig soup to another hand"
            src={souplogo}
          ></styled.Styledimg>
        </styled.ImgWrapper>
      </div>
    );
  }
}

export default Home;
