import { Button, Col, Input, Layout, Row, theme } from 'antd'
import { Form } from 'antd/lib'
import Card from 'antd/lib/card/Card'
import React from 'react'
// Đường dẫn đến hình ảnh logo
import { useMutation } from '@tanstack/react-query'
import { useRegister } from '../../api/auth'
import logo from '../../assets/images/logo.jpg'
import { StyledDatepicker } from '../component/ComponentOfForm'
const { Header, Content, Footer } = Layout
const BusinessRegister = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const { mutate: register } = useMutation({
    mutationFn: useRegister,
    onSuccess: () => {
      console.log('Register success')
    }
  })
  const handleFinish = (values) => {
    console.log(values)
    register(values)
  }
  return (
    <Layout
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#E1E5F4',
        overflow: 'hidden'
      }}
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
            Trang chủ
          </Button>
        </div>
      </Header>
      <Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '10px',
          alignContent: 'center',
          overflow: 'auto'
        }}
      >
        <Card style={{ width: '80vw' }}>
          <Form layout='vertical' onFinish={handleFinish}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label={'Tên doanh nghiệp'}
                  name={'tenantName'}
                  rules={[
                    {
                      required: true,
                      message: 'Yêu cầu thông tin'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={'Họ và tên'}
                  name={'name'}
                  rules={[
                    {
                      required: true,
                      message: 'Yêu cầu thông tin'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label={'Mã số thuế'}
                  name={'taxCode'}
                  rules={[
                    {
                      required: true,
                      message: 'Yêu cầu thông tin'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={'Ngày sinh'} name={'dayOfBirth'}>
                  <StyledDatepicker />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={4}>
                <Form.Item
                  label={'Địa chỉ'}
                  name={'addressDetail'}
                  rules={[
                    {
                      required: true,
                      message: 'Yêu cầu thông tin'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item label={'Quận/huyện'} name={'district'}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={4}>
                <Form.Item label={'Thành phố'} name={'city'}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={'Số Căn Cước công dân'}
                  name={'cccd'}
                  rules={[
                    {
                      required: true,
                      message: 'Yêu cầu thông tin'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label={'Quốc tịch'} name={'country'}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={'Số điện thoại'}
                  name={'phoneNumber'}
                  rules={[
                    {
                      required: true,
                      message: 'Yêu cầu thông tin'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label={'Mã ngành kinh doanh'}
                  name={'businessIndustry'}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={'Email'}
                  name={'email'}
                  rules={[
                    {
                      required: true,
                      message: 'Yêu cầu thông tin'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label={'Mã số đăng ký kinh doanh'}
                  name={'businessRegistrationNumber'}
                  rules={[
                    {
                      required: true,
                      message: 'Yêu cầu thông tin'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={'Tên đăng nhập'}
                  name={'username'}
                  rules={[
                    {
                      required: true,
                      message: 'Yêu cầu thông tin'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label={'Vùng kinh doanh'}
                  name={'businessNationality'}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={'Mật khẩu'}
                  name={'password'}
                  rules={[
                    {
                      required: true,
                      message: 'Yêu cầu thông tin'
                    }
                  ]}
                >
                  <Input type='password' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label={'Domain'}
                  name={'domain'}
                  rules={[
                    {
                      required: true,
                      message: 'Yêu cầu thông tin'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={'Nhập lại mật khẩu'}
                  name={'passwordConfirm'}
                  rules={[
                    {
                      required: true,
                      message: 'Yêu cầu thông tin'
                    }
                  ]}
                >
                  <Input type='password' />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col
                span={24}
                style={{
                  display: 'flex',
                  justifyContent: 'center',

                  alignItems: 'flex-end'
                }}
              >
                <Button
                  style={{
                    width: '150px',
                    height: '50px',
                    background: '#7364FF',
                    color: 'white',
                    fontSize: 15
                  }}
                  htmlType='submit'
                >
                  {' '}
                  Tạo tài khoản
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Content>
      <Footer style={{ textAlign: 'center', height: '5vh' }}>
        Made with TNT CCS. All Rights Reserved © 2023
      </Footer>
    </Layout>
  )
}
export default BusinessRegister
