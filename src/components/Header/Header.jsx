import React from "react";

import "./Header.css";
import logo from "../../images/logo.jpg";

const Header = () => {
  return (
    <header className="header-logo">
      <img src={logo} alt="spaceX logo" />
    </header>
  );
};

export default Header;
