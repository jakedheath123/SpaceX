import React from "react";
import { connect } from "react-redux";

import { toggleVisible } from "../../actions";

const ViewToggler = ({ isVisible, children, toggleVisible }) => {
  return (
    <>
      <button onClick={toggleVisible} className="ui button">
        {isVisible ? "Hide Flickr Images" : "Display Flickr Images"}
      </button>
      {isVisible && children}
      <br></br>
      <br></br>
      <hr></hr>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isVisible: state.showOrHide.isVisible
  };
};

export default connect(mapStateToProps, {
  toggleVisible
})(ViewToggler);
