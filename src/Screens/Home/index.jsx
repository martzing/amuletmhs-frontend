import React, { useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { Container, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import SideBar from './../../components/SideBar'
import NavBar from './../../components/Navbar'
import Table from './../../components/BoardTable'
import Pagination from './../../components/Pagination'
import CreateBoard from './../../components/CreateBoard'
import UpdateBoard from './../../components/UpdateBoard'

import { getBoardList, requestUpdateBoard } from './../../Actions/Board'


const Home = () => {
  const initOpen = (window.innerWidth > 576) ? true : false
  const [isOpen, setIsOpen] = useState(initOpen)
  const [isCreateBoard, setIsCreateBoard] = useState(false)
  const [isUpdateBoard, setIsUpdateBoard] = useState(false)

  const dispatch = useDispatch()
  const { data: boardList } = useSelector(state => state.getBoardList)
  const { data: board } = useSelector(state => state.createBoard)
  const { data: boardUpdate } = useSelector(state => state.updateBoard)

  useMemo(() => {
    dispatch(getBoardList())
  }, [board, boardUpdate])

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const toggleCreateBoard = () => {
    setIsCreateBoard(!isCreateBoard)
  }
  const openUpdateBoard = ({ id, name, cost, ticket_price, total_ticket }) => {
    dispatch(requestUpdateBoard({
      boardId: id,
      name,
      cost,
      ticketPrice: ticket_price,
      totalTicket: total_ticket,
    }))
    setIsUpdateBoard(!isUpdateBoard)
  }

  const toggleUpdateBoard = () => {
    setIsUpdateBoard(!isUpdateBoard)
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
            <Button color='primary' outline className='offcanvas-btn' onClick={toggleCreateBoard}><FontAwesomeIcon icon={faPlus} /></Button>
          </div>
          <Table toggle={openUpdateBoard} data={boardList} />
          <Pagination data={[]} />
        </div>
        <CreateBoard isOpen={isCreateBoard} toggle={toggleCreateBoard} />
        <UpdateBoard isOpen={isUpdateBoard} toggle={toggleUpdateBoard} />
      </Container>
    </div >
  )
}

export default Home
