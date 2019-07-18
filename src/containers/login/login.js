import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderTextField } from '../../components/wrapper';
import {
  Form,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  Button
} from 'reactstrap';
import { required } from '../../utils/validate';
// import Logo from '../../assets/images/logo.png';

// import './styles/login.scss';

const Login = props => {
  const { handleSubmit, submitting } = props;
  return (
    <div className="login-container">
      <div className="logo">
        <img src={''} alt="" className="logo-navbar" />
      </div>
      <Form
        name="LoginForm"
        onSubmit={handleSubmit(() => {
          console.log('testtt');
        })}
        className="input-custom"
      >
        <FormGroup>
          <Label for="username">Username</Label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <span className="input-group-text">
                <i className="fa fa-envelope-o">&nbsp;</i>
              </span>
            </InputGroupAddon>
            <Field
              name="username"
              id="username"
              type="text"
              component={renderTextField}
              label="Username"
              validate={required}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <span className="input-group-text">
                <i className="fa fa-lock">&nbsp;</i>
              </span>
            </InputGroupAddon>
            <Field
              name="password"
              id="password"
              type="password"
              component={renderTextField}
              label="Password"
              validate={required}
            />
          </InputGroup>
        </FormGroup>
        <div className="button-row d-flex justify-content-between">
          <Button
            type="submit"
            color="info"
            className="custom-round-btn"
            disabled={submitting}
          >
            <i className="fa fa-unlock-alt" aria-hidden="true" /> Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default reduxForm({
  form: 'LoginForm'
})(Login);
