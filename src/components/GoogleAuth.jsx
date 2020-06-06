import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../actions";
import { Link } from "@reach/router";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "718160006517-lutbsef9u70vmbu7btnist7hpqbaht7d.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      return;
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  render() {
    return (
      <Link to="/home">
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In
        </button>
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, {
  signIn
})(GoogleAuth);
