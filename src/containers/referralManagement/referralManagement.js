import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import {
  ManagementSearchBox,
  ManagementList
} from '../../components/referralManagement';
import {
  getReferralManagementList,
  getReferralManagementSearch,
  emptyReferralSearch,
  extendReferral
} from '../../actions/action.referralManagement';

import './styles/style.scss';

class ReferralManagement extends Component {
  constructor(props) {
    super(props);
    this.handleExtendReferral = this.handleExtendReferral.bind(this);
  }

  componentDidMount() {
    this.getReferralManagementList();
  }

  getReferralManagementList() {
    this.props.getReferralManagementList({
      tin: '161458823'
    });
  }

  handleSearch = values => {
    if (
      this.props.referralManagement &&
      this.props.referralManagement.referralList &&
      !isEmpty(values)
    ) {
      this.props.getReferralManagementSearch(values);
    } else {
      this.props.emptyReferralSearch();
    }
  };

  handleExtendReferral(referralUuid) {
    this.props.extendReferral({ referralUuid });
  }

  render() {
    const referralList =
      this.props.referralManagement && this.props.referralManagement.searchText
        ? this.props.referralManagement.searchReferralList
        : this.props.referralManagement.referralList;
    return (
      <div className="container">
        <div className="row">
          <ManagementSearchBox
            onSubmit={this.handleSearch}
            initialList={this.handleSearch}
          />
          <ManagementList
            memberSearchResults={referralList}
            extendReferral={this.handleExtendReferral}
          />
        </div>
      </div>
    );
  }
}

ReferralManagement.propTypes = {
  referralManagement: PropTypes.object
};

const mapStateToProps = state => ({
  referralManagement: state.referralManagement
});

const mapDispatchToProps = dispatch => ({
  getReferralManagementList: carePointObj =>
    dispatch(getReferralManagementList(carePointObj)),
  getReferralManagementSearch: value =>
    dispatch(getReferralManagementSearch(value)),
  emptyReferralSearch: () => dispatch(emptyReferralSearch()),
  extendReferral: referralUuid => dispatch(extendReferral(referralUuid))
});

const ReferralManagementContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReferralManagement);

export default ReferralManagementContainer;
