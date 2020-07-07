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
    if (this.state.hasErrored)
      return (
        <div className="error-boundary-container">
          <img src={errorImage} alt="Error display" />
          <h2>Sorry this page is broken</h2>
        </div>
      );
    return this.props.children;
  }
}

export default ErrorBoundary;
