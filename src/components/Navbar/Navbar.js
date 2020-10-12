import React from "react";
import { Link } from "react-router-dom";
import * as styled from "./Navbar.styled";

const Navbar = () => {
  return (
    <styled.Nav>
      <ul>
        <Link to="/soupmenu">
          <li>SOPPA</li>
        </Link>
        <Link to="/drinks">
          <li>DRYCK</li>
        </Link>
        <Link to="/extras">
          <li>TILLBEHÖR</li>
        </Link>
      </ul>
    </styled.Nav>
  );
};

export default Navbar;
