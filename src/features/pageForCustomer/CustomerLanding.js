import { Button, Divider, Layout, theme } from 'antd'
import React from 'react'
import { FiMail, FiPhone } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import { PATH } from '../../contants/common'
const { Header, Content, Footer } = Layout
const CustomerLanding = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const navigate = useNavigate()
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
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px'
          }}
        >
          <img src={logo} alt='Logo' style={{ width: '40px' }} />
          <h1 className='font-bold text-black p-2 text-2xl'>TNT CCS</h1>
        </div>
        <div style={{ paddingRight: '20px' }}>
          <Button
            style={{ background: '#7364FF', color: 'white' }}
            onClick={() => navigate(`${PATH.SIGNIN}`)}
          >
            Đăng nhập
          </Button>
        </div>
      </Header>
      <Content>
        <div
          style={{
            height: '85vh',
            width: '100vw',
            margin: 'none',
            background: '#E2E8F0',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              width: '60vw',
              height: '80vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <span style={{ fontSize: 40 }}>Bạn gặp vấn đề với sản phẩm?</span>
            <br />
            <span style={{ fontSize: 40 }}>Để lại thông tin cho chúng tôi</span>
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
            <br />
            <div
              style={{
                background: 'white',
                display: 'flex',

                width: '650px',
                height: '100px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '50%',
                  fontSize: 22
                }}
              >
                <span>Liên hệ trực tiếp</span>
                <div
                  style={{ display: 'flex', gap: '5px', alignItems: 'center' }}
                >
                  <FiPhone /> <span>1900 1800</span>
                </div>
              </div>
              <Divider type='vertical' />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '50%',
                  fontSize: 22
                }}
              >
                <span>Email</span>
                <div
                  style={{ display: 'flex', gap: '5px', alignItems: 'center' }}
                >
                  <FiMail /> <span>business@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', height: '5vh' }}>
        Made with TNT CCS. All Rights Reserved © 2023
      </Footer>
    </Layout>
  )
}
export default CustomerLanding
