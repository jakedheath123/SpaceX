import React from "react";
import { toggleVisible } from "../actions";
import { connect } from "react-redux";

const ViewToggler = ({ isVisible, children, toggleVisible }) => {
  return (
    <>
      <button onClick={toggleVisible}>
        {isVisible ? "Hide Flickr Images" : "Display Flickr Images"}
      </button>
      {isVisible && children}
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
