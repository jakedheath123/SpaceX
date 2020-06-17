import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";

import "./App.css";
import Loader from "./components/Loader/Loader";
import ErrorBoundary from "./error-boundary/ErrorBoundary";
const HomePage = lazy(() => import("./components/Home/Home"));
const SingleLaunchCard = lazy(() =>
  import("./components/SingleLaunch/SingleLaunch")
);
const About = lazy(() => import("./components/About"));
const Launches = lazy(() => import("./components/Launches/Launches"));
const NavBar = lazy(() => import("./components/NavBar/NavBar"));

function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <NavBar />
          <Router>
            <HomePage path="/" />
            <Launches path="/launches" />
            <SingleLaunchCard path="/launches/:flight_number" />
            <About path="/about" />
          </Router>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
