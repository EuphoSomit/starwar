import React from 'react';
import { ButtonGroup } from 'reactstrap';

const renderButtonGroup = ({ input, ...rest }) => (
  <ButtonGroup {...input} {...rest} />
);

export default renderButtonGroup;
