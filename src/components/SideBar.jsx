import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import SubMenu from './SubMenu'
import { NavItem, NavLink, Nav } from 'reactstrap'
import classNames from 'classnames'

const SideBar = ({ toggle, isOpen }) => {
  return (
    <div className={classNames('sidebar', { 'is-open': isOpen })}>
      <div className='sidebar-header'>
        <h3>AMULETMHS</h3>
        <FontAwesomeIcon className='close-side-bar-btn' onClick={toggle} icon={faXmark} />
      </div>
      <Nav vertical>
        <NavItem>
          <NavLink href='http://localhost:3000'><FontAwesomeIcon icon={faHome} style={{ marginRight: 5 }} />Board</NavLink>
        </NavItem>
        <SubMenu
          title='Pages'
          icon={faCopy}
          items={[
            { key: 1, name: 'Page 1', link: 'http://localhost:3000' },
            { key: 2, name: 'Page 2', link: 'http://localhost:3000' },
            { key: 3, name: 'Page 3', link: 'http://localhost:3000' },
            { key: 4, name: 'Page 4', link: 'http://localhost:3000' },
          ]}
        />
        <NavItem>
          <NavLink href='http://localhost:3000'>
            <FontAwesomeIcon icon={faImage} style={{ marginRight: 5 }} />
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='http://localhost:3000'>
            <FontAwesomeIcon icon={faQuestion} style={{ marginRight: 5 }} />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='http://localhost:3000'>
            <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: 5 }} />
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default SideBar
