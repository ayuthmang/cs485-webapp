import React, { Component } from 'react';
import {
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
  DropdownItem } from 'reactstrap';

export default class Header extends Component {
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
      <header className="header">
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Grab Kaow</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Food Zone
                </DropdownToggle>

                <DropdownMenu right>
                  <DropdownItem>Green Canteen </DropdownItem>
                  <DropdownItem>Tou Rung </DropdownItem>
                  <DropdownItem>Interzone </DropdownItem>
                  <DropdownItem>Tew Son </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem>
              <NavLink href="">Order</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="">Help</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    My Profile
                  </DropdownItem>
                  <DropdownItem>
                    My History
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Log out
                  </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>

            </Nav>
          </Collapse>

        </Navbar>
      </div>
      </header>
    );
  }
}