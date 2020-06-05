import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { Router } from "@reach/router";
import SignInPage from "./components/SignInPage";

function App() {
  return (
    <div className="app">
      <Router>
        <SignInPage path="/" />
        <HomePage path="/home" />
      </Router>
    </div>
  );
}

export default App;
