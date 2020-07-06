import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./LaunchesList.css";
import { getLaunches } from "../../actions";
import LaunchesCard from "./LaunchesCard";
import Loader from "../Loader/Loader";
import SearchForm from "../SearchForm/SearchForm";

const Launches = ({ getLaunches, launchesList: { isLoading, launches } }) => {
  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  if (isLoading) return <Loader />;

  return (
    <>
      <SearchForm />
      <main className="launches-container">
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
          {!launches.length ? (
            <p>No Launches</p>
          ) : (
            <ul>
              {launches.map(launch => {
                return (
                  <LaunchesCard key={launch.flight_number} launch={launch} />
                );
              })}
            </ul>
          )}
        </section>
      </main>
    </>
  );
};

const mapStateToProps = state => {
  return {
    launchesList: state.launches
  };
};

export default connect(mapStateToProps, {
  getLaunches
})(Launches);
