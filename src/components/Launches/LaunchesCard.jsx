import React from "react";
import { Link } from "@reach/router";

const LaunchesCard = ({ launch }) => {
  const {
    flight_number,
    mission_name,
    launch_success,
    links: { mission_patch_small }
  } = launch;

  return (
    <li>
      {mission_patch_small ? (
        <img src={mission_patch_small} alt="Mission patch" />
      ) : null}

      <h1 style={launch_success ? { color: "green" } : { color: "red" }}>
        {mission_name}{" "}
      </h1>
      <Link to={`/launches/${flight_number}`} className="launches-link">
        <button className="ui secondary button">Launch Details</button>
      </Link>
    </li>
  );
};

export default LaunchesCard;
