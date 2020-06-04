import React from "react";
import { Link } from "@reach/router";

const LaunchesCard = ({ launch }) => {
  console.log(launch);
  const { flight_number, mission_name, links } = launch;

  return (
    <li>
      <h1>{mission_name}</h1>
      <Link to={`/launches/${flight_number}`}>
        <img src={links.mission_patch} alt="Launch Logo" />
      </Link>
    </li>
  );
};

export default LaunchesCard;
