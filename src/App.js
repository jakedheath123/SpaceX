import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";

import "./App.css";
import Loader from "./components/Loader/Loader";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
const Home = lazy(() => import("./components/Home/Home"));
const SingleLaunch = lazy(() =>
  import("./components/SingleLaunch/SingleLaunch")
);
const About = lazy(() => import("./components/About/About"));
const Launches = lazy(() => import("./components/Launches/Launches"));
const NavBar = lazy(() => import("./components/NavBar/NavBar"));

function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <NavBar />
          <Router>
            <Home path="/" />
            <Launches path="/launches" />
            <SingleLaunch path="/launches/:flight_number" />
            <About path="/about" />
          </Router>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
