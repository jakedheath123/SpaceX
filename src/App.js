import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { Router } from "@reach/router";
import SignInPage from "./components/SignInPage";
import SingleLaunchCard from "./components/SingleLaunchCard";

function App() {
  return (
    <div className="app">
      <Router>
        <SignInPage path="/" />
        <HomePage path="/home" />
        <SingleLaunchCard path="/launches/:flight_number" />
      </Router>
    </div>
  );
}

export default App;
