import React from 'react'
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

const CreateBoard = ({ isOpen, toggle }) => {
  return (
    <div>
      <Offcanvas direction='end' isOpen={isOpen} toggle={toggle}>
        <OffcanvasHeader>Create Board</OffcanvasHeader>
        <OffcanvasBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Cost</Label>
              <Input
                id="cost"
                name="cost"
                placeholder="cost"
                type='number'
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Total Ticket</Label>
              <Input
                id="total_ticket"
                name="total_ticket"
                placeholder="total ticket"
                type='number'
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Ticket Price</Label>
              <Input
                id="ticket_price"
                name="ticket_price"
                placeholder="ticket price"
                type='number'
              />
            </FormGroup>
            <Button>Create</Button>
          </Form>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export default CreateBoard
