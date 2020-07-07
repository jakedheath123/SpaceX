import React, { Component } from "react";

import errorImage from "../../images/errorImage.png";
import "./ErrorBoundary.css";

class ErrorBoundary extends Component {
  state = {
    hasErrored: false
  };

  static getDerivedStateFromError(error) {
    return {
      hasErrored: true
    };
  }

  render() {
    const { hasErrored } = this.state;
    const { children } = this.props;
    return hasErrored ? (
      <div className="error-boundary-container">
        <img src={errorImage} alt="Error display" />
        <h2>Sorry this page is broken</h2>
      </div>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
