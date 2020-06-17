import React from "react";
import { Link } from "@reach/router";

import starlink from "../../images/starlink.jpg";

const HomePage = () => {
  return (
    <main container="container-home">
      <div className="home-box1">
        <div>
          <h1>Latest Launch:</h1>
          <Link to="/latest">
            <button className="hvr-border-fade ">Learn More</button>
          </Link>
        </div>
        <div>
          <img src={starlink} alt="rocket" />
        </div>
        <div>
          <h1>Next Launch:</h1>
          <Link to="/next">
            <button className="hvr-border-fade ">Learn More</button>
          </Link>
        </div>
      </div>
      <div className="home-box2">
        <hr></hr>
      </div>
    </main>
  );
};

export default HomePage;
