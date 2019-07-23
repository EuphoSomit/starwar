import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

export default function requireAuth(WrappedComponent) {
  class Authentication extends Component {
    render() {
      if (!this.props.authenticated) {
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: this.props.location }
            }}
          />
        );
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.people.authenticated };
  }

  return connect(mapStateToProps)(withRouter(Authentication));
}
