import React from 'react';
import './style/style.scss';
import Grid from './../grid/grid';

export default class Referrals extends React.Component {
  render() {
    const columns = [
      {
        title: 'status',
        sortable: true,
        key: 'status',
        render: (value, row, index) => {
          return (
            <div className={row.status && row.status.toLowerCase()}>
              {row.status}
            </div>
          );
        }
      },
      {
        sortable: true,
        enableServerSideSorting: false,
        title: 'Start Date',
        key: 'startDate',
        render: (value, row, index) => {
          return row.startDate;
        }
      },
      {
        title: 'End Date',
        sortable: true,
        key: 'endDate',
        render: (value, row, index) => {
          return row.endDate;
        }
      },
      {
        title: 'Referral Id',
        sortable: true,
        key: 'referralId',
        render: (value, row, index) => {
          return row.referralId;
        }
      },
      {
        title: 'Referring Provider (PCP)',
        sortable: true,
        key: 'referringProvider',
        render: (value, row, index) => {
          return row.referringProvider;
        }
      },
      {
        title: 'Referral Specialty',
        sortable: true,
        key: 'specialty',
        render: (value, row, index) => {
          return row.specialty;
        }
      },
      {
        title: 'Referred Provider',
        sortable: true,
        key: 'referredProvider',
        render: (value, row, index) => {
          return row.referredProvider;
        }
      }
    ];

    let { referrals } = this.props;

    return (
      <div className="col-md-12">
        <div className="panel-title text-teal">Referrals</div>
        {referrals && referrals.length > 4 ? (
          <div className="totalReferral">Results {referrals.length}</div>
        ) : null}
        <Grid
          sortOrder={'asc'}
          rowKey={record => record.referralId}
          columns={columns}
          hoverable={false}
          justified={false}
          sortable={true}
          data={referrals}
          useFixedHeader={false}
        />
      </div>
    );
  }
}
