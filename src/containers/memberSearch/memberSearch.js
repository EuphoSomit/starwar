import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';
import isEmpty from 'lodash/isEmpty';
import { Container, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {
  MemberSearchBox,
  MemberSearchResult
} from '../../components/memberSearch';
import {
  getMemberSearch,
  memberSearchEmpty
} from '../../actions/action.memberSearch';
import { selectedMemberDetail } from '../../actions/action.selectedMember';
import MemberDetailContainer from '../memberDetail';
import ReferralProviderContainer from '../referralProvider';
import logo from '../../assets/images/centivo-logo.png';
import './styles/styles.scss';

class MemberSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      selectedMemberValue: null,
      pageModal: null,
      modal: false
    };
    this.pageModal = this.pageModal.bind(this);
    this.onChangeResultEmpty = this.onChangeResultEmpty.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMemberClick = this.handleMemberClick.bind(this);
  }

  pageModal(page) {
    this.setState({
      pageModal: page,
      modal: true
    });
  }

  onChangeResultEmpty() {
    this.props.memberSearchEmpty();
    this.setState({
      selectedMemberValue: null,
      disabled: true
    });
  }

  handleSearch(values) {
    if (!isEmpty(values)) this.props.getMemberSearch(values);
  }

  handleMemberClick(memberUuidObj) {
    this.props.selectedMemberDetail(memberUuidObj);
    this.props.memberSearchEmpty();
    const memberDetailString =
      startCase(toLower(memberUuidObj.patientName)) +
      '  ' +
      memberUuidObj.memberId +
      '  ' +
      moment(memberUuidObj.dob).format('L');
    this.setState({
      disabled: false,
      selectedMemberValue: { memberId: memberDetailString }
    });
  }

  render() {
    let pageModal;
    const closeBtn = (
      <Link className="close" to="/">
        Close <span className="font-lg">&times;</span>
      </Link>
    );
    if (this.state.pageModal === 'memberDetail') {
      pageModal = <MemberDetailContainer pageModal={this.pageModal} />;
    } else if (this.state.pageModal === 'referralProvider') {
      pageModal = <ReferralProviderContainer pageModal={this.pageModal} />;
    } else {
      pageModal = null;
    }
    return (
      <section className="section-c1">
        <div className="container">
          <div className="row no-gutters text-center">
            <div className="col-lg-12  col-md-12 member-details">
              <h1 className="text-center font-xl header-title">
                Initiate a referral or check member details
              </h1>
              <p className="para font-md text-center para-subtitle">
                The patient's Member ID can be found on their ID Card
              </p>
              <div className="member-form-wrap">
                <MemberSearchBox
                  onSubmit={this.handleSearch}
                  initialValues={this.state.selectedMemberValue}
                  onChangeResultEmpty={this.onChangeResultEmpty}
                />
                {!isEmpty(this.props.memberSearch) ? (
                  <MemberSearchResult
                    memberSearchResults={this.props.memberSearch}
                    handleMemberClick={this.handleMemberClick}
                  />
                ) : null}
              </div>
              <div className="flex-container">
                <Button
                  className={
                    this.state.disabled ? 'graybtn-border' : 'pinkbtn-border'
                  }
                  disabled={this.state.disabled}
                  onClick={() => this.pageModal('memberDetail')}
                >
                  View member details
                </Button>{' '}
                <Button
                  className={
                    this.state.disabled ? 'graybtn-solid' : 'pinkbtn-solid'
                  }
                  disabled={this.state.disabled}
                  onClick={() => this.pageModal('referralProvider')}
                >
                  Initiate Referral
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.modal}
          fade={false}
          className="modal-full"
          backdrop={false}
          wrapClassName="member-top-header"
        >
          <Container>
            <ModalHeader close={closeBtn}>
              <img src={logo} alt="centivo" className="img-fluid" />
            </ModalHeader>
          </Container>
          <ModalBody>{pageModal}</ModalBody>
        </Modal>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  memberSearch: state.memberSearch,
  selectedMember: state.selectedMember
});

const mapDispatchToProps = dispatch => ({
  getMemberSearch: memberIdObj => dispatch(getMemberSearch(memberIdObj)),
  memberSearchEmpty: () => dispatch(memberSearchEmpty()),
  selectedMemberDetail: memberUuidObj =>
    dispatch(selectedMemberDetail(memberUuidObj))
});

const MemberSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberSearch);

export default withRouter(MemberSearchContainer);
