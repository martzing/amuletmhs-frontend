import React from 'react'
import { Table } from 'reactstrap'
import Moment from 'moment'

const MyTable = ({ data }) => {
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
        </tr>
      </thead>
      <tbody>
        {
          (data) ? data.map((val) => (
            <tr key={val.id} onClick={() => { window.location = 'http://localhost:3000' }} style={{ cursor: 'pointer' }}>
              <th scope="row">{val.id}</th>
              <td>{val.name}</td>
              <td>{val.cost}</td>
              <td>{val.ticket_price}</td>
              <td>{val.total_ticket}</td>
              <td>{Moment(val.created_at).format('YYYY-MM-DD')}</td>
            </tr>)) : null
        }
      </tbody>
    </Table>
  )
}

export default MyTable
