import React, { Component } from "react";
import * as styled from "./Form.styled";
import { withRouter } from "react-router";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adress: "Stockholmsvägen 75",
    };
  }

  handleSubmit = (event) => {
    // kom ihåg denna Anna, det är här magin händer ;)
    event.preventDefault();
    const data = this.state;
    console.log("the final data is: ", data);

    this.props.history.push({
      pathname: "/soupmenu",
      search: "",
      state: data,
    });
  };

  handleInputChange = (event) => {
    event.preventDefault();
    // console.log(event.target.adress);
    // console.log(event.target.value);
    this.setState({
      adress: event.target.value,
    });
  };

  render() {
    const { adress } = this.state;
    return (
      <styled.Container>
        <styled.Form onSubmit={this.handleSubmit}>
          <styled.StyledInput
            type="text"
            adress="adress"
            placeholder="Ange leveransadress..."
            onChange={this.handleInputChange}
            value={adress}
          />

          <styled.StyledButton type="submit" value="Hitta Soppor" />
        </styled.Form>
      </styled.Container>
    );
  }
}

export default withRouter(Form);

