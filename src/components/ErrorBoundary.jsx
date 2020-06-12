import React, { Component } from "react";
import { connect } from "react-redux";

import { setErrorBoundary } from "../actions";

class ErrorBoundary extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => {
  return {
    hasErrored: state.errorBoundary.hasErrored
  };
};

export default connect(mapStateToProps)(ErrorBoundary);
