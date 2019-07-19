import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import LoginForm from '../../components/login/loginForm';
import { getPeopleDetail } from '../../actions/action.peopleDetail';

class Login extends Component {
  componentDidMount() {
    this.props.getPeopleDetail();
  }

  authCheck = value => {
    console.log(value);
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <LoginForm onSubmit={this.authCheck} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  peopleDetail: state.peopleDetail
});

const mapDispatchToProps = dispatch => ({
  getPeopleDetail: () => dispatch(getPeopleDetail())
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
export default LoginContainer;
