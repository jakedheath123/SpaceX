import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllSports } from "../actions";
import SportsCard from "./SportsCard";

class HomePage extends Component {
  componentDidMount() {
    this.props.getAllSports();
  }

  renderSportsList = () => {
    const { allSports } = this.props;
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

  render() {
    return <div>{this.renderSportsList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    allSports: state.sports
  };
};

export default connect(mapStateToProps, {
  getAllSports
})(HomePage);
