import React from 'react';
import TextField from '@material-ui/core/TextField';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    errorText={touched && error}
    variant="outlined"
    margin="normal"
    required
    fullWidth
    {...input}
    {...custom}
  />
);

export default renderTextField;
