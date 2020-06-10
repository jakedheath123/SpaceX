import React from "react";

import logo from "../images/logo.png";
import image1 from "../images/image1.jpg";
import GoogleAuth from "./GoogleAuth";

const SignInPage = () => {
  return (
    <div className="container-signIn">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-signIn" />
      </div>
      <div className="image-signIn">
        <img src={image1} alt="Rocket launch" className="rocket-image" />
      </div>
      <div className="welcome">
        <h1>Welcome</h1>
        <GoogleAuth />
        <h2>or</h2>
      </div>
    </div>
  );
};

export default SignInPage;
