import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllSports } from "../actions";

class HomePage extends Component {
  componentDidMount() {
    this.props.getAllSports();
  }

  render() {
    console.log(this.props);
    return <div>Home Page</div>;
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
