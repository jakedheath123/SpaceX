import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";

import "./App.css";
import Loader from "./components/Loader/Loader";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Header from "./components/Header/Header";

const SingleLaunch = lazy(() =>
  import("./components/SingleLaunch/SingleLaunch")
);
const LaunchesList = lazy(() => import("./components/Launches/LaunchesList"));

function App() {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Router primary={false}>
            <LaunchesList path="/" />
            <SingleLaunch path="/launches/:flight_number" />
          </Router>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
