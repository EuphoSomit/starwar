import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@trendmicro/react-table';
import orderBy from 'lodash/orderBy';
import '@trendmicro/react-table/dist/react-table.css';
import ReactPaginate from 'react-paginate';
import './styles/grid.scss';

require('font-awesome/css/font-awesome.min.css');

class Grid extends Component {
  static propTypes = {
    sortOrder: PropTypes.oneOf(['asc', 'desc']),
    defaultSortableKey: PropTypes.string,
    clientSidePagination: PropTypes.bool
  };

  static defaultProps = {
    sortOrder: 'asc',
    defaultSortableKey: null,
    clientSidePagination: false
  };

  constructor(props) {
    super(props);
    this.state = {
      sortColumnKey: this.props.defaultSortableKey,
      sortOrder: this.props.defaultSortOrder,
      tableData: this.props.data,
      displayData: this.props.data.slice(0, 10),
      pageCount: Math.ceil(this.props.data.length / 10),
      pagination: {
        page: 1,
        pageLength: 10
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        tableData: this.props.data,
        displayData: this.props.data.slice(0, 10),
        pageCount: Math.ceil(
          this.props.data.length / this.state.pagination.pageLength
        )
      });
    }
  }

  toggleSortOrder = (column, clientSidePagination) => event => {
    let data = this.state.tableData;

    let sortColumnKey = column.key;
    let sortOrder = this.state.sortOrder === 'desc' ? 'asc' : 'desc';
    if (this.state.sortColumnKey !== sortColumnKey) {
      sortOrder = 'desc';
    }
    let sortableData = orderBy(data, [sortColumnKey], [sortOrder]);
    this.setState({ sortColumnKey, sortOrder, tableData: sortableData });

    if (clientSidePagination) {
      console.log(this.state);
      this.fetchRecords(
        this.state.pagination.page,
        this.state.pagination.pageLength,
        sortableData
      );
    }
  };

  sortableColumns = (columns, clientSidePagination) => {
    let columnArray = null;
    const { sortColumnKey, sortOrder } = this.state;
    columnArray = columns.map((column, index) => {
      if (column.sortable) {
        return {
          ...column,
          sortOrder: column.key === sortColumnKey ? sortOrder : '',
          onClick: this.toggleSortOrder(column, clientSidePagination)
        };
      } else {
        return column;
      }
    });
    return columnArray;
  };

  fetchRecords = (page, pageLength, sortableData) => {
    const displayDataLastIndex = page * pageLength,
      diplayDataStartIndex = displayDataLastIndex - pageLength,
      displayData = sortableData
        ? sortableData.slice(diplayDataStartIndex, displayDataLastIndex)
        : this.state.tableData.slice(
            diplayDataStartIndex,
            displayDataLastIndex
          );
    this.setState({
      displayData: displayData,
      pageCount: Math.ceil(this.state.tableData.length / pageLength),
      pagination: {
        page: page,
        pageLength: pageLength
      }
    });
  };

  handlePageClick = data => {
    let selected = data.selected + 1;
    this.fetchRecords(selected, this.state.pagination.pageLength);
  };

  render() {
    const columnData = this.sortableColumns(
      this.props.columns,
      this.props.clientSidePagination
    );

    return (
      <>
        {this.props.clientSidePagination ? (
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick.bind(this)}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        ) : null}
        <Table
          columns={columnData}
          data={
            this.props.clientSidePagination
              ? this.state.displayData
              : this.state.tableData
          }
          bordered={true}
          hoverable={this.props.hoverable}
          justified={this.props.justified}
          rowKey={this.props.rowKey}
          useFixedHeader={this.props.useFixedHeader}
          maxHeight={this.props.maxHeight ? this.props.maxHeight : null}
          rowClassName={
            this.props.rowClassName
              ? this.props.rowClassName
              : () => 'table-row'
          }
          onRowClick={this.props.onRowClick ? this.props.onRowClick : () => {}}
          emptyText={() => 'No data found'}
          expandedRowRender={
            this.props.expandedRowRender
              ? this.props.expandedRowRender
              : () => {}
          }
          expandedRowKeys={
            this.props.expandedRowKeys ? this.props.expandedRowKeys : []
          }
        />
      </>
    );
  }
}
export default Grid;
