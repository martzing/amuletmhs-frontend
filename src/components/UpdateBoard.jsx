import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'

import { updateBoard } from './../Actions/Board'

const UpdateBoard = ({ isOpen, toggle }) => {
  const { data } = useSelector(state => state.requestUpdateBoard)
  const [boardId, setBoardId] = useState(data.boardId)
  const [name, setName] = useState(data.name)
  const [cost, setCost] = useState(data.cost)
  const [ticketPrice, setTicketPrice] = useState(data.ticketPrice)
  const [totalTicket, settTotalTicket] = useState(data.totalTicket)

  const dispatch = useDispatch()

  useEffect(() => {
    setBoardId(data.boardId)
    setName(data.name)
    setCost(data.cost)
    setTicketPrice(data.ticketPrice)
    settTotalTicket(data.totalTicket)
  }, [data])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateBoard({
      boardId,
      name,
      cost,
      ticketPrice,
      totalTicket,
    }))
    setBoardId('')
    setName('')
    setCost('')
    setTicketPrice('')
    settTotalTicket('')
    toggle()

  }
  const handleCancel = () => {
    setBoardId('')
    setName('')
    setCost('')
    setTicketPrice('')
    settTotalTicket('')
    toggle()
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleCostChange = (e) => {
    setCost(e.target.value)
  }
  const handleTicketPriceChange = (e) => {
    setTicketPrice(e.target.value)
  }
  const handleTotalTicketChange = (e) => {
    settTotalTicket(e.target.value)
  }
  return (
    <div>
      <Offcanvas direction='end' isOpen={isOpen} toggle={toggle}>
        <OffcanvasHeader>Create Board</OffcanvasHeader>
        <OffcanvasBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="name"
                value={name}
                onChange={handleNameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="cost">Cost</Label>
              <Input
                id="cost"
                name="cost"
                placeholder="cost"
                type='number'
                value={cost}
                onChange={handleCostChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="ticket_price">Ticket Price</Label>
              <Input
                id="ticket_price"
                name="ticket_price"
                placeholder="ticket price"
                type='number'
                value={ticketPrice}
                onChange={handleTicketPriceChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="total_ticket">Total Ticket</Label>
              <Input
                id="total_ticket"
                name="total_ticket"
                placeholder="total ticket"
                type='number'
                value={totalTicket}
                onChange={handleTotalTicketChange}
              />
            </FormGroup>
            <div className='offcanvas-btn-group'>
              <Button outline onClick={handleCancel} style={{ marginRight: '5px' }}>Cancel</Button>
              <Button color="primary" outline type='sumit'>Save</Button>
            </div>
          </Form>
        </OffcanvasBody>
      </Offcanvas>
    </div >
  )
}

export default UpdateBoard
