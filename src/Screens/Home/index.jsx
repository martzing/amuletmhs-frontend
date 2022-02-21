import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

import { getBoardList } from './../../Actions/Board'


const Home = () => {
  const initOpen = (window.innerWidth > 576) ? true : false
  const [isOpen, setIsOpen] = useState(initOpen)
  const [isCreateBoard, setIsCreateBoard] = useState(false)

  const dispatch = useDispatch()
  const { data: boardList } = useSelector(state => state.getBoardList)
  const { data: board } = useSelector(state => state.createBoard)
  useEffect(() => {
    dispatch(getBoardList())
  }, [board])

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
  const breadcrumbData = [
    {
      name: 'Board',
      link: 'http://localhost:3000',
      key: 1,
      isActive: false,
    }
  ]
  return (
    <div className="app">
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Container fluid className={classNames('content', { 'is-open': isOpen })}>
        <NavBar toggle={toggle} />
        <div className='inner-content'>
          <div className='breadcrumb-box'>
            <Breadcrumb data={breadcrumbData} />
            <Button className='offcanvas-btn' onClick={toggleCreateBoard}><FontAwesomeIcon icon={faPlus} /></Button>
          </div>
          <Table data={boardList} />
          <Pagination data={[]} />
        </div>
        <CreateBoard isOpen={isCreateBoard} toggle={toggleCreateBoard} />
      </Container>
    </div >
  )
}

export default Home
