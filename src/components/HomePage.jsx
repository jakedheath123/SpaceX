import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";

import { getLaunches } from "../actions";
import LaunchesCard from "./LaunchesCard";
import Loader from "./Loader";

const HomePage = ({ getLaunches, launches }) => {
  useEffect(() => {
    getLaunches();
  }, []);

  const renderLaunchesList = () => {
    if (!launches.length) return <Loader />;
    return (
      <main>
        <Link to="/about">
          <button>About</button>
        </Link>
        <ul>
          <h4>
            Key : success{" "}
            <i className="square icon" style={{ color: "green" }} /> failure{" "}
            <i className="square icon" style={{ color: "red" }} />{" "}
          </h4>
          <h2>Missions</h2>
          {launches.map(launch => {
            return <LaunchesCard key={launch.flight_number} launch={launch} />;
          })}
        </ul>
      </main>
    );
  };

  return <div>{renderLaunchesList()}</div>;
};

const mapStateToProps = state => {
  return {
    launches: state.launches
  };
};

export default connect(mapStateToProps, {
  getLaunches
})(HomePage);
