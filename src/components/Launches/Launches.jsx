import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./Launches.css";
import { getLaunches } from "../../actions";
import LaunchesCard from "./LaunchesCard";
import Loader from "../Loader/Loader";

const Launches = ({ getLaunches, launches }) => {
  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  const renderLaunchesList = () => {
    if (!launches.length) return <Loader />;
    return (
      <main className="launches-container">
        <div className="keys">
          <p>
            <i className="square icon" style={{ color: "green" }} /> = Success
          </p>

          <p>
            <i className="square icon" style={{ color: "red" }} /> = Fail
          </p>
        </div>
        <div className="header">
          <h1>Launches</h1>
        </div>
        <div className="launches">
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
