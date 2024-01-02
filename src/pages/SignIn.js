import { LockOutlined, MailOutlined } from '@ant-design/icons'
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Layout,
  Typography,
  theme
} from 'antd'
import Card from 'antd/lib/card/Card'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.jpg'

const { Header, Content, Footer } = Layout

const { useToken } = theme
const { useBreakpoint } = Grid
const { Text, Link } = Typography
const CustomerLanding = () => {
  const { token } = useToken()
  const navigate = useNavigate()
  const screens = useBreakpoint()

  const onFinish = (values) => {
    navigate('/customers')
  }

  const styles = {
    container: {
      margin: '0 auto',
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: '380px'
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: 'center',
      width: '100%'
    },
    forgotPassword: {
      float: 'right'
    },
    header: {
      marginBottom: token.marginXL,
      display: 'flex',
      justifyContent: 'center'
    },
    section: {
      alignItems: 'center',
      backgroundColor: token.colorBgContainer,
      display: 'flex',
      height: screens.sm ? '100vh' : 'auto',
      padding: screens.md ? `${token.sizeXXL}px 0px` : '0px'
    },
    text: {
      color: token.colorTextSecondary
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3
    }
  }
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
          <Button style={{ background: '#7364FF', color: 'white' }}>
            Đăng nhập
          </Button>
        </div>
      </Header>
      <Content
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E2E8F0'
        }}
      >
        <Card
          style={{
            width: '500px',
            height: '530px'
          }}
        >
          <div style={styles.container}>
            <div style={styles.header}>
              <Image src={logo} style={{ width: '100px' }} />
            </div>
            <Form
              name='normal_login'
              initialValues={{
                remember: true
              }}
              onFinish={onFinish}
              layout='vertical'
              requiredMark='optional'
            >
              <Form.Item
                name='email'
                rules={[
                  {
                    type: 'email',
                    required: true,
                    message: 'Please input your Email!'
                  }
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder='Email' />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!'
                  }
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  type='password'
                  placeholder='Password'
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a style={styles.forgotPassword} href=''>
                  Forgot password?
                </a>
              </Form.Item>
              <Form.Item style={{ marginBottom: '0px' }}>
                <Button block='true' htmlType='submit'>
                  Log in
                </Button>
                <div style={styles.footer}>
                  <Text style={styles.text}>Do not have an account?</Text>{' '}
                  <Link href=''>Sign up now</Link>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </Content>
      <Footer style={{ textAlign: 'center', height: '5vh' }}>
        Made with TNT CCS. All Rights Reserved © 2023
      </Footer>
    </Layout>
  )
}

export default CustomerLanding
