import React, { useState } from 'react'
import classNames from 'classnames'
import { Container } from 'reactstrap'

import SideBar from '../../Components/SideBar'
import NavBar from '../../Components/Navbar'
import Table from '../../Components/Table'
import Pagination from '../../Components/Pagination'
import Breadcrumb from '../../Components/Breadcrumb'


const Home = () => {
  const initOpen = (window.innerWidth > 576) ? true : false
  const [isOpen, setIsOpen] = useState(initOpen)

  const toggle = () => {
    setIsOpen(!isOpen)
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
          <Breadcrumb data={[]} />
          <Table data={amount} />
          <Pagination data={[]} />
        </div>
      </Container>
    </div >
  )
}

export default Home
