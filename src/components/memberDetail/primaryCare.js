import React from 'react';

const PrimaryCare = props => {
  const { pcp } = props;

  let { street, city, state, zip } = pcp.address;

  const address =
    (street ? street + ', ' : null) +
    (city ? city + ', ' : null) +
    (state ? state + ' ' : null) +
    (zip ? zip : null);
  return (
    <>
      <div className="panel-title text-teal">Primary Care Team</div>
      <div className="panel panel-default">
        {pcp &&
        (pcp.providerName || pcp.practiceName || address || pcp.phone) ? (
          <table className="tab-two-column">
            <tbody>
              <tr>
                <td>PCP</td>
                <td>{pcp && pcp.providerName ? pcp.providerName : '-'}</td>
              </tr>
              <tr>
                <td>Practice</td>
                <td>{pcp && pcp.practiceName ? pcp.practiceName : '-'}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{pcp && address ? address : '-'}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{pcp && pcp.phone ? pcp.phone : '-'}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="para font-md vertical-center horizontal-center">
            No PCP available{' '}
          </div>
        )}
      </div>
    </>
  );
};

export default PrimaryCare;
