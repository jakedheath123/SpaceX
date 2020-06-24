import React, { useEffect } from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";

import { getLaunches } from "../../actions";
import "./Home.css";
import earth from "../../images/earth.jpg";
import Loader from "../Loader/Loader";

const HomePage = ({ getLaunches, launches }) => {
  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  if (!launches) return <Loader />;

  const totalLaunches = launches.length;
  const successfulLaunchTotal = launches.reduce((total, launch) => {
    if (launch.launch_success) total++;
    return total;
  }, 0);

  return (
    <main className="home-container">
      <div className="home-box1">
        <h2>Latest Launch:</h2>
        <Link to="/latest">
          <button>Learn More</button>
        </Link>
      </div>
      <div className="home-box2">
        <img src={earth} alt="rocket" />
      </div>
      <div className="home-box3">
        <h2>Next Launch:</h2>
        <Link to="/next">
          <button>Learn More</button>
        </Link>
      </div>
      <div className="home-box4">
        <h2>{totalLaunches ? totalLaunches : null}</h2>
        <h3>Total Launches</h3>
      </div>
      <div className="home-box5">
        <h2>
          {successfulLaunchTotal
            ? `${Math.round((successfulLaunchTotal / totalLaunches) * 100)}%`
            : null}
        </h2>
        <h3>Launch Success</h3>
      </div>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    launches: state.launches
  };
};

export default connect(mapStateToProps, { getLaunches })(HomePage);
