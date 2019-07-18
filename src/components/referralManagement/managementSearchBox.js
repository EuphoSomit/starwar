import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { renderTextField } from '../wrapper';

import './styles/style.scss';

class ManagementSearchBox extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  onInputChange(event) {
    if (!event.target.value) {
      this.reset();
    }
  }

  reset() {
    this.props.reset();
    this.props.initialList({});
  }

  render() {
    const { handleSubmit, pristine } = this.props;
    return (
      <div className="input-text col-md-12">
        <Form
          name="ManagementSearchBoxForm"
          onSubmit={handleSubmit}
          className="input-custom"
        >
          <InputGroup>
            <InputGroupAddon addonType="prepend" onClick={handleSubmit}>
              <i className="fas fa-search" />
            </InputGroupAddon>
            <Field
              name="memberName"
              id="memberName"
              type="text"
              component={renderTextField}
              className="member-search"
              label="Search by member, provider, specialty, ID, etc."
              onChange={this.onInputChange}
              autocomplete="off"
            />
            {!pristine ? (
              <InputGroupAddon addonType="append">
                <Button
                  type="button"
                  className="btn btn-reset"
                  aria-label="cancel"
                  onClick={this.reset}
                >
                  <i className="far fa-times-circle" />
                </Button>
              </InputGroupAddon>
            ) : null}
          </InputGroup>
        </Form>
      </div>
    );
  }
}

ManagementSearchBox = reduxForm({
  form: 'ManagementSearchBoxForm'
})(ManagementSearchBox);

export default ManagementSearchBox;
