import { useMutation } from '@tanstack/react-query'
import { Button, Card, Col, Flex, Form, Input, Row, message } from 'antd'
import axios from 'axios'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import {
  useGetPhaseList,
  useReadCustomer,
  useUpdateIndividual
} from '../../../api/Admin/customer'
import { ButtonOk } from '../../../assets/styles/button.style'
import { StyledDatepicker, StyledSelect } from '../../component/ComponentOfForm'

const PersonalInformation = (id) => {
  const [isUpdate, setIsUpdate] = useState(false)
  const [cities, setCities] = useState([])
  const [districts, setDistricts] = useState([])
  const [source, setSource] = useState(1)
  const [form] = Form.useForm()
  const { data: customerInfo } = useReadCustomer(id.id)
  const { data: phaseList } = useGetPhaseList()
  const { mutate: updateIndividual } = useMutation({
    mutationFn: useUpdateIndividual,
    onSuccess: () => {
      message.success('Cập nhật thông tin thành công')
    }
  })
  useEffect(() => {
    if (customerInfo) {
      form.setFieldsValue({
        customerName: customerInfo.name,
        phaseName: customerInfo.phaseName,
        code: customerInfo.code,
        source: customerInfo.source,
        cccd: customerInfo.cccd,
        phoneNumber: customerInfo.phoneNumber,
        description: customerInfo.description,
        email: customerInfo.email,
        detailAddress: customerInfo.detailAddress,
        city: customerInfo.city,
        district: customerInfo.district,
        gender: customerInfo.gender,
        createdDate: dayjs(customerInfo.createdDate),
        dayOfBirth: dayjs(customerInfo.dayOfBirth),
        nationality: customerInfo.nationality,
        hasAccount: customerInfo.hasAccount
      })
    }
  }, [customerInfo, form])
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

  const layout = {
    labelCol: {
      span: 12
    },
    wrapperCol: {
      span: 12
    }
  }

  const phaseOptions = phaseList?.items?.map((item) => ({
    label: item.name,
    value: item.name,
    uuid: item.uuid
  }))

  const onFinish = (values) => {
    updateIndividual({ ...values, uuid: id.id })
    setIsUpdate(false)
  }

  return (
    <Col xl={24} xxl={13}>
      <Form
        {...layout}
        form={form}
        name='control-hooks'
        onFinish={onFinish}
        key={'personalInfo'}
      >
        <Card
          title={'Thông tin Cá nhân'}
          extra={
            isUpdate ? (
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
            )
          }
        >
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label={'Loại khách hàng'}
                rules={[
                  {
                    require: true,
                    message: 'Yêu cầu thông tin'
                  }
                ]}
              >
                <Input disabled={true} value='Cá nhân' />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={'Giai đoạn'}
                name={'phaseName'}
                rules={[
                  {
                    required: true,
                    message: 'Yêu cầu thông tin'
                  }
                ]}
              >
                <StyledSelect options={phaseOptions} disabled={!isUpdate} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={'Mã khách hàng'} name={'code'}>
                <Input disabled={true} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label={'Nguồn khách hàng'}
                name={'source'}
                rules={[
                  {
                    required: true,
                    message: 'Yêu cầu thông tin'
                  }
                ]}
              >
                <StyledSelect
                  value={source}
                  onChange={setSource}
                  options={[
                    { value: 'Landing Page', label: 'Landing Page' },
                    { value: 'Tự khai thác', label: 'Tự khai thác' },
                    { value: 'Khác', label: 'Khác' }
                  ]}
                  disabled={!isUpdate}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={'Ngày tạo'} name={'createdDate'}>
                <StyledDatepicker
                  placeholder={'Chọn ngày tạo'}
                  disabled={true}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              {' '}
              <Form.Item label={'Tài khoản'} name={'hasAccount'}>
                <StyledSelect
                  options={[
                    { value: 'NOTAPPROVED', label: 'Không' },
                    { value: 'PENDING', label: 'Chờ duyệt' },
                    { value: 'APPROVED', label: 'Đã duyệt' }
                  ]}
                  disabled={!isUpdate}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Card style={{ width: '100%' }}>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    className='customHorizontal'
                    label={'Tên Khách hàng'}
                    name='customerName'
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
                    className='customHorizontal'
                    label={'Giới tính'}
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
                  <Form.Item
                    className='customHorizontal'
                    label={'Ngày sinh'}
                    name={'dayOfBirth'}
                    rules={[
                      {
                        required: true,
                        message: 'Yêu cầu thông tin'
                      }
                    ]}
                  >
                    <StyledDatepicker
                      placeholder={'Chọn ngày sinh'}
                      disabled={!isUpdate}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    className='customHorizontal'
                    label={'CCCD'}
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
                  <Form.Item
                    className='customHorizontal'
                    label={'Quốc tịch'}
                    name={'nationality'}
                  >
                    <Input disabled={!isUpdate} />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    className='customHorizontal'
                    label={'Ghi chú'}
                    name={'description'}
                  >
                    <Input.TextArea disabled={!isUpdate} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    className='customHorizontal'
                    label={'Email'}
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
                  <Form.Item
                    className='customHorizontal'
                    label={'Số điện thoại'}
                    name={'phoneNumber'}
                  >
                    <Input disabled={!isUpdate} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
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
            </Card>
          </Row>
        </Card>
      </Form>
    </Col>
  )
}
export default PersonalInformation
