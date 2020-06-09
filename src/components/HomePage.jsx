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
      <main className="container-main">
        <div className="links">
          <Link to="/about">
            <button className="ui button" style={{ margin: 10 }}>
              About
            </button>
          </Link>
          <Link to="/">
            <button className="ui button" style={{ margin: 10 }}>
              Sign Out
            </button>
          </Link>
        </div>
        <div className="key">
          <h4>
            Key : success{" "}
            <i className="square icon" style={{ color: "green" }} /> failure{" "}
            <i className="square icon" style={{ color: "red" }} />{" "}
          </h4>
        </div>
        <div className="head">
          <h2>Missions</h2>
        </div>
        <div className="list">
          <ul>
            {launches.map(launch => {
              return (
                <LaunchesCard key={launch.flight_number} launch={launch} />
              );
            })}
          </ul>
        </div>
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
