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

// const Navbar = () => {
//   return (
//     <styled.Nav>
//       <Link to="/soupmenu">
//         <styled.Button>SOPPA</styled.Button>
//       </Link>
//       <Link to="/drinks">
//         <styled.Button>DRYCK</styled.Button>
//       </Link>
//       <Link to="/extras">
//         <styled.Button>TILLBEHÖR</styled.Button>
//       </Link>
//     </styled.Nav>
//   );
// };

export default Navbar;
