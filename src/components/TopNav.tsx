import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const TopNav = () => {
  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
      </Navbar>
    </div>
  )
}

export default TopNav
