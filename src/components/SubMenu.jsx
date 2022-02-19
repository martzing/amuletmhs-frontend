import React, { useState } from 'react'
import { Collapse, NavItem, NavLink } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'

const SubMenu = ({ icon, title, items }) => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }
  return (
    <div>
      <NavItem onClick={toggleNavbar} className={classNames({ 'menu-open': !collapsed })}>
        <NavLink className="dropdown-toggle" href='#'><FontAwesomeIcon icon={icon} style={{ marginRight: 5 }} />{title}</NavLink>
      </NavItem>
      <Collapse isOpen={!collapsed} navbar className={classNames('items-menu', { 'mb-1': !collapsed })}>
        {items.map(item => (
          <NavItem key={item.key} className="pl-4">
            <NavLink href={item.link}>{item.name}</NavLink>
          </NavItem>
        ))}
      </Collapse>
    </div>
  )
}

export default SubMenu
