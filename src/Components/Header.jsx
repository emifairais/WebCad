import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';

class Header extends Component {
  render() {
    return(
      <div className="navbar">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#'>WebCad</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    )
  }
}

export default Header;
