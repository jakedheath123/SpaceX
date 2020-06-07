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
      <div role="list" class="ui list">
        <div role="listitem" class="item">
          <img
            src={links.mission_patch}
            alt="Launch Logo"
            className="ui small image"
          />
          <div class="content">
            <h1
              className="header"
              style={launch_success ? { color: "green" } : { color: "red" }}
            >
              {mission_name}{" "}
            </h1>
            <div>
              <p>{launch_year}</p>
              <Link to={`/launches/${flight_number}`}>
                <button className="ui button">Launch Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </li>
  );
};

export default LaunchesCard;
