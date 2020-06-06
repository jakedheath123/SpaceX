import React, { useEffect } from "react";
import { toggleVisible, setFalse } from "../actions";
import { connect } from "react-redux";

const ViewToggler = ({ isVisible, children, toggleVisible, setFalse, id }) => {
  useEffect(() => {
    setFalse();
  }, [id]);

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
  toggleVisible,
  setFalse
})(ViewToggler);
