import React, { useState } from 'react'
import classNames from 'classnames'
import { Container, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import SideBar from './../../components/SideBar'
import NavBar from './../../components/Navbar'
import Table from './../../components/Table'
import Pagination from './../../components/Pagination'
import Breadcrumb from './../../components/Breadcrumb'
import CreateBoard from './../../components/CreateBoard'


const Home = () => {
  const initOpen = (window.innerWidth > 576) ? true : false
  const [isOpen, setIsOpen] = useState(initOpen)
  const [isCreateBoard, setIsCreateBoard] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const toggleCreateBoard = () => {
    setIsCreateBoard(!isCreateBoard)
  }
  const amount = []
  for (let i = 1; i <= 12; i++) {
    amount.push(i)
  }

  return (
    <div className="app">
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Container fluid className={classNames('content', { 'is-open': isOpen })}>
        <NavBar toggle={toggle} />
        <div className='inner-content'>
          <div className='breadcrumb-box'>
            <Breadcrumb data={[]} />
            <Button className='offcanvas-btn' onClick={toggleCreateBoard}><FontAwesomeIcon icon={faPlus} /></Button>
          </div>
          <Table data={amount} />
          <Pagination data={[]} />
        </div>
        <CreateBoard isOpen={isCreateBoard} toggle={toggleCreateBoard} />
      </Container>
    </div >
  )
}

export default Home
