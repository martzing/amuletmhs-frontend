import React, { useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { Container, Button, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Moment from 'moment'

import SideBar from './../../components/SideBar'
import NavBar from './../../components/Navbar'
import Table from './../../components/BoardItemTable'
import CreateBoardItem from './../../components/CreateBoardItem'
import UpdateBoardItem from './../../components/UpdateBoardItem'
import RewardDetail from '../../components/RewardDetail'

import { getBoard, requestUpdateBoardItem } from './../../Actions/BoardItem'


const BoardItem = () => {
  const initOpen = (window.innerWidth > 576) ? true : false
  const [isOpen, setIsOpen] = useState(initOpen)
  const [isCreateBoardItem, setIsCreateBoardItem] = useState(false)
  const [isUpdateBoardItem, setIsUpdateBoardItem] = useState(false)
  const [isOpenRewardDetail, setIsOpenRewardDetail] = useState(false)

  const queryParams = new URLSearchParams(window.location.search)
  const boardId = queryParams.get('board_id')
  const { data: board } = useSelector(state => state.getBoard)
  const { data: boardItem } = useSelector(state => state.createBoardItem)
  const { data: boardItemUpdate } = useSelector(state => state.updateBoardItem)

  const dispatch = useDispatch()
  useMemo(() => {
    if (boardId) {
      dispatch(getBoard(boardId))
    }
  }, [boardItem, boardItemUpdate])
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const toggleCreateBoardItem = () => {
    setIsCreateBoardItem(!isCreateBoardItem)
  }

  const openUpdateBoardItem = ({ id, customer_name, sell_ticket_amount, free_ticket_amount }) => {
    dispatch(requestUpdateBoardItem({
      boardItemListId: id,
      customerName: customer_name,
      sellTicketAmount: sell_ticket_amount,
      freeTicketAmount: free_ticket_amount,
    }))
    setIsUpdateBoardItem(!isUpdateBoardItem)
  }

  const toggleUpdateBoardItem = () => {
    setIsUpdateBoardItem(!isUpdateBoardItem)
  }
  const toggleOpenDetail = () => {
    setIsOpenRewardDetail(!isOpenRewardDetail)
  }
  return (
    <div className="app">
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Container fluid className={classNames('content', { 'is-open': isOpen })}>
        <NavBar toggle={toggle} />
        <div className='inner-content'>
          <Row xs="2">
            <Col><h6>Board: {(board) ? board.name : null}</h6></Col>
            <Col><h6>Total Ticket: {(board) ? board.total_ticket : null}</h6></Col>
            <Col><h6>Ticket Price: {(board) ? board.ticket_price : null}</h6></Col>
            <Col><h6>Create Date: {(board) ? Moment(board.created_at).format('YYYY-MM-DD') : null}</h6></Col>
          </Row>
          <div className='breadcrumb-box'>
            <Button color='primary' outline className='offcanvas-btn' onClick={toggleCreateBoardItem}><FontAwesomeIcon icon={faPlus} /></Button>
          </div>
          <Table toggleOpenDetail={toggleOpenDetail} toggle={openUpdateBoardItem} data={(board && board.BoardItemLists) ? board.BoardItemLists : []} />
        </div>
        <CreateBoardItem boardId={boardId} isOpen={isCreateBoardItem} toggle={toggleCreateBoardItem} />
        <UpdateBoardItem isOpen={isUpdateBoardItem} toggle={toggleUpdateBoardItem} />
        <RewardDetail isOpen={isOpenRewardDetail} toggle={toggleOpenDetail} />
      </Container>
    </div >
  )
}

export default BoardItem
