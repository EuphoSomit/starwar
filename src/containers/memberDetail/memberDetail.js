import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { TopBanner } from '../../components/header';
import { getMemberDetail } from '../../actions/action.memberDetail';

import './styles/style.scss';

import {
  Demographics,
  Coverage,
  PrimaryCare,
  Referrals
} from '../../components/memberDetail';

class MemberDetail extends Component {
  constructor(props) {
    super(props);
    this.loadComponent = this.loadComponent.bind(this);
  }

  componentDidMount() {
    this.props.getMemberDetail({
      memberUuid: this.props.selectedMember.memberUuid //'bdd4e995-4f77-4ed7-9c98-8b025313aeab'
    });
  }

  loadComponent() {
    this.props.pageModal('referralProvider');
  }

  render() {
    let referrals, pcp, demographics, coverage;

    if (!isEmpty(this.props.memberDetail) && this.props.memberDetail.data) {
      let { resultObject } = this.props.memberDetail.data;
      referrals = resultObject.referrals;
      pcp = resultObject.pcp;
      demographics = resultObject.demographics;
      coverage = resultObject.coverage;
    }

    return (
      <>
        <TopBanner
          pageText="Referral"
          selectedMember={this.props.selectedMember}
          loadComponent={this.loadComponent}
        />
        <div className="container">
          <Row>
            <Col sm={6} xs={12} md={4}>
              {demographics && <Demographics demographics={demographics} />}
            </Col>
            <Col sm={6} xs={12} md={4}>
              {coverage && <Coverage coverage={coverage} />}
            </Col>
            <Col sm={6} xs={12} md={4}>
              {pcp && <PrimaryCare pcp={pcp} />}
            </Col>
          </Row>
          <div className="row margin-top-20">
            {referrals && <Referrals referrals={referrals} />}
          </div>
        </div>
      </>
    );
  }
}

MemberDetail.propTypes = {
  memberDetail: PropTypes.object
};

const mapStateToProps = state => ({
  memberDetail: state.memberDetail,
  selectedMember: state.selectedMember
});

const mapDispatchToProps = dispatch => ({
  getMemberDetail: memberUuidObj => dispatch(getMemberDetail(memberUuidObj))
});

const MemberDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberDetail);
export default withRouter(MemberDetailContainer);
