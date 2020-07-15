import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";
import { connect } from "react-redux";

import "./App.css";
import Loader from "./components/Loader/Loader";
import { getAllLaunches, setTogglerFalse, getSingleLaunch } from "./actions";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Header from "./components/Header/Header";

const SingleLaunch = lazy(() =>
  import("./components/SingleLaunch/SingleLaunch")
);
const Launches = lazy(() => import("./components/Launches/Launches"));

function App(props) {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Router primary={false}>
            <Launches path="/" {...props} />
            <SingleLaunch path="/launches/:flight_number" {...props} />
          </Router>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

const mapStateToProps = state => {
  return {
    allLaunches: state.allLaunches,
    singleLaunch: state.singleLaunch
  };
};

export default connect(mapStateToProps, {
  getAllLaunches,
  setTogglerFalse,
  getSingleLaunch
})(App);
