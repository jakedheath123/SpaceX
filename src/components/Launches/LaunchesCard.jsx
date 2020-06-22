import React from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";

import { setTogglerFalse } from "../../actions";

const LaunchesCard = ({ launch, setTogglerFalse }) => {
  const {
    flight_number,
    mission_name,
    launch_success /*launch_year*/
  } = launch;

  return (
    <li>
      {/* <div> */}
      <h1 style={launch_success ? { color: "green" } : { color: "red" }}>
        {mission_name}{" "}
      </h1>
      {/* <h2>{launch_year}</h2> */}
      {/* </div> */}
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
