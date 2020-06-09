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
    <li className="main-grid">
      <div className="main-list">
        <img src={links.mission_patch} alt="Launch Logo" className="ind" />
        <h1
          className="ind"
          style={launch_success ? { color: "green" } : { color: "red" }}
        >
          {mission_name}{" "}
        </h1>
        <p className="ind">{launch_year}</p>
        <Link to={`/launches/${flight_number}`} className="ind">
          <button className="ui button">Launch Details</button>
        </Link>
      </div>
    </li>
  );
};

export default LaunchesCard;
