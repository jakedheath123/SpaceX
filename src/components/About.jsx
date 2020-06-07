import React, { useEffect } from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";

import { getCompanyInfo } from "../actions";

const About = ({ getCompanyInfo, spaceXInfo }) => {
  useEffect(() => {
    getCompanyInfo();
  }, []);

  const {
    name,
    founder,
    founded,
    employees,
    vehicles,
    launch_sites,
    ceo,
    cto,
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
    <div>
      <Link to="/home">
        <button>Back</button>
      </Link>
      <h1>About PAge</h1>
    </div>
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
