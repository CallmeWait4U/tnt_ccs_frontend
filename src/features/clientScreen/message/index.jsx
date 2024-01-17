import { Card, Col, Row } from 'antd'
import React from 'react'

// Images
import { Typography } from 'antd'
import ChatBox from '../../../components/boxChat/BoxChat'

const ClientMassage = () => {
  const { Title } = Typography
  return (
    <>
      <div className='tabled'>
        <Row gutter={[24, 0]} style={{ height: '650px' }}>
          <Col xs='24' xl={24} style={{ height: '700px' }}>
            <Card bordered={false} className='criclebox tablespace mb-24'>
              <ChatBox />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default ClientMassage
