import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSpecialtyList } from '../../actions/action.referralProvider';
import { TopBanner } from '../../components/header';
// import { ProviderSearchForm } from '../../components/referralProvider';

class ReferralProvider extends Component {
  constructor(props) {
    super(props);
    this.loadComponent = this.loadComponent.bind(this);
  }

  componentDidMount() {
    this.props.getSpecialtyList();
  }

  loadComponent() {
    this.props.pageModal('memberDetail');
  }

  handleSearch() {
    console.log('asdas');
  }

  render() {
    return (
      <>
        <TopBanner
          pageText="View member details"
          selectedMember={this.props.selectedMember}
          loadComponent={this.loadComponent}
        />
        <div className="container">
          Members should obtain referrals for specialty and ancillary care to
          receive the highest level of benefits.
          <br />
          Complete the fields below to see in-network providers. You'll be able
          to search or filter within the search results.
          {/* <ProviderSearchForm /> */}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  selectedMember: state.selectedMember,
  referralProvider: state.referralProvider
});

const mapDispatchToProps = dispatch => ({
  getSpecialtyList: () => dispatch(getSpecialtyList())
});

const ReferralProviderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReferralProvider);

export default withRouter(ReferralProviderContainer);
