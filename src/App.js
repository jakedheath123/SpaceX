import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";

import "./App.css";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";

const SignInPage = lazy(() => import("./components/SignInPage"));
const HomePage = lazy(() => import("./components/HomePage"));
const SingleLaunchCard = lazy(() => import("./components/SingleLaunchCard"));
const About = lazy(() => import("./components/About"));
const Launches = lazy(() => import("./components/Launches"));

function App() {
  return (
    <div className="app">
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Router>
          <SignInPage path="/" />
          <HomePage path="/home" />
          <Launches path="/launches" />
          <SingleLaunchCard path="/launches/:flight_number" />
          <About path="/about" />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
