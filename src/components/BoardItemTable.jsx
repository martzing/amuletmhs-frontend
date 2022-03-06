import React from 'react'
import { useDispatch } from 'react-redux'
import { Table, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Moment from 'moment'

import { getRewardList } from './../Actions/BoardItem'

const BoardItemTable = ({ data, toggle, toggleOpenDetail }) => {

  const dispatch = useDispatch()
  const handleOpenDetail = (boardItemId) => {
    dispatch(getRewardList(boardItemId))
    toggleOpenDetail()
  }
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer Name</th>
          <th>Buy Ticket Amount</th>
          <th>Free Ticket Amount</th>
          <th>Created at</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          (data) ? data.map((val) => (
            <tr key={val.id} style={{ cursor: 'pointer' }}>
              <th scope="row">{val.id}</th>
              <td>{val.customer_name}</td>
              <td>{val.sell_ticket_amount}</td>
              <td>{val.free_ticket_amount}</td>
              <td>{Moment(val.created_at).format('YYYY-MM-DD')}</td>
              <td>
                <Button color='success' onClick={() => { handleOpenDetail(val.id) }} outline style={{ marginRight: '5px' }}><FontAwesomeIcon icon={faInfoCircle} /></Button>
                <Button color='primary' onClick={() => { toggle(val) }} outline><FontAwesomeIcon icon={faEdit} /></Button>
              </td>
            </tr>)) : null
        }
      </tbody>
    </Table>
  )
}

export default BoardItemTable
