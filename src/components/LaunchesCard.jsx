import React from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";

import { setFalse } from "../actions";

const LaunchesCard = ({ launch, setFalse }) => {
  const {
    flight_number,
    mission_name,
    links,
    launch_year,
    launch_success
  } = launch;

  return (
    <li className="main-list">
      <img
        src={links.mission_patch}
        alt="Launch Logo"
        className="ui medium image"
      />

      <h1 style={launch_success ? { color: "green" } : { color: "red" }}>
        {mission_name}{" "}
      </h1>

      <Link to={`/launches/${flight_number}`}>
        <button onClick={setFalse} className="ui secondary button">
          Launch Details
        </button>
      </Link>
    </li>
  );
};

export default connect(null, {
  setFalse
})(LaunchesCard);
