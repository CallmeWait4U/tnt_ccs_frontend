import { useMutation } from '@tanstack/react-query'
import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Typography,
  message
} from 'antd'
import axios from 'axios'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useReadAccount, useUpdateAccount } from '../../../api/Admin/account'
import { ButtonOk } from '../../../assets/styles/button.style'
import { StyledDatepicker, StyledSelect } from '../../component/ComponentOfForm'
import '../accountManagement.css'
const AccountDetail = () => {
  const { Title } = Typography
  const [isUpdate, setIsUpdate] = useState(false)
  const [cities, setCities] = useState([])
  const [districts, setDistricts] = useState([])
  const location = useLocation()
  const paramsString = location.pathname.split('/')[3]
  const uuid = paramsString.split('&')
  console.log(uuid[2])
  const { data: account } = useReadAccount(uuid[0])
  const { mutate: mutateUpdate } = useMutation({
    mutationFn: useUpdateAccount,
    onSuccess: () => {
      message.success('Cập nhật thành công')
      console.log('Update success')
    }
  })

  const [form] = Form.useForm()
  const onFinish = (values) => {
    const updateValues = { ...values, uuid: uuid[0] }
    mutateUpdate(updateValues)
    setIsUpdate(false)
  }

  useEffect(() => {
    if (account) {
      form.setFieldsValue({
        name: account.name,
        code: account.code,
        position: account.position,
        phoneNumber: account.phoneNumber,
        email: account.email,
        detailAddress: account.detailAddress,
        city: account.city,
        district: account.district,
        dayOfBirth: dayjs(account.dayOfBirth),
        gender: account.gender,
        nationality: account.nationality,
        cccd: account.cccd,
        description: account.description
      })
    }
  }, [account, form])

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
    <Form layout='vertical' form={form} onFinish={onFinish}>
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
            Chi tiết tài khoản
          </Title>
        </Col>
        <Col md={4} style={{ display: 'flex', justifyContent: 'right' }}>
          {isUpdate ? (
            <Flex gap='small' align='flex-start' vertical>
              <Flex gap='small' wrap='wrap'>
                <Button
                  size={40}
                  style={{
                    borderColor: '#F58220',
                    color: '#F58220',
                    width: '80px',
                    height: '40px'
                  }}
                  onClick={() => setIsUpdate(false)}
                >
                  Hủy
                </Button>
                <Button
                  style={{
                    background: '#F58220',
                    color: 'white',
                    width: '80px',
                    height: '40px'
                  }}
                  size={40}
                  htmlType='submit'
                >
                  Lưu
                </Button>
              </Flex>
            </Flex>
          ) : (
            <Flex gap='small' align='flex-start' vertical>
              <Flex gap='small' wrap='wrap'>
                <div style={{ width: '80px' }}></div>
                <ButtonOk
                  onClick={() => setIsUpdate(true)}
                  style={{
                    background: '#F58220',
                    color: 'white',
                    width: '80px',
                    height: '40px'
                  }}
                >
                  Chỉnh sửa
                </ButtonOk>
              </Flex>
            </Flex>
          )}
        </Col>
      </Row>
      <Card title='Thông tin Chủ tài khoản'>
        {uuid[2] === 'customer' ? (
          <>
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
                  <Input disabled={!isUpdate} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label='Mã khách hàng'
                  name={'code'}
                  rules={[
                    {
                      required: true,
                      message: 'Yêu cầu thông tin'
                    }
                  ]}
                >
                  <Input disabled={!isUpdate} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label='Số điện thoại' name={'phoneNumber'}>
                  <Input disabled={!isUpdate} />
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
                  <Input disabled={!isUpdate} />
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
                    disabled={!isUpdate}
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
                    disabled={!isUpdate}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={14}>
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
                  <Input disabled={!isUpdate} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label='Ghi chú' name={'description'}>
                  <Input.TextArea disabled={!isUpdate} />
                </Form.Item>
              </Col>
            </Row>
          </>
        ) : (
          <>
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
                  <Input disabled={!isUpdate} />
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
                  <Input disabled={!isUpdate} />
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
                  <Input disabled={!isUpdate} />
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
                  <StyledDatepicker disabled={!isUpdate} />
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
                      { value: 'FEMALE', label: 'Nữ' },
                      { value: 'UNKNOWN', label: 'Khác' }
                    ]}
                    disabled={!isUpdate}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label='Quốc tịch' name={'nationality'}>
                  <Input disabled={!isUpdate} />
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
                  <Input disabled={!isUpdate} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label='Số điện thoại' name={'phoneNumber'}>
                  <Input disabled={!isUpdate} />
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
                  <Input disabled={!isUpdate} />
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
                  <Input disabled={!isUpdate} />
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
                    disabled={!isUpdate}
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
                    disabled={!isUpdate}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={14}>
              <Col span={8}>
                <Form.Item label='Ghi chú' name={'description'}>
                  <Input.TextArea disabled={!isUpdate} />
                </Form.Item>
              </Col>
              <Col span={8}>
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
                    disabled={!isUpdate}
                  />
                </Form.Item>
              </Col>
            </Row>
          </>
        )}
      </Card>
    </Form>
  )
}
export default AccountDetail
