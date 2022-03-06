import React from 'react'
import { Table, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Moment from 'moment'

const BoardTable = ({ data, toggle }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Cost</th>
          <th>Ticket Price</th>
          <th>Total Ticket</th>
          <th>Created at</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          (data) ? data.map((val) => (
            <tr key={val.id}>
              <th scope="row">{val.id}</th>
              <td style={{ cursor: 'pointer' }} onClick={() => window.location.href = `http://localhost:3000/item?board_id=${val.id}`}>{val.name}</td>
              <td>{val.cost}</td>
              <td>{val.ticket_price}</td>
              <td>{val.total_ticket}</td>
              <td>{Moment(val.created_at).format('YYYY-MM-DD')}</td>
              <td><Button color='primary' onClick={() => { toggle(val) }} outline><FontAwesomeIcon icon={faEdit} /></Button></td>
            </tr>)) : null
        }
      </tbody>
    </Table>
  )
}

export default BoardTable
