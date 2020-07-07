import React from "react";
import { connect } from "react-redux";

import { toggleVisible } from "../../actions";
import "./ViewToggler.css";

const ViewToggler = ({ isVisible, children, toggleVisible }) => {
  return (
    <div className="view-toggler-container">
      <button onClick={toggleVisible} className="ui button">
        {isVisible ? "Hide Flickr Images" : "Display Flickr Images"}
      </button>
      <br></br>
      {isVisible && children}
    </div>
  );
};

const mapStateToProps = state => {
  const { isVisible } = state.viewToggler;
  return {
    isVisible
  };
};

export default connect(mapStateToProps, {
  toggleVisible
})(ViewToggler);
