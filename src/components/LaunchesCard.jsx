import React from "react";
import { Link } from "@reach/router";

const LaunchesCard = ({ launch }) => {
  const {
    flight_number,
    mission_name,
    links,
    launch_year,
    launch_success
  } = launch;

  return (
    <li>
      <div className="ui list">
        <h1>{mission_name}</h1>
        <h2>{launch_year}</h2>
        <Link to={`/launches/${flight_number}`}>
          <img
            src={links.mission_patch}
            alt="Launch Logo"
            className="ui medium image"
          />
        </Link>
      </div>
    </li>
  );
};

export default LaunchesCard;
