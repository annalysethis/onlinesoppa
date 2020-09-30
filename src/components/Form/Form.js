import React, { Component } from "react";
import * as styled from "./Form.styled";

export class Form extends Component {
  render() {
    return (
      <styled.Form>
        <input type="text" name="name" placeholder="Ange leveransadress..." />

        <input type="submit" value="Submit" />
      </styled.Form>
    );
  }
}

export default Form;
