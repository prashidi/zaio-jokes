import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Home extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool
  };
  render() {
    if(this.props.isAuthenticated) {
      return <Redirect to ="/joke" />
    }
    return (
      <div className="home">
        <h1>You need to login to Crack Jokes!</h1>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Home);
