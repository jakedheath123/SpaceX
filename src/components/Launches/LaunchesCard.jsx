import React from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";

import { setTogglerFalse } from "../../actions";

const LaunchesCard = ({ launch, setTogglerFalse }) => {
  const {
    flight_number,
    mission_name,
    launch_success,
    links: { mission_patch_small }
  } = launch;

  return (
    <li>
      <img src={mission_patch_small} alt="Mission patch" />
      <h1 style={launch_success ? { color: "green" } : { color: "red" }}>
        {mission_name}{" "}
      </h1>
      <Link to={`/launches/${flight_number}`} className="launches-link">
        <button onClick={setTogglerFalse} className="ui secondary button">
          Launch Details
        </button>
      </Link>
    </li>
  );
};

export default connect(null, {
  setTogglerFalse
})(LaunchesCard);
