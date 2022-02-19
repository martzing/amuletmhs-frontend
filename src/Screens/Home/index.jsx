import React, { useState } from 'react'
import classNames from 'classnames'
import { Container, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import SideBar from '../../Components/SideBar'
import NavBar from '../../Components/Navbar'
import Table from '../../Components/Table'
import Pagination from '../../Components/Pagination'
import Breadcrumb from '../../Components/Breadcrumb'
import CreateBoard from '../../Components/CreateBoard'


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
