import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signOut } from '../../actions/action.people';

const AuthButton = props => {
  function signOut() {
    props.signOut();
    props.history.push('/');
  }

  return props.authenticated ? (
    <p>
      Welcome!{' '}
      <button
        onClick={() => {
          signOut();
        }}
      >
        Sign out
      </button>
    </p>
  ) : null;
};

const mapStateToProps = state => ({
  authenticated: state.people.authenticated
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

const AuthButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AuthButton));
export default AuthButtonContainer;
