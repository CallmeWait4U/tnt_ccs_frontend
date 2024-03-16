import { Button, Card, Col, Flex, Form, Input, Row, Switch } from 'antd'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useReadCustomer } from '../../../api/Admin/customer'
import { ButtonOk } from '../../../assets/styles/button.style'
import { StyledDatepicker, StyledSelect } from '../../component/ComponentOfForm'
const PersonalInformation = (id) => {
  const [isUpdate, setIsUpdate] = useState(false)
  const [hasAccount, setHasAccount] = useState(false)
  const [phase, setPhase] = useState(1)
  const [source, setSource] = useState(1)
  const [provinces, setProvinces] = useState([])
  const [districts, setDistricts] = useState([])
  const [form] = Form.useForm()
  const { data: customerInfo } = useReadCustomer(id.id)
  console.log(customerInfo)
  // useEffect(() => {
  //   axios.get('https://provinces.open-api.vn/api/?depth=2').then((data) => {
  //     const provincesData = []
  //     data.data.forEach((item) => {
  //       provincesData.push({
  //         label: item.name,
  //         value: item.code,
  //         districts: item.districts.map((district) => {
  //           return { name: district.name, code: district.code }
  //         })
  //       })
  //     })
  //     setProvinces(provincesData)
  //   })
  // }, [])
  useEffect(() => {
    if (customerInfo) {
      form.setFieldsValue({
        customerName: customerInfo.name,
        customerCode: customerInfo.code,
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
        nationality: customerInfo.nationality
      })
    }
  }, [customerInfo, form])
  const layout = {
    labelCol: {
      span: 12
    },
    wrapperCol: {
      span: 12
    }
  }

  const phaseList = [
    {
      value: 1,
      label: 'Tiềm năng'
    },
    {
      value: 2,
      label: 'Đang liên lạc'
    },
    {
      value: 3,
      label: 'Đã báo giá'
    },
    {
      value: 4,
      label: 'Chính thức'
    },
    {
      value: 5,
      label: 'Thân thiết'
    }
  ]

  const onFinish = (values) => {
    console.log(values)
    setIsUpdate(false)
  }

  const onChangeAccount = (value) => {
    setHasAccount(value)
  }

  // const onChangeProvince = (value) => {
  //   const p = provinces.find((province) => province.value == value)
  //   if (p) {
  //     const districtsData = p.districts.map((district) => {
  //       return { label: district.name, value: district.code }
  //     })
  //     setDistricts(districtsData)
  //   }
  // }

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
                name={'phase'}
                rules={[
                  {
                    required: true,
                    message: 'Yêu cầu thông tin'
                  }
                ]}
              >
                <StyledSelect
                  value={phase}
                  onChange={setPhase}
                  options={phaseList}
                  disabled={!isUpdate}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label={'Mã khách hàng'} name={'customerCode'}>
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
            <Col span={12} xl={8} className={hasAccount ? '' : 'notHasAccount'}>
              {' '}
              <Form.Item label={'Tài khoản'} name={'hasAccount'}>
                <Switch
                  checked={hasAccount}
                  onChange={onChangeAccount}
                  defaultChecked={false}
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
                        { value: 'FEMALE', label: 'Nữ' }
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
                      placeholder='Chọn quận/huyện'
                      options={[
                        { value: 1, label: 'Quận 1' },
                        { value: 2, label: 'Quận 2' },
                        { value: 3, label: 'Quận 3' }
                      ]}
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
                      placeholder='Chọn tỉnh/thành phố'
                      options={[
                        { value: 1, label: 'Hồ Chí Minh' },
                        { value: 2, label: 'Bình Định' },
                        { value: 3, label: 'Bến Tre' }
                      ]}
                      // onChange={onChangeProvince}
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
