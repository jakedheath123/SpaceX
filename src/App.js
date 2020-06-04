import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="app">
      <Router>
        <HomePage path="/" />
      </Router>
    </div>
  );
}

export default App;
