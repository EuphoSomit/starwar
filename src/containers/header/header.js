import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { HeaderComponent } from '../../components/header';

class Header extends Component {
  render() {
    const header = <HeaderComponent />;
    return header;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
export default withRouter(HeaderContainer);
