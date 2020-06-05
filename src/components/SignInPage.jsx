import React, { Component } from "react";
import logo from "../images/logo.png";
import image1 from "../images/image1.jpg";

class SignInPage extends Component {
  render() {
    return (
      <>
        <img src={logo} alt="Logo" className="ui medium image" />
        <img src={image1} alt="Rocket launch" />
      </>
    );
  }
}

export default SignInPage;
