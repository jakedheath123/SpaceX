import React from "react";
import { Router } from "@reach/router";

import "./App.css";
import SignInPage from "./components/SignInPage";
import SingleLaunchCard from "./components/SingleLaunchCard";
import HomePage from "./components/HomePage";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <Router>
        <SignInPage path="/" />
        <HomePage path="/home" />
        <SingleLaunchCard path="/launches/:flight_number" />
        <About path="/about" />
      </Router>
    </div>
  );
}

export default App;
