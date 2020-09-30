import React from "react";
import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";
import { Link } from "react-router-dom";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">Hem</Link>
      <a href="/soupmenu">Meny</a>
      <a href="/">Om oss</a>
      <a href="/">Kontakt</a>
      <a href="/">Logga in</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
