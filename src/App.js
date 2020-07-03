import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";

import "./App.css";
import Loader from "./components/Loader/Loader";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import NavBar from "./components/NavBar/NavBar";

const SingleLaunchCard = lazy(() =>
  import("./components/SingleLaunch/SingleLaunchCard")
);
const LaunchesList = lazy(() => import("./components/Launches/LaunchesList"));

function App() {
  return (
    <>
      <NavBar />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Router primary={false}>
            <LaunchesList path="/" />
            <SingleLaunchCard path="/launches/:flight_number" />
          </Router>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
