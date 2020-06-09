import React, { useEffect } from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import elonImage from "../images/elon.jpg";
import gwynneShotwellImage from "../images/gwynneShotwell.png";
import tomMuellerImage from "../images/tomMueller.jpg";

import { getCompanyInfo } from "../actions";
import Loader from "./Loader";

const About = ({ getCompanyInfo, spaceXInfo }) => {
  useEffect(() => {
    getCompanyInfo();
  }, []);

  if (!spaceXInfo) return <Loader />;

  const {
    name,
    founder,
    founded,
    employees,
    vehicles,
    launch_sites,
    ceo,
    coo,
    cto_propulsion,
    valuation,
    summary,
    headquarters,
    links
  } = spaceXInfo;
  const { address, city, state } = headquarters;
  const { website, twitter, elon_twitter } = links;

  return (
    <>
      <Link to="/home">
        <button className="ui button">Back</button>
      </Link>
      <div className="grid">
        <div className="about">
          <h2>CEO and CTO</h2>
          <p>{ceo}</p>
          <img
            src={elonImage}
            alt="Elon Musk avatar"
            className="ui medium image"
          />
        </div>
        <div className="about">
          <h2>COO</h2>
          <p>{coo}</p>
          <img
            src={gwynneShotwellImage}
            alt="Gwynne Shotwell avatar"
            className="ui medium image"
          />
        </div>
        <div className="about">
          <h2>CTO Propulsion</h2>
          <p>{cto_propulsion}</p>
          <img
            src={tomMuellerImage}
            alt="Tom Mueller avatar"
            className="ui medium image"
          />
        </div>
        <div>
          <h1>{name}</h1>
          <p>{summary}</p>
        </div>
        <div>
          <ul>
            <li>Founder: {founder}</li>
            <li>Founded: {founded}</li>
            <li>Employees: {employees}</li>
            <li>Vehicles: {vehicles}</li>
            <li>Launch Sites: {launch_sites}</li>
            <li>Valuation : ${valuation}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    spaceXInfo: state.companyInfo.companyDetails
  };
};

export default connect(mapStateToProps, {
  getCompanyInfo
})(About);
