import { Button, Col, Image, Layout, Row, theme } from 'antd'
import React from 'react'
// Đường dẫn đến hình ảnh logo
import logo from '../../assets/images/logo.jpg'

const { Header, Content, Footer } = Layout

const LandingPage = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <Layout
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 0,
          background: colorBgContainer,
          height: '10vh'
        }}
      >
        <div
          style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}
        >
          <img src={logo} alt='Logo' style={{ width: '40px' }} />
          <h1 className='font-bold text-black p-2 text-2xl'>TNT CCS</h1>
        </div>
        <div style={{ paddingRight: '20px' }}>
          <Button style={{ marginRight: '16px' }} danger>
            Về chúng tôi
          </Button>
          <Button style={{ background: '#7364FF', color: 'white' }}>
            Đăng kí
          </Button>
        </div>
      </Header>
      <Content>
        <Row
          style={{
            padding: 24,
            height: '85vh',
            background: '#E2E8F0'
          }}
          gutter={20}
        >
          <Col
            span={12}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                width: '30vw',
                height: '50vh',
                display: 'inline',
                justifyItems: 'center',
                alignItems: 'center'
              }}
            >
              <span style={{ fontSize: 40 }}>
                Quản lý và chăm sóc khách hàng hiệu quả với TNT CCS
              </span>
              <br />
              <Button
                style={{
                  width: '200px',
                  height: '60px',
                  background: '#7364FF',
                  color: 'white',
                  fontSize: 20
                }}
              >
                Đăng ký{' '}
              </Button>
            </div>
          </Col>
          <Col span={12} style={{ display: 'flex', alignItems: 'center' }}>
            <Image src='https://fastwork.vn/wp-content/uploads/2020/11/Thi%E1%BA%BFt-k%E1%BA%BF-kh%C3%B4ng-t%C3%AAn-39.png' />
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center', height: '5vh' }}>
        Made with TNT CCS. All Rights Reserved © 2023
      </Footer>
    </Layout>
  )
}

export default LandingPage
