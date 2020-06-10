import React, { lazy, Suspense } from "react";
import { Router } from "@reach/router";

import "./App.css";
import Loader from "./components/Loader";

const SignInPage = lazy(() => import("./components/SignInPage"));
const HomePage = lazy(() => import("./components/HomePage"));
const SingleLaunchCard = lazy(() => import("./components/SingleLaunchCard"));
const About = lazy(() => import("./components/About"));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<Loader />}>
        <Router>
          <SignInPage path="/" />
          <HomePage path="/home" />
          <SingleLaunchCard path="/launches/:flight_number" />
          <About path="/about" />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
