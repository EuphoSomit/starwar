import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Coverage = props => {
  let { coverage } = props;
  return (
    <>
      <div className="panel-title text-teal">Eligibility &amp; Coverage</div>
      <div className="panel panel-default eligiblity">
        {coverage &&
        (coverage.status ||
          coverage.effectiveDate ||
          coverage.benifitPlan ||
          coverage.rxBenifitPlan) ? (
          <table className="tab-two-column">
            <tbody>
              <tr>
                <td>Coverage Status </td>
                <td>
                  {coverage && coverage.status ? (
                    <span className="text-teal">{coverage.status}</span>
                  ) : (
                    '-'
                  )}
                </td>
              </tr>
              <tr>
                <td>Effective Date</td>
                <td>
                  {coverage && coverage.effectiveDate
                    ? moment(coverage.effectiveDate).format('L')
                    : '-'}
                </td>
              </tr>
              <tr>
                <td>Benefit Plan</td>
                <td>
                  <Link
                    to=""
                    className={
                      coverage && coverage.benifitPlan ? 'text-underline' : ''
                    }
                  >
                    {coverage && coverage.benifitPlan
                      ? coverage.benifitPlan
                      : '-'}
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Rx Benefit Plan </td>
                <td>
                  <Link
                    to=""
                    className={
                      coverage && coverage.rxBenifitPlan ? 'text-underline' : ''
                    }
                  >
                    {coverage && coverage.rxBenifitPlan
                      ? coverage.rxBenifitPlan
                      : '-'}
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="para vertical-center horizontal-center">
            No eligibility &amp; coverage available
          </div>
        )}
      </div>
    </>
  );
};

export default Coverage;
