import React from "react";
import { connect } from "react-redux";

import { toggleVisible } from "../../actions";

const ViewToggler = ({ isVisible, children, toggleVisible }) => {
  return (
    <section>
      <button onClick={toggleVisible} className="ui button">
        {isVisible ? "Hide Flickr Images" : "Display Flickr Images"}
      </button>
      {isVisible && children}
    </section>
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
