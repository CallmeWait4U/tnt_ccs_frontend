/* eslint-disable no-unused-vars */
import { Card, Col, Image, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { useListProduct } from '../../../api/Customer/product'

const ClientHome = () => {
  const [skip, setSkip] = useState(42)
  const [take, setTake] = useState(8)
  const { data: ProductList } = useListProduct(skip, take)
  const { Title } = Typography
  const { Meta } = Card
  return (
    <>
      <Row>
        <Col md={20}>
          <Title
            level={4}
            style={{
              marginLeft: '10px',
              marginTop: '4px',
              fontWeight: '700'
            }}
          >
            {' '}
            Trang chủ
          </Title>
        </Col>
      </Row>
      <Card>
        <Row gutter={[16, 8]}>
          {ProductList?.items.slice(0, 8).map((product, index) => (
            <Col key={index} span={6}>
              <Card
                hoverable
                cover={
                  <Image
                    alt={product.name}
                    src={product.images[0]?.url}
                    height={200}
                  />
                }
              >
                <Meta
                  title={product.name}
                  description={
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>Price: {product.price}</div>
                      <div>Quantity: {product.quantity}</div>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </>
  )
}

export default ClientHome
