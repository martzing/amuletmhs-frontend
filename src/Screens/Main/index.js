import React, { useState } from 'react';

import SideBar from './../../components/sidebar/SideBar'
import Content from './../../components/content/Content'

const Main = () => {
  const initOpen = (window.innerWidth > 576) ? true : false
  const [isOpen, setIsOpen] = useState(initOpen)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="App wrapper">
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Content toggle={toggle} isOpen={isOpen} />
    </div >
  )
 
}

export default Main
