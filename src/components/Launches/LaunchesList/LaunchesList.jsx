import React from "react";

import LaunchesCard from "../LaunchesCard/LaunchesCard";

const LaunchesList = ({ launches }) => {
  return !launches.length ? (
    <p>No Launches</p>
  ) : (
    <ul>
      {launches.map(launch => {
        const { flight_number } = launch;
        return <LaunchesCard key={flight_number} launch={launch} />;
      })}
    </ul>
  );
};

export default LaunchesList;
