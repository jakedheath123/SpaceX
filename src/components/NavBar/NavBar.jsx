import React from "react";
import { Link } from "@reach/router";

import logo from "../../images/logo.jpg";

const NavBar = () => {
  return (
    <nav className="container-main">
      <div className="links">
        <img src={logo} alt="spaceX logo" className="ui small image" />
        <Link to="/">
          <p className="hvr-underline-from-left">Home</p>
        </Link>
        <Link to="/about">
          <p className="hvr-underline-from-left">About</p>
        </Link>
        <Link to="/launches">
          <p className="hvr-underline-from-left">Launches</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
