import { Breadcrumb, Row } from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'

const CutomBreadCrumb = ({ breadcumbItems }) => {
  const location = useLocation()
  console.log(location)
  // const breadCrumbView = () => {
  const { pathname } = location
  const pathnames = pathname.split('/').filter((item) => item)
  console.log(pathnames)
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

export default CutomBreadCrumb
