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
        <styled.Title>Delad glädje är dubbel glädje</styled.Title>
        <styled.ImgWrapper>
          <styled.Styledimg
            alt="An icon of a hand givig soup to another hand"
            src={souplogo}
          ></styled.Styledimg>
        </styled.ImgWrapper>
        <styled.Article>
        <p>Värm någons själ med en ljuvligt god soppa som boostar
 kroppen och immunförsvaret!</p>
 
 <p>Vi har soppor som är fyllda med nyttigheter till dig eller kanske en vän?</p>
 </styled.Article>
 <styled.Section>
   <styled.Wrapper>
 <styled.SoupImgWrapper>
   <img src="https://images.unsplash.com/photo-1600441397207-1913d3c09b2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt=""/>
 </styled.SoupImgWrapper>
 <styled.SoupImgWrapper>
 <img src="https://images.unsplash.com/photo-1576020688457-6f06d17c5702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt=""/>
 </styled.SoupImgWrapper>
 </styled.Wrapper>
 <styled.Wrapper>
 <styled.SoupImgWrapper>
 <img src="https://images.unsplash.com/photo-1568716508386-cda5cdec6827?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80" alt=""/>
 </styled.SoupImgWrapper>
 <styled.SoupImgWrapper>
 <img src="https://images.unsplash.com/photo-1544068192-4c4af19868c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt=""/>
 </styled.SoupImgWrapper>
 </styled.Wrapper>
 </styled.Section>
      </div>
    );
  }
}

export default Home;
