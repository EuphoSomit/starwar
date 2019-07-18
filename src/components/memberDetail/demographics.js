import React from 'react';

const Demographics = props => {
  const { demographics } = props;
  const { street, city, state, zip } = demographics.address;
  const address =
    (street ? street + ', ' : null) +
    (city ? city + ', ' : null) +
    (state ? state + ' ' : null) +
    (zip ? zip : null);

  return (
    <>
      <div className="panel-title text-teal">Demographics</div>
      <div className="panel panel-default">
        {demographics &&
        (address || demographics.phone || demographics.email) ? (
          <table className="tab-two-column">
            <tbody>
              <tr>
                <td>Address </td>
                <td>{demographics && address ? address : '-'}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>
                  {demographics && demographics.phone
                    ? demographics.phone
                        .split('')
                        .map((num, ind) => {
                          if (ind === 2) {
                            return num + '-';
                          }
                          if (ind === 5) {
                            return num + '-';
                          }
                          return num;
                        })
                        .join('')
                    : '-'}
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  {demographics && demographics.email
                    ? demographics.email
                    : '-'}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="para vertical-center horizontal-center">
            No demographics available
          </div>
        )}
      </div>
    </>
  );
};

export default Demographics;
