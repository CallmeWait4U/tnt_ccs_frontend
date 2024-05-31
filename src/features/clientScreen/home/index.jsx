/* eslint-disable no-unused-vars */
import { Card, Col, Image, Pagination, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { useListProduct } from '../../../api/Customer/product'

const ClientHome = () => {
  const [skip, setSkip] = useState(0)
  const take = 8
  const { data: ProductList, refetch: refetchProduct } = useListProduct(
    skip,
    take
  )
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
        <Row justify='center'>
          <Pagination
            defaultCurrent={1}
            total={ProductList?.total || 0}
            onChange={(page) => {
              setSkip((page - 1) * take)
              refetchProduct()
            }}
            showSizeChanger={false}
            pageSize={take}
            hideOnSinglePage={true}
          />
        </Row>
      </Card>
    </>
  )
}

export default ClientHome
