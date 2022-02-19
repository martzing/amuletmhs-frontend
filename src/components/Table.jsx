import React from 'react'
import { Table } from 'reactstrap'

const MyTable = ({ data }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((num) => (
            <tr>
              <th scope="row">{num}</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>))
        }
      </tbody>
    </Table>
  )
}

export default MyTable
