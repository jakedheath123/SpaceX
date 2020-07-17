import React from "react";
import { Link } from "@reach/router";

import ViewToggler from "../../ViewToggler/ViewToggler";
import SingleLaunchImages from "../SingleLaunchImages/SingleLaunchImages";

const SingleLaunchCard = ({
  launch: {
    mission_name,
    details,
    launch_year,
    links: { mission_patch_small, flickr_images }
  },
  setTogglerFalse
}) => {
  return (
    <main className="single-launch-container">
      <section className="single-launch-info">
        <Link to="/" className="link-button">
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
      <section className="single-launch-toggler">
        <ViewToggler>
          <SingleLaunchImages images={flickr_images} />
        </ViewToggler>
      </section>
    </main>
  );
};

export default SingleLaunchCard;
