import { useMutation } from '@tanstack/react-query'
import { Form, Grid, Image, Input, Layout, message, theme } from 'antd'
import { useForm } from 'antd/es/form/Form'
import Card from 'antd/lib/card/Card'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { io } from 'socket.io-client'
import { useSignin } from '../../api/auth'
import logo from '../../assets/images/logo.jpg'
import { ButtonOk } from '../../assets/styles/button.style'
import { LOCAL_STORAGE_ITEM, PATH } from '../../contants/common'

const { Header, Content, Footer } = Layout

const { useToken } = theme
const { useBreakpoint } = Grid
// const { Text, Link } = Typography
const SignIn = () => {
  const { token } = useToken()
  const navigate = useNavigate()
  const screens = useBreakpoint()

  const styles = {
    container: {
      margin: '0 auto',
      padding: '0px',
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
  const [loading, setLoading] = useState(false)
  const { form } = useForm()
  const { mutate } = useMutation({ mutationFn: useSignin })
  const onFinish = (values) => {
    setLoading(true)

    const data = {
      username: values.username,
      password: values.password,
      domain: 'cocolala'
    }
    console.log('data', data)
    mutate(data, {
      onSuccess: (res) => {
        if (res.accessToken) {
          message.success('Đăng nhập thành công')
          setLoading(false)
          io('http://localhost:4001', {
            auth: {
              token: res.accessToken
            }
          }).connect()
          navigate(`${PATH.HOME}`)
          localStorage.setItem(LOCAL_STORAGE_ITEM.TOKEN, res.accessToken)
        }
        setLoading(false)
      },
      onError: (err) => {
        let msg = err?.message
        console.log('Error sigin', err)
        message.error(msg || 'Đăng nhập thất bại')
        setLoading(false)
      }
    })
  }
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
            height: '500px',
            padding: '0px'
          }}
        >
          <div style={styles.container}>
            <div style={styles.header}>
              <Image src={logo} style={{ width: '100px' }} />
            </div>
            <Form
              style={{ marginBottom: '0px' }}
              name='normal_login'
              initialValues={{
                remember: true
              }}
              onFinish={onFinish}
              layout='vertical'
              requiredMark='optional'
              form={form}
            >
              <Form.Item
                name='username'
                label='Tên đăng nhập'
                rules={[
                  {
                    required: true,
                    message: 'Hãy nhập tên đăng nhập'
                  }
                ]}
              >
                <Input placeholder='Email' />
              </Form.Item>
              <Form.Item
                name='password'
                label='Mật khẩu'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!'
                  }
                ]}
              >
                <Input.Password type='password' placeholder='Password' />
              </Form.Item>

              <Form.Item
                style={{
                  display: 'flex',
                  marginBottom: '0px',
                  justifyContent: 'center'
                }}
              >
                <ButtonOk
                  block='true'
                  style={{ width: '130px', height: '40px', fontSize: '16px' }}
                  htmlType='submit'
                  loading={loading}
                >
                  Đăng nhập
                </ButtonOk>
              </Form.Item>
              <Form.Item style={{ marginBottom: '0px' }}>
                <div style={styles.footer}>
                  <a href=''>Quên mật khẩu</a>
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

export default SignIn
