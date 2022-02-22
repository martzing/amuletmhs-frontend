import React, { useState } from 'react'
import { Navbar, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({ toggle: sideBarToggle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const dropDownToggle = () => {
    setIsOpen(!isOpen)
  }

  const username = 'username'

  return (
    <Navbar color="light" light className="navbar shadow-sm p-3 bg-white" expand="md">
      <Button color='primary' outline onClick={sideBarToggle}><FontAwesomeIcon icon={faAlignJustify} /></Button>
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
