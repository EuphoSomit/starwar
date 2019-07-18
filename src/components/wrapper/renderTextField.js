import React from 'react';
import { Input, FormFeedback } from 'reactstrap';

const renderTextField = ({
  input,
  label,
  type,
  className,
  meta: { touched, error, warning }
}) => {
  const validError = (touched && error) || warning ? true : false;
  return (
    <>
      <Input
        type={type}
        placeholder={label}
        invalid={validError}
        className={className}
        {...input}
      />
      <FormFeedback valid={!validError}>
        {<span>{error}</span> || <span>{warning}</span>}
      </FormFeedback>
    </>
  );
};

export default renderTextField;
