import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import SearchBox from '../../components/search/searchBox';
import SearchBoxResult from '../../components/search/searchBoxResult';
import { getPlanetDetails, getPlanetList } from '../../actions/action.planets';

class Search extends Component {
  componentDidMount() {
    this.props.getPlanetList();
  }

  getPlanetDetails = name => {
    this.props.getPlanetDetails(name);
  };

  render() {
    return (
      <>
        <Container component="main" maxWidth="xs">
          <SearchBox
            planetList={this.props.planetList}
            planetDetails={this.getPlanetDetails}
          />
          {this.props.planetDetails && this.props.planetDetails.length > 0 ? (
            <SearchBoxResult planetDetails={this.props.planetDetails} />
          ) : null}
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  planetList: state.planets.planetList,
  planetDetails: state.planets.filterPlanet
});

const mapDispatchToProps = dispatch => ({
  getPlanetList: () => dispatch(getPlanetList()),
  getPlanetDetails: name => dispatch(getPlanetDetails(name))
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
export default SearchContainer;
