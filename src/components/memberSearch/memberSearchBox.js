import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { renderTextField } from '../wrapper';

class MemberSearchBox extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  uppercaseTextvalue = value => value && value.toUpperCase().trim();

  onInputChange(event) {
    if (!event.target.value) {
      this.reset();
    }
  }

  reset() {
    this.props.reset();
    this.props.onChangeResultEmpty();
  }

  render() {
    const { handleSubmit, pristine, initialized } = this.props;
    return (
      <div className="input-text">
        <Form
          name="MemberSearchBoxForm"
          onSubmit={handleSubmit}
          className="input-custom"
        >
          <InputGroup>
            <InputGroupAddon addonType="prepend" onClick={handleSubmit}>
              <i className="fas fa-search" />
            </InputGroupAddon>
            <Field
              name="memberId"
              id="memberID"
              type="text"
              component={renderTextField}
              label="Enter Member ID#"
              onChange={this.onInputChange}
              normalize={this.uppercaseTextvalue}
              autocomplete="off"
              className="min-h-50"
            />
            {!pristine || initialized ? (
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

MemberSearchBox = reduxForm({
  form: 'MemberSearchBoxForm',
  enableReinitialize: true
})(MemberSearchBox);

export default MemberSearchBox;
