import React from 'react';
import { Navbar, Nav, NavItem, DropdownButton, MenuItem } from 'react-bootstrap';

export class Navigation extends React.Component {

  constructor() {
    super();
  };

  render() {
    return <Navbar brand={<a href='/#'>eon</a>}>
        <Nav>
          <NavItem href='/#about'>About</NavItem>
        </Nav>
      </Navbar>;
  };
}
