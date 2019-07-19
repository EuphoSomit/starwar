import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles/login';
import { renderTextField } from '../wrapper';

const LoginForm = props => {
  const classes = useStyles();
  const { error, handleSubmit, pristine, submitting } = props;
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Field
          name="username"
          type="text"
          component={renderTextField}
          id="username"
          label="User Name"
          autoComplete="username"
          autoFocus
        />
        <Field
          component={renderTextField}
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        {error && <strong>{error}</strong>}
        <div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={pristine | submitting}
          >
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'LoginForm' // a unique identifier for this form
})(LoginForm);
