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

import { updateBoardItem } from './../Actions/BoardItem'

const UpdateBoardItem = ({ isOpen, toggle }) => {
  const { data } = useSelector(state => state.requestUpdateBoardItem)
  const [boardItemListId, setBoardItemListId] = useState(data.boardItemListId)
  const [customerName, setCustomerName] = useState('')
  const [buyTicketAmount, setBuyTicketAmount] = useState('')
  const [freeTicketAmount, setFreeTicketAmount] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {
    setBoardItemListId(data.boardItemListId)
    setCustomerName(data.customerName)
    setBuyTicketAmount(data.sellTicketAmount)
    setFreeTicketAmount(data.freeTicketAmount)
  }, [data])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateBoardItem({
      boardItemListId,
      customerName,
      sellTicketAmount: buyTicketAmount,
      freeTicketAmount,
    }))
    setCustomerName('')
    setBuyTicketAmount('')
    setFreeTicketAmount('')
    toggle()

  }
  const handleCancel = () => {
    setCustomerName('')
    setBuyTicketAmount('')
    setFreeTicketAmount('')
    toggle()
  }

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value)
  }
  const handleBuyTicketAmountChange = (e) => {
    setBuyTicketAmount(e.target.value)
  }
  const handleFreeTicketAmountChange = (e) => {
    setFreeTicketAmount(e.target.value)
  }
  return (
    <div>
      <Offcanvas direction='end' isOpen={isOpen} toggle={toggle}>
        <OffcanvasHeader>Update Board Item</OffcanvasHeader>
        <OffcanvasBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="customer_name">Customer Name</Label>
              <Input
                id="customer_name"
                name="customer_name"
                placeholder="Customer Name"
                value={customerName}
                onChange={handleCustomerNameChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="buy_ticket_amount">Buy Ticket Amount</Label>
              <Input
                id="buy_ticket_amount"
                name="buy_ticket_amount"
                placeholder="Buy Ticket Amount"
                type='number'
                value={buyTicketAmount}
                onChange={handleBuyTicketAmountChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="ticket_price">Free Ticket Amount</Label>
              <Input
                id="free_ticket_amount"
                name="free_ticket_amount"
                placeholder="Free Ticket Amount"
                type='number'
                value={freeTicketAmount}
                onChange={handleFreeTicketAmountChange}
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

export default UpdateBoardItem
