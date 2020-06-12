import React, { Component } from "react";

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
    if (this.state.hasErrored) return <div>An Error Has Occured</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
