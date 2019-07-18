import React, { Component } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import logo from '../../assets/images/centivo-logo.png';

import './styles/style.scss';

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <>
        <header className="header-c1">
          <div className="container">
            <Navbar light expand="md" className="row">
              <Col md={3} lg={3}>
                <NavbarBrand href="/">
                  <img src={logo} alt="centivo" className="img-fluid" />
                </NavbarBrand>
              </Col>
              <Col md={9} lg={9}>
                <NavbarToggler onClick={this.toggle} />
                <div className="pull-right">
                  <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink
                          tag={RRNavLink}
                          exact
                          to="/member-search"
                          activeClassName="active"
                        >
                          Member Search
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          tag={RRNavLink}
                          exact
                          to="/referral-management"
                        >
                          Referral Management
                        </NavLink>
                      </NavItem>
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                          More
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem>Practice Reports</DropdownItem>
                          <DropdownItem>Plan Resources</DropdownItem>
                          <DropdownItem>Messages</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                      <NavItem>
                        <NavLink tag={RRNavLink} to="/" className="logout-wrap">
                          <i className="icon logout-icon" />
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </div>
              </Col>
            </Navbar>
          </div>
        </header>
      </>
    );
  }
}

export default HeaderBar;
