import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div
      className="lds-ripple"
      style={{ width: "300px", margin: "auto", display: "block" }}
    >
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
