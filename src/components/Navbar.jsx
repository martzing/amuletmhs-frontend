import React, { useState } from 'react'
import { Navbar, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const NavBar = ({ toggle: sideBarToggle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const dropDownToggle = () => {
    setIsOpen(!isOpen)
  }

  const username = 'username'

  return (
    <Navbar color="light" light className="navbar shadow-sm p-3 bg-white" expand="md">
      <button style={{ display: 'inline-block' }} type="button" class="navbar-toggler" onClick={sideBarToggle}>
        <span class="navbar-toggler-icon"></span>
      </button>
      <Dropdown isOpen={isOpen} toggle={dropDownToggle}>
        <DropdownToggle className='user-menu' caret>{`${username}`.toLocaleUpperCase()}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Change Password</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Log Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  )
}

export default NavBar
