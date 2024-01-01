import { Button, Col, Input, Layout, Row, theme } from 'antd'
import { Form } from 'antd/lib'
import Card from 'antd/lib/card/Card'
import React from 'react'
// Đường dẫn đến hình ảnh logo
import logo from '../../assets/images/logo.jpg'

import { StyledDatepicker } from '../component/ComponentOfForm'
const { Header, Content, Footer } = Layout
const BusinessRegister = () => {
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
          <img src={logo} alt="Logo" style={{ width: '40px' }} />
          <h1 className="font-bold text-black p-2 text-2xl">TNT CCS</h1>
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
          alignContent: 'center'
        }}
      >
        <Card style={{ width: '80vw' }}>
          <Form layout="vertical">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label={'Tên doanh nghiệp'}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={'Họ và tên'}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label={'Mã số thuế'}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={'Ngày sinh'}>
                  <StyledDatepicker />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label={'Địa chỉ'}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={'Số Căn Cước công dân'}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label={'Quốc tịch'}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={'Domain'}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label={'Mã ngành kinh doanh'}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={'Tên đăng nhập'}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label={'Mã số đăng ký kinh doanh'}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={'Mật khẩu'}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label={'Số điện thoại'}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={'Nhập lại mật khẩu'}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label={'Quốc tịch'}>
                  <Input />
                </Form.Item>
              </Col>
              <Col
                span={12}
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
