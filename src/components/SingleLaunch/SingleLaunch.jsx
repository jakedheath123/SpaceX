import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";

import "./SingleLaunch.css";
import { getSingleLaunch, setTogglerFalse } from "../../actions";
import Loader from "../Loader/Loader";
import ViewToggler from "../ViewToggler/ViewToggler";
import SingleLaunchImages from "./SingleLaunchImages";

const SingleLaunch = ({
  getSingleLaunch,
  flight_number,
  singleLaunch: { singleFlight, isLoading },
  setTogglerFalse
}) => {
  useEffect(() => {
    getSingleLaunch(flight_number);
  }, [getSingleLaunch, flight_number]);

  if (isLoading) return <Loader />;

  const {
    mission_name,
    details,
    launch_year,
    links: { mission_patch_small, flickr_images }
  } = singleFlight;

  return (
    <main className="single-launch-container">
      <section className="single-launch-box1">
        <Link to="/" className="link-box1">
          <button onClick={setTogglerFalse} className="ui button">
            Back
          </button>
        </Link>
        <h1>{mission_name}</h1>
        <h2>{launch_year}</h2>
        {mission_patch_small ? (
          <img src={mission_patch_small} alt="Mission Patch" />
        ) : null}
        <p>{details ? `Mission Details: ${details}` : null}</p>
      </section>
      <ViewToggler className="single-launch-toggler">
        <SingleLaunchImages images={flickr_images} />
      </ViewToggler>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    singleLaunch: state.singleLaunch
  };
};

export default connect(mapStateToProps, {
  getSingleLaunch,
  setTogglerFalse
})(SingleLaunch);
