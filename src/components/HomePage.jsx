import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLaunches } from "../actions";
import LaunchesCard from "./LaunchesCard";

const HomePage = ({ getLaunches, launches }) => {
  useEffect(() => {
    getLaunches();
  }, []);

  const renderLaunchesList = () => {
    if (launches.length === 0) return <h1>Loading...</h1>;
    return (
      <main>
        <ul>
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
