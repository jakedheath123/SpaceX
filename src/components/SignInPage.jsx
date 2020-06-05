import React from "react";
import logo from "../images/logo.png";
import image1 from "../images/image1.jpg";
import GoogleAuth from "./GoogleAuth";

const SignInPage = () => {
  return (
    <>
      <img src={logo} alt="Logo" className="ui medium image" />
      <img src={image1} alt="Rocket launch" />
      <h1>Welcome</h1>
      <GoogleAuth />
    </>
  );
};

export default SignInPage;
