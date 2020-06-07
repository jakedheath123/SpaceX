import React from "react";
import { Link } from "@reach/router";

const About = () => {
  return (
    <div>
      <Link to="/home">
        <button>Back</button>
      </Link>
      <h1>About PAge</h1>
    </div>
  );
};

export default About;
