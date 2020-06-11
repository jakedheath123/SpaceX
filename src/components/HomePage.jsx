import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";

import logo from "../images/logo.png";
import { getLaunches } from "../actions";
import LaunchesCard from "./LaunchesCard";
import Loader from "./Loader";

const HomePage = ({ getLaunches, launches }) => {
  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  const renderLaunchesList = () => {
    if (!launches.length) return <Loader />;
    return (
      <main className="container-main">
        <div className="main-box1">
          <img src={logo} alt="spaceX logo" className="ui small image" />
        </div>
        <div className="links">
          <Link to="/about">
            <p className="hvr-underline-from-left">About</p>
          </Link>
          <Link to="/">
            <p className="hvr-underline-from-left">Sign Out</p>
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
