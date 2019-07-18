import React, { Component } from 'react';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';

class MemberSearchResult extends Component {
  constructor(props) {
    super(props);
    this.selectRow = this.selectRow.bind(this);
  }

  selectRow(item) {
    this.props.handleMemberClick(item);
  }

  render() {
    let items;
    let memberList = this.props.memberSearchResults.resultObject;
    if (isEmpty(memberList)) {
      items = (
        <div className="divTableCell text-center no-record">
          No Record Found!!
        </div>
      );
    } else {
      items = memberList.map((item, key) => {
        return (
          <div
            key={key}
            className="divTableRow flex flex--space-around"
            onClick={() => this.selectRow(item)}
          >
            <div className="divTableCell flex-grow">
              {startCase(toLower(item.patientName))}
            </div>
            <div className="divTableCell">{item.memberId}</div>
            <div className="divTableCell">{moment(item.dob).format('L')}</div>
          </div>
        );
      });
    }
    return (
      <div className="serach-table table-responsive">
        <div className="table-scroll">
          <div className="divTable">
            <div className="divTableBody">
              <div className="divTableHeading flex flex--space-around">
                <div className="divTableHead flex-grow">Patient Name </div>
                <div className="divTableHead">Member ID</div>
                <div className="divTableHead">DOB</div>
              </div>
              {items}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MemberSearchResult;
