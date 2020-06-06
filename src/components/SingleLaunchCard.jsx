import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSingleLaunch } from "../actions";
import Loader from "./Loader";
import ViewToggler from "./ViewToggler";

const SingleLaunchCard = ({ getSingleLaunch, flight_number, oneFlight }) => {
  useEffect(() => {
    getSingleLaunch(flight_number);
  }, [flight_number]);

  if (!oneFlight) return <Loader />;

  const {
    mission_name,
    details,
    launch_date_local,
    links,
    rocket
    // launch_failure_details
  } = oneFlight;
  const {
    mission_patch_small,
    article_link,
    video_link,
    flickr_images
  } = links;
  const { rocket_name, rocket_type } = rocket;
  // const { time, reason } = launch_failure_details;
  return (
    <main>
      <h1>{mission_name}</h1>
      <img src={mission_patch_small} alt="Mission Patch" />
      <p>{details ? `Mission Details: ${details}` : null}</p>
      <ViewToggler id={flight_number}>
        <br></br>
        {!flickr_images.length ? "No images" : null}
        {flickr_images.map(image => {
          return (
            <img
              key={image}
              src={image}
              alt="Rocket Image"
              className="ui medium spaced image"
            />
          );
        })}
      </ViewToggler>
    </main>
  );
};

const mapStateToProps = state => {
  return {
    oneFlight: state.singleLaunch.singleFlight
  };
};

export default connect(mapStateToProps, {
  getSingleLaunch
})(SingleLaunchCard);
