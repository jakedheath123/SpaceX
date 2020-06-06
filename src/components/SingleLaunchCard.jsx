import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSingleLaunch } from "../actions";

const SingleLaunchCard = ({ getSingleLaunch, flight_number }) => {
  useEffect(() => {
    getSingleLaunch(flight_number);
  }, [flight_number]);

  return (
    <div>
      <h1>Singe Launch Card</h1>
    </div>
  );
};

// const mapStateToProps = state => {
//   console.log(state);
// };

export default connect(null, {
  getSingleLaunch
})(SingleLaunchCard);
