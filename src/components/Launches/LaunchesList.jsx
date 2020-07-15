import React, { useEffect, useState } from "react";

import "./LaunchesList.css";
import LaunchesCard from "./LaunchesCard";
import Loader from "../Loader/Loader";
import SearchForm from "../SearchForm/SearchForm";

const LaunchesList = ({ getAllLaunches, allLaunches: { data, isLoading } }) => {
  const [launchYear, setLaunchYear] = useState("");

  useEffect(() => {
    getAllLaunches(launchYear);
  }, [getAllLaunches, launchYear]);

  return (
    <main className="launches-container">
      <SearchForm
        getQuery={userSelect => setLaunchYear(userSelect)}
        className="launches-search-form"
      />
      <aside className="launches-keys">
        <h1>Launches</h1>
        <p>
          <i className="square icon" style={{ color: "green" }} /> = Success
        </p>
        <p>
          <i className="square icon" style={{ color: "red" }} /> = Fail
        </p>
      </aside>
      <section className="launches-card">
        {isLoading ? <Loader /> : <LaunchesCard launches={data} />}
      </section>
    </main>
  );
};

export default LaunchesList;
