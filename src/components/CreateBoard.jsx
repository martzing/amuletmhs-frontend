import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
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

import { createBoard } from './../Actions/Board'

const CreateBoard = ({ isOpen, toggle }) => {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')
  const [ticketPrice, setTicketPrice] = useState('')
  const [totalTicket, settTotalTicket] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createBoard({
      name,
      cost,
      ticketPrice,
      totalTicket,
    }))
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
              <Label for="exampleEmail">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="name"
                value={name}
                onChange={handleNameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Cost</Label>
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
              <Label for="examplePassword">Ticket Price</Label>
              <Input
                id="ticket_price"
                name="ticket_price"
                placeholder="ticket price"
                type='number'
                value={ticketPrice}
                onChange={handleTicketPriceChange}
              />
              <FormGroup>
                <Label for="examplePassword">Total Ticket</Label>
                <Input
                  id="total_ticket"
                  name="total_ticket"
                  placeholder="total ticket"
                  type='number'
                  value={totalTicket}
                  onChange={handleTotalTicketChange}
                />
              </FormGroup>
            </FormGroup>
            <Button type='sumit'>Create</Button>
          </Form>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export default CreateBoard
