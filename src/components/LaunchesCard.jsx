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
      <div role="list" class="ui divided middle aligned list">
        <div role="listitem" class="item">
          <div class="right floated content">
            <Link to={`/launches/${flight_number}`}>
              <button class="ui button">Launch Details</button>
            </Link>
          </div>
          <img
            src={links.mission_patch}
            alt="Launch Logo"
            className="ui small image"
          />
          <div class="content">
            <h1>Mission Name </h1>
            <p style={launch_success ? { color: "green" } : { color: "red" }}>
              {mission_name}{" "}
            </p>
            <h2>Launch Year</h2>
            <p>{launch_year}</p>
          </div>
        </div>
      </div>
      <br></br>
    </li>
  );
};

export default LaunchesCard;
