import React from "react";
import { Link } from "@reach/router";

import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <nav className="container-main">
      <div className="main-box1">
        <img src={logo} alt="spaceX logo" className="ui small image" />
      </div>
      <div className="links">
        <Link to="/home">
          <p className="hvr-underline-from-left">Home</p>
        </Link>
        <Link to="/about">
          <p className="hvr-underline-from-left">About</p>
        </Link>
        <Link to="/launches">
          <p className="hvr-underline-from-left">Launches</p>
        </Link>
        <Link to="/">
          <p className="hvr-underline-from-left">Sign Out</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
