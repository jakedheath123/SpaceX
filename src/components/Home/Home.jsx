import React from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";

import { getLaunches } from "../../actions";
import "./Home.css";
import earth from "../../images/earth.jpg";

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
        <img src={earth} alt="rocket" />
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

export default connect(null, { getLaunches })(HomePage);
