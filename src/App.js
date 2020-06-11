import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";

import "./App.css";
import Loader from "./components/Loader";
const HomePage = lazy(() => import("./components/HomePage"));
const SingleLaunchCard = lazy(() => import("./components/SingleLaunchCard"));
const About = lazy(() => import("./components/About"));
const Launches = lazy(() => import("./components/Launches"));
const NavBar = lazy(() => import("./components/NavBar"));
// const SignInPage = lazy(() => import("./components/SignInPage"));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<Loader />}>
        <NavBar />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Router>
          {/* <SignInPage path="/" /> */}
          <HomePage path="/" />
          <Launches path="/launches" />
          <SingleLaunchCard path="/launches/:flight_number" />
          <About path="/about" />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
