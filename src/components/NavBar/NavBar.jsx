import React from "react";
import { Link } from "@reach/router";

import "./NavBar.css";
import logo from "../../images/logo.jpg";

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="spaceX logo" className="ui small image" />
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/launches">
          <p>Launches</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
