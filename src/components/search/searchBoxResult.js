import React from 'react';

const SearchBoxResult = React.memo(function SearchBoxResult(props) {
  return <div>{props.planetDetails[0].name}</div>;
});

export default SearchBoxResult;
