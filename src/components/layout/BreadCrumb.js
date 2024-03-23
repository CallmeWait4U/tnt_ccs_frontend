import { Breadcrumb, Row } from 'antd'
import React from 'react'

const CustomBreadCrumb = ({ breadcumbItems }) => {
  return (
    <Row
      gutter={[24, 0]}
      style={{
        background: 'inherit',
        marginLeft: '5px'
      }}
    >
      <Breadcrumb
        style={{ margin: '5px 0px 5px 36px ' }}
        separator='>'
        items={breadcumbItems}
      />
    </Row>
  )
}

export default CustomBreadCrumb
