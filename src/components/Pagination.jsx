import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const MyPagination = ({ data }) => {
  return (
    <Pagination>
      <PaginationItem><PaginationLink first href="#" /></PaginationItem>
      <PaginationItem><PaginationLink href="#" previous /></PaginationItem>
      <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href="#">4</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href="#">5</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href="#">6</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href="#">7</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href="#">8</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href="#">9</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href="#">10</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href="#" next /></PaginationItem>
      <PaginationItem><PaginationLink href="#" last /></PaginationItem>
    </Pagination>
  )
}

export default MyPagination