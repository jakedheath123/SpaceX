import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";

import { getSingleLaunch } from "../../actions";
import Loader from "../Loader/Loader";
import ViewToggler from "../ViewToggler/ViewToggler";

const SingleLaunchCard = ({ getSingleLaunch, flight_number, oneFlight }) => {
  useEffect(() => {
    getSingleLaunch(flight_number);
  }, [getSingleLaunch, flight_number]);

  if (!oneFlight) return <Loader />;

  const { mission_name, details, launch_date_local, links, rocket } = oneFlight;
  const {
    mission_patch_small,
    article_link,
    video_link,
    flickr_images
  } = links;
  const { rocket_name, rocket_type } = rocket;

  return (
    <main>
      <div>
        <div>
          <Link to="/launches">
            <button className="ui button">Back</button>
          </Link>
        </div>
        <h1>{mission_name}</h1>
        <img src={mission_patch_small} alt="Mission Patch" />
        <p>{details ? `Mission Details: ${details}` : null}</p>
      </div>
      <div>
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
      <div>
        <ViewToggler>
          <br></br>
          <br></br>
          {!flickr_images.length ? "No images" : null}
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
