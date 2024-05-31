import {
  Alert,
  Button,
  Col,
  Input,
  Layout,
  Row,
  Typography,
  message,
  theme
} from 'antd'
import { Form } from 'antd/lib'
import Card from 'antd/lib/card/Card'
import React, { useEffect, useState } from 'react'
// Đường dẫn đến hình ảnh logo
import { useMutation } from '@tanstack/react-query'
import { notification } from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useRegister } from '../../api/auth'
import logo from '../../assets/images/logo.jpg'
import { PATH } from '../../contants/common'
import { StyledDatepicker, StyledSelect } from '../component/ComponentOfForm'
import '../customerManagement/detail/DetailCustomer.css'
const { Header, Content, Footer } = Layout
const BusinessRegister = () => {
  const [errorMessage, setErrorMessage] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const { Title } = Typography
  // eslint-disable-next-line no-unused-vars
  const [domain, setDomain] = useState('')
  const navigate = useNavigate()

  const openNotification = () => {
    notification.open({
      type: 'success',
      message: 'Tạo tài khoản thành công!',
      description: 'Vui lòng kiểm tra email để nhận domain của bạn!'
    })
  }
  const { mutate: register } = useMutation({
    mutationFn: useRegister,
    onSuccess: () => {
      message.destroy()
      setErrorMessage(false)
      openNotification()
    },
    onError: (error) => {
      console.log(error.response.data.message)
      if (error.response.data.message === 'Domain name already exists') {
        setErrorMessage(true)
      }
    }
  })
  const [cities, setCities] = useState([])
  const [districts, setDistricts] = useState([])
  const [form] = Form.useForm()
  useEffect(() => {
    axios
      .get('https://esgoo.net/api-tinhthanh/1/0.htm')
      .then((response) => {
        const cityOptions = response.data.data.map((city) => ({
          value: city.id,
          label: city.name
        }))
        setCities(cityOptions)
      })
      .catch((error) => {
        console.error('Error fetching cities:', error)
      })
  }, [])
  const handleCityChange = (value) => {
    form.setFieldsValue({ district: undefined }) // Clear selected district
    axios
      .get(`https://esgoo.net/api-tinhthanh/2/${value}.htm`)
      .then((response) => {
        const districtOptions = response.data.data.map((district) => ({
          value: district.id,
          label: district.name
        }))
        setDistricts(districtOptions)
      })
      .catch((error) => {
        console.error('Error fetching districts:', error)
      })
  }
  const handleFinish = (values) => {
    message.loading('Đang xử lý...', 0)
    setDomain(values.domain)
    register(values)
  }
  return (
    <Layout
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#E1E5F4'
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
          <Button
            style={{ background: '#7364FF', color: 'white' }}
            onClick={() => navigate(PATH.LANDINGPAGE)}
          >
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
          maxHeight: '85vh'
        }}
      >
        <Card
          style={{
            width: '80vw',
            overflowY: 'auto'
          }}
        >
          <Title level={2} style={{ textAlign: 'center' }}>
            Đăng ký thông tin doanh nghiệp
          </Title>
          <Form
            className='detailCustomer'
            layout='vertical'
            onFinish={handleFinish}
          >
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card title='Thông tin người đại diện'>
                  <Row gutter={8}>
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
                    <Col span={8}>
                      <Form.Item
                        label={'Địa chỉ'}
                        name={'addressDetail'}
                        className='customHorizontal customDetailAddress'
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        className='customHorizontal customAddress'
                        label={' '}
                        name={'district'}
                        rules={[
                          {
                            required: true,
                            message: 'Yêu cầu thông tin'
                          }
                        ]}
                      >
                        <StyledSelect
                          placeholder='Chọn quận huyện'
                          options={districts}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        className='customHorizontal customAddress'
                        label={' '}
                        name={'city'}
                        rules={[
                          {
                            required: true,
                            message: 'Yêu cầu thông tin'
                          }
                        ]}
                      >
                        <StyledSelect
                          placeholder='Chọn thành phố'
                          options={cities}
                          onChange={handleCityChange}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={12}>
                <Card title='Thông tin doanh nghiệp'>
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
                        label={'Quốc gia'}
                        name={'country'}
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
                        label={'Lĩnh vực kinh doanh'}
                        name={'businessIndustry'}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
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
                  </Row>
                  <Row gutter={16}>
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
                  </Row>
                  <Row gutter={16}>
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
                </Card>
              </Col>
            </Row>
            {errorMessage && (
              <Alert message='Tên domain đã tồn tại' type='error' showIcon />
            )}
            <Row gutter={16} style={{ paddingTop: '24px' }}>
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
