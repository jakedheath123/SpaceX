import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";

import "./SingleLaunch.css";
import { getSingleLaunch } from "../../actions";
import Loader from "../Loader/Loader";
import ViewToggler from "../ViewToggler/ViewToggler";

const SingleLaunchCard = ({ getSingleLaunch, flight_number, oneFlight }) => {
  useEffect(() => {
    getSingleLaunch(flight_number);
  }, [getSingleLaunch, flight_number]);

  if (!oneFlight) return <Loader />;

  const {
    mission_name,
    details,
    launch_year,
    launch_date_local,
    links: { mission_patch_small, article_link, video_link, flickr_images },
    rocket: { rocket_name, rocket_type }
  } = oneFlight;

  return (
    <main className="singleLaunch-container">
      <div className="singleLaunch-box1">
        <Link to="/launches" className="link-box1">
          <button className="ui button">Back</button>
        </Link>

        <h1>{mission_name}</h1>
        <h2>{launch_year}</h2>
        {mission_patch_small ? (
          <img src={mission_patch_small} alt="Mission Patch" />
        ) : null}

        <p>{details ? `Mission Details: ${details}` : null}</p>
      </div>
      <div className="singleLaunch-table">
        <table className="ui celled inverted selectable table">
          <thead className="">
            <tr className="">
              <th className="">Launch Date</th>
              <th className="">Rocket Name</th>
              <th className="">Rocket Type</th>
              <th className="">Article Link</th>
              <th className="">Video Link</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="">
              <td className="">{launch_date_local}</td>
              <td className="">{rocket_name}</td>
              <td className="">{rocket_type}</td>
              <td className="">
                <a href={article_link}>Space News</a>
              </td>
              <td className="">
                <a href={video_link}>Youtube</a>
              </td>
            </tr>
            <tr className=""></tr>
          </tbody>
        </table>
      </div>
      <div className="singleLaunch-toggler">
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
      </div>
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
