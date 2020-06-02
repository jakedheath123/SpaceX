import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllSports } from "../actions";
import SportsCard from "./SportsCard";

const HomePage = ({ getAllSports, allSports }) => {
  useEffect(() => {
    getAllSports();
  });

  const renderSportsList = () => {
    if (allSports.length === 0) return <h1>Loading...</h1>;
    return (
      <main>
        <ul>
          {allSports.map(sport => {
            return <SportsCard key={sport.idSport} sport={sport} />;
          })}
        </ul>
      </main>
    );
  };

  return <div>{renderSportsList()}</div>;
};

const mapStateToProps = state => {
  return {
    allSports: state.sports
  };
};

export default connect(mapStateToProps, {
  getAllSports
})(HomePage);
