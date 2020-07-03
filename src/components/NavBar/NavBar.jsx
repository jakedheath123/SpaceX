import React from "react";
import { Link } from "@reach/router";

import "./NavBar.css";
import logo from "../../images/logo.jpg";

const NavBar = () => {
  return (
    <nav className="container">
      <div className="links">
        <img src={logo} alt="spaceX logo" />
        <Link to="/">
          <h2>Launches</h2>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
