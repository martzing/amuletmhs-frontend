import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy
} from '@fortawesome/free-solid-svg-icons'
import SubMenu from './SubMenu'
import { NavItem, NavLink, Nav } from 'reactstrap'
import classNames from 'classnames'

const SideBar = ({ toggle, isOpen }) => {
    return (
      <div className={classNames('sidebar', { 'is-open': isOpen })}>
        <div className='sidebar-header'>
          <a color='info' onClick={toggle} style={{ color: '#fff' }}>
            &times;
          </a>
          <h3>AMULETMHS</h3>
        </div>
        <Nav vertical>
          <SubMenu
            title='Home'
            icon={faHome}
            items={[
              { name: 'Home 1', link: 'http://localhost:3000' },
              { name: 'Home 2', link: '#' },
              { name: 'Home 3', link: '#' },
              { name: 'Home 4', link: '#' },
            ]}
          />
          <NavItem>
            <NavLink href='#'><FontAwesomeIcon icon={faBriefcase} style={{marginRight: 5}} />About</NavLink>
          </NavItem>
          <SubMenu
            title='Pages'
            icon={faCopy}
            items={['Page 1', 'Page 2', 'Page 3']}
          />
          <NavItem>
            <NavLink href='#'>
              <FontAwesomeIcon icon={faImage} style={{marginRight: 5}} />
              Portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>
              <FontAwesomeIcon icon={faQuestion} style={{marginRight: 5}} />
              FAQ
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#'>
              <FontAwesomeIcon icon={faPaperPlane} style={{marginRight: 5}} />
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    )
}

export default SideBar
