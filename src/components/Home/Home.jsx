import React from "react";
import { Link } from "@reach/router";

import "./Home.css";
import starLink from "../../images/starLink.jpg";

const HomePage = () => {
  return (
    <main className="home-container">
      <div className="home-box1">
        <h1>Latest Launch:</h1>
        <Link to="/latest">
          <button>Learn More</button>
        </Link>
      </div>
      <div className="home-box2">
        <img src={starLink} alt="rocket" />
      </div>
      <div className="home-box3">
        <h1>Next Launch:</h1>
        <Link to="/next">
          <button>Learn More</button>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
