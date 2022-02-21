import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

const MyBreadcrumb = ({ data }) => {
  return (
    <Breadcrumb listTag="div">
      {
        data.map((val) => (
          <BreadcrumbItem active={val.isActive} key={val.key} href={val.link} tag="a">{val.name}</BreadcrumbItem>
        ))
      }
    </Breadcrumb>
  )
}

export default MyBreadcrumb
