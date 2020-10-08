import React from "react";
import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";
import { Link } from "react-router-dom";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={() => setOpen(false)}>
        Hem
      </Link>
      <Link to="/soupmenu" onClick={() => setOpen(false)}>
        Meny
      </Link>
      <Link to="/about" onClick={() => setOpen(false)}>
        Om oss
      </Link>
      <Link to="/contact" onClick={() => setOpen(false)}>
        Kontakt
      </Link>
      <Link to="/login" onClick={() => setOpen(false)}>
        Logga in
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
