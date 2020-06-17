import React from "react";
import { Link } from "@reach/router";

import logo2 from "../../images/logo2.jpg";

const NavBar = () => {
  return (
    <nav className="container-main">
      <div className="links">
        <img src={logo2} alt="spaceX logo" className="ui small image" />
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
