import React, { Component } from 'react';
import Grid from '../grid/grid';

class ManagementList extends Component {
  state = {
    expandedRowKeys: []
  };

  actions = {
    handleRowClick: (record, rowIndex, e) => {
      e.preventDefault();
      e.stopPropagation();

      this.setState(state => {
        const rowIndex = state.expandedRowKeys.indexOf(record.referralUuid);
        const expanded = rowIndex >= 0;
        let data = [];
        // Only display one detail view at one time
        if (expanded) {
          data = [];
        } else {
          data = [record.referralUuid];
        }

        return {
          expandedRowKeys: data
        };
      });
    },

    handleRowClassName: record => {
      const checked = this.state.expandedRowKeys.indexOf(record.referralUuid);
      const active = checked >= 0;
      if (active) {
        return 'table-row-hover table-row tr-active';
      } else {
        return 'table-row-hover table-row';
      }
    },

    handleExpandedRowRender: (record, key) => {
      let {
        referralId,
        referralReason,
        referredProviderList,
        referralUuid
      } = record;

      return (
        <div className="row">
          <div className="col-md-2 offset-1">
            {referralId ? (
              <>
                <div className="referralId mt-10">{'REFERRAL ID'}</div>
                <div className="referralName">{referralId}</div>
              </>
            ) : null}
            {referredProviderList.length > 0 ? (
              <>
                <div className="referredProviderNpi mt-10">
                  {'REFERRED PROVIDER NPI'}
                </div>
                <div className="referredProviderNpiName pb-25">
                  {referredProviderList.map(value => (
                    <li key={value.npi}>
                      {value.npi} {value.providerName}
                    </li>
                  ))}
                </div>
              </>
            ) : null}
          </div>
          <div className="col-md-5">
            {referralReason ? (
              <>
                <div className="referralReason mt-10">{'REFERRAL REASON'}</div>
                <div className="referralReasonName">{referralReason}</div>
              </>
            ) : null}
          </div>
          <div className="col-md-3 offset-1">
            <button
              className="button button-primary"
              onClick={e => {
                this.props.extendReferral(referralUuid);
              }}
            >
              Extend Referral
            </button>
          </div>
        </div>
      );
    },

    handleRenderActionColumn: (text, record) => {
      const expandedRowKeys = this.state.expandedRowKeys;
      const expanded = expandedRowKeys.indexOf(record.referralUuid) >= 0;
      let className = 'expandIcon';
      if (expanded) {
        className += ' rowExpanded';
      } else {
        className += ' rowCollapsed';
      }
      return <span className={className} />;
    },

    activeRowClass: (record, key) => {
      const rowIndex = this.state.expandedRowKeys.indexOf(record.referralUuid);
      const expanded = rowIndex >= 0;
      if (expanded) {
        return 'row-default';
      } else {
        return 'row-default row-active';
      }
    }
  };

  columns = [
    {
      title: '',
      key: 'referralUuid',
      render: this.actions.handleRenderActionColumn,
      width: 15
    },
    {
      title: 'STATUS',
      sortable: true,
      width: 85,
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
      title: 'START DATE',
      sortable: true,
      width: 100,
      key: 'startDate',
      render: (value, row, index) => {
        return row.startDate;
      }
    },
    {
      title: 'END DATE',
      sortable: true,
      width: 100,
      key: 'endDate',
      render: (value, row, index) => {
        return row.endDate;
      }
    },
    {
      title: 'MEMBER ID',
      sortable: true,
      key: 'memberId',
      render: (value, row, index) => {
        return row.memberId;
      }
    },
    {
      title: 'MEMBER NAME',
      sortable: true,
      width: 190,
      key: 'memberName',
      className: 'memberName',
      render: (value, row, index) => {
        return row.memberName;
      }
    },
    {
      title: 'REFERRING PROVIDER',
      sortable: true,
      width: 194,
      key: 'referringProvider',
      className: 'referringProvider',
      render: (value, row, index) => {
        return row.referringProvider;
      }
    },
    {
      title: 'REFERRAL SPECIALTY',
      sortable: true,
      width: 194,
      key: 'speciality',
      className: 'speciality',
      render: (value, row, index) => {
        return row.specialty;
      }
    },
    {
      title: 'REFERRED PROVIDER',
      sortable: true,
      width: 174,
      key: 'referredProviders',
      className: 'referredProvider',
      render: (value, row, index) => {
        return row.referredProviders.length > 0
          ? row.referredProviders.join()
          : null;
      }
    }
  ];

  render() {
    let { memberSearchResults } = this.props;
    const columns = this.columns;

    return (
      <div className="management-list col-md-12">
        {memberSearchResults && memberSearchResults.length > 0 ? (
          <Grid
            rowKey={record => record.referralUuid}
            columns={columns}
            hoverable={false}
            justified={false}
            sortable={true}
            data={memberSearchResults}
            useFixedHeader={true}
            onRowClick={this.actions.handleRowClick}
            rowClassName={this.actions.handleRowClassName}
            clientSidePagination={
              memberSearchResults.length > 10 ? true : false
            }
            defaultSortableKey="startDate"
            expandedRowRender={this.actions.handleExpandedRowRender}
            expandedRowKeys={this.state.expandedRowKeys}
          />
        ) : (
          <div className="no-data">There are no referrals to your practice</div>
        )}
      </div>
    );
  }
}

export default ManagementList;
