import React, { useEffect } from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";

import { getCompanyInfo } from "../actions";

const About = ({ getCompanyInfo }) => {
  useEffect(() => {
    getCompanyInfo();
  }, []);

  return (
    <div>
      <Link to="/home">
        <button>Back</button>
      </Link>
      <h1>About PAge</h1>
    </div>
  );
};

const mapStateToProps = state => {};

export default connect(mapStateToProps, {
  getCompanyInfo
})(About);
