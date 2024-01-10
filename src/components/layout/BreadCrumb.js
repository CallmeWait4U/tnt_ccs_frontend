import { Breadcrumb, Row } from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'

const CustomBreadCrumb = ({ breadcumbItems }) => {
  const location = useLocation()
  // const breadCrumbView = () => {
  const { pathname } = location
  const pathnames = pathname.split('/').filter((item) => item)
  return (
    <Row gutter={[24, 0]} style={{ background: 'inherit', marginLeft: '5px' }}>
      <Breadcrumb
        style={{ margin: '5px 0px 5px 24px ' }}
        separator='>'
        items={breadcumbItems}
      />
    </Row>
  )
  // }

  // return <>{breadCrumbView()}</>
}

export default CustomBreadCrumb
