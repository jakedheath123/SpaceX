import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";

import "./SingleLaunch.css";
import { getSingleLaunch } from "../../actions";
import Loader from "../Loader/Loader";
import ViewToggler from "../ViewToggler/ViewToggler";

const SingleLaunchCard = ({
  getSingleLaunch,
  flight_number,
  singleLaunch: { singleFlight, isLoading }
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
    <main className="singleLaunch-container">
      <section className="singleLaunch-box1">
        <Link to="/" className="link-box1">
          <button className="ui button">Back</button>
        </Link>
        <h1>{mission_name}</h1>
        <h2>{launch_year}</h2>
        {mission_patch_small ? (
          <img src={mission_patch_small} alt="Mission Patch" />
        ) : null}
        <p>{details ? `Mission Details: ${details}` : null}</p>
      </section>
      <section className="singleLaunch-toggler">
        <ViewToggler>
          {!flickr_images.length ? <p>No images</p> : null}
          <ul>
            {flickr_images.map(image => {
              return (
                <li key={image}>
                  <img src={image} alt="Rocket " />
                </li>
              );
            })}
          </ul>
        </ViewToggler>
      </section>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    singleLaunch: state.singleLaunch
  };
};

export default connect(mapStateToProps, {
  getSingleLaunch
})(SingleLaunchCard);
