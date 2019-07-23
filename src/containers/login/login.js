import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import LoginForm from '../../components/login/loginForm';
import { getPeople, checkAuth } from '../../actions/action.people';

class Login extends Component {
  componentDidMount() {
    this.props.getPeople();
  }

  authCheck = value => {
    this.props.checkAuth(value);
  };

  render() {
    if (this.props.authenticated) {
      return <Redirect to={'/search'} />;
    }
    return (
      <Container component="main" maxWidth="xs">
        <LoginForm onSubmit={this.authCheck} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  peopleDetail: state.people.peopleDetail,
  authenticated: state.people.authenticated
});

const mapDispatchToProps = dispatch => ({
  getPeople: () => dispatch(getPeople()),
  checkAuth: value => dispatch(checkAuth(value))
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
export default LoginContainer;
