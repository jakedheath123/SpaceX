import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";

import "./App.css";
import Loader from "./components/Loader/Loader";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import NavBar from "./components/NavBar/NavBar";

const Home = lazy(() => import("./components/Home/Home"));
const SingleLaunch = lazy(() =>
  import("./components/SingleLaunch/SingleLaunch")
);
const About = lazy(() => import("./components/About/About"));
const Launches = lazy(() => import("./components/Launches/Launches"));

function App() {
  return (
    <div className="app">
      <NavBar />
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Router primary={false}>
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
