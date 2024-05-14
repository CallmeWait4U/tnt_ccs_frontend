import { useMutation } from '@tanstack/react-query'
import { Card, Col, Flex, Form, Input, Row, Typography } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useCreateAccount } from '../../../api/Admin/account'
import { ButtonOk } from '../../../assets/styles/button.style'
import { StyledDatepicker, StyledSelect } from '../../component/ComponentOfForm'
import '../accountManagement.css'

const NewAccount = () => {
  const { Title } = Typography
  const mutation = useMutation({
    mutationFn: useCreateAccount
  })
  const handleSubmit = (values) => {
    mutation.mutate(values)
  }
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
  return (
    <Form layout='vertical' className='tabled' onFinish={handleSubmit}>
      <Row gutter={16} style={{ marginBottom: '14px' }}>
        <Col md={20}>
          <Title
            level={4}
            style={{
              marginLeft: '10px',
              marginTop: '4px',
              fontWeight: '700'
            }}
          >
            Tạo mới tài khoản
          </Title>
        </Col>
        <Col md={4} style={{ display: 'flex', justifyContent: 'right' }}>
          <Flex gap='small' align='flex-start' vertical>
            <Flex gap='small' wrap='wrap'>
              <div style={{ width: '80px' }}></div>
              <ButtonOk
                style={{
                  background: '#F58220',
                  color: 'white',
                  width: '80px',
                  height: '40px'
                }}
                htmlType='submit'
              >
                Lưu
              </ButtonOk>
            </Flex>
          </Flex>
        </Col>
      </Row>
      <Card
        className='accountForm'
        style={{ height: 680, maxHeight: 680, overflowX: 'hidden' }}
      >
        <Row gutter={[16, 16]}>
          <Col span={14} xl={12}>
            <Card title='Thông tin Chủ tài khoản'>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    label='Tên chủ tài khoản'
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
                <Col span={8}>
                  <Form.Item
                    label='Mã nhân viên'
                    name={'code'}
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
                <Col span={8}>
                  <Form.Item
                    label='Vị trí'
                    name={'position'}
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
                <Col span={8}>
                  <Form.Item
                    label='Ngày sinh'
                    name={'dayOfBirth'}
                    rules={[
                      {
                        required: true,
                        message: 'Yêu cầu thông tin'
                      }
                    ]}
                  >
                    <StyledDatepicker />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label='Giới tính'
                    name={'gender'}
                    rules={[
                      {
                        required: true,
                        message: 'Yêu cầu thông tin'
                      }
                    ]}
                  >
                    <StyledSelect
                      placeholder={'Chọn giới tính'}
                      options={[
                        { value: 'MALE', label: 'Nam' },
                        { value: 'FEMALE', label: 'Nữ' }
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label='Quốc tịch' name={'nationality'}>
                    <StyledSelect
                      placeholder='Chọn quốc tịch'
                      options={[
                        { value: 'Việt Nam', label: 'Việt Nam' },
                        { value: 'Lào', label: 'Lào' },
                        { value: 'Campuchia', label: 'Campuchia' }
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={14}>
                <Col span={8}>
                  <Form.Item
                    label='CCCD'
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
                <Col span={8}>
                  <Form.Item label='Số điện thoại' name={'phoneNumber'}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label='Email'
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
              <Row gutter={14}>
                <Col span={8}>
                  <Form.Item
                    className='customHorizontal customDetailAddress'
                    label={'Địa chỉ'}
                    name={'detailAddress'}
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
              <Row gutter={14}>
                <Col span={8}>
                  <Form.Item label='Ghi chú' name={'description'}>
                    <Input.TextArea />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label='Loại tài khoản'
                    name={'type'}
                    rules={[
                      {
                        required: true,
                        message: 'Yêu cầu thông tin'
                      }
                    ]}
                  >
                    <StyledSelect
                      options={[
                        { value: 'ADMIN', label: 'Quản trị viên' },
                        { value: 'EMPLOYEE', label: 'Nhân viên' }
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
    </Form>
  )
}
export default NewAccount
