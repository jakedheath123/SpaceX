import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getLaunches } from "../actions";
import LaunchesCard from "./LaunchesCard";
import Loader from "./Loader";

const Launches = ({ getLaunches, launches }) => {
  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  const renderLaunchesList = () => {
    if (!launches.length) return <Loader />;
    return (
      <main className="container-main">
        <div className="key">
          <h4>
            Key : success{" "}
            <i className="square icon" style={{ color: "green" }} /> failure{" "}
            <i className="square icon" style={{ color: "red" }} />{" "}
          </h4>
        </div>
        <div className="head">
          <h1>Launches</h1>
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
})(Launches);
