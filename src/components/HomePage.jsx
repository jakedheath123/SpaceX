import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllSports } from "../actions";

class HomePage extends Component {
  componentDidMount() {
    this.props.getAllSports();
  }

  renderSportsList = () => {
    const { allSports } = this.props;
    if (allSports.length === 0) return <h1>Loading...</h1>;
    return (
      <main>
        {allSports.map(sport => {
          return (
            <li>
              <ul>
                <h1>{sport.strSport}</h1>
                <img src={sport.strSportThumb} alt="Sport Logo" />
              </ul>
            </li>
          );
        })}
      </main>
    );
  };

  render() {
    console.log(this.props.allSports);
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
