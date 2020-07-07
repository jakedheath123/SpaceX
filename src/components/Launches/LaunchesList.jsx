import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import "./LaunchesList.css";
import { getAllLaunches } from "../../actions";
import LaunchesCard from "./LaunchesCard";
import Loader from "../Loader/Loader";
import SearchForm from "../SearchForm/SearchForm";

const LaunchesList = ({ getAllLaunches, data, isLoading }) => {
  const [launchYear, setLaunchYear] = useState("");

  useEffect(() => {
    getAllLaunches(launchYear);
  }, [getAllLaunches, launchYear]);

  if (isLoading) return <Loader />;

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
        {!data.length ? (
          <p>No Launches</p>
        ) : (
          <ul>
            {data.map(launch => {
              return (
                <LaunchesCard key={launch.flight_number} launch={launch} />
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
};

const mapStateToProps = state => {
  const { data, isLoading } = state.allLaunches;
  return {
    data,
    isLoading
  };
};

export default connect(mapStateToProps, {
  getAllLaunches
})(LaunchesList);
