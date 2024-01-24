import { Button, Card, Col, Form, Input, Row, Table } from 'antd'
import { useEffect, useState } from 'react'

import { Switch, Typography } from 'antd'
import axios from 'axios'
import { FiPlus } from 'react-icons/fi'
import { TbTrashFilled } from 'react-icons/tb'
import { StyledDatepicker, StyledSelect } from '../../component/ComponentOfForm'
import './form.css'

const CustomerForm = () => {
  const [typeCustomer, setTypeCustomer] = useState(1)
  const [phase, setPhase] = useState(1)
  const [source, setSource] = useState(1)
  const [provinces, setProvinces] = useState([])
  const [districts, setDistricts] = useState([])
  const [hasAccount, setHasAccount] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    axios.get('https://provinces.open-api.vn/api/?depth=2').then((data) => {
      const provincesData = []
      data.data.forEach((item) => {
        provincesData.push({
          label: item.name,
          value: item.code,
          districts: item.districts.map((district) => {
            return { name: district.name, code: district.code }
          })
        })
      })
      setProvinces(provincesData)
    })
  }, [])

  const layout = {
    labelCol: {
      span: 8
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
  }

  const onChangeAccount = (value) => {
    console.log(value)
    setHasAccount(value)
  }

  const onChangeProvince = (value) => {
    const p = provinces.find((province) => province.value == value)
    if (p) {
      const districtsData = p.districts.map((district) => {
        return { label: district.name, value: district.code }
      })
      setDistricts(districtsData)
    }
  }

  const [tableData, setTableData] = useState([
    {
      index: 1,
      name: 'Lê Huy Ngọ',
      code: 'SP-001'
    },
    {
      index: 2,
      name: 'Lê Huy Ngọ',
      code: 'SP-001'
    }
  ])

  const addRow = () => {
    const maxIndex = tableData.reduce(
      (max, item) => (item.index > max ? item.index : max),
      0
    )
    const newItem = {
      index: maxIndex + 1,
      name: '',
      code: ''
    }

    setTableData([...tableData, newItem])
    console.log('table', tableData)
  }

  const columns = [
    {
      title: 'Tên Nhân viên',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      render: (item, record, index) => (
        <StyledSelect
          defaultValue={item}
          onChange={(e) => handleCellChange(index, 'name', e.target.value)}
        />
      )
    },
    {
      title: 'Mã Nhân viên',
      dataIndex: 'code',
      key: 'code',
      width: '15%',
      render: (item, record, index) => (
        <Input
          defaultValue={item}
          onChange={(e) => handleCellChange(index, 'code', e.target.value)}
        />
      )
    },
    {
      title: '',
      width: '7%',
      key: 'action',
      render: (item) => (
        <Button
          type='link'
          icon={
            <TbTrashFilled
              color='red'
              backgroundcolor='red'
              size={24}
              onClick={() => console.log('trash')}
            />
          }
          onClick={() => handleDeleteRow(item.index)}
        />
      )
    }
  ]

  const handleCellChange = (index, field, value) => {
    const updatedTableData = [...tableData]
    updatedTableData[index][field] = value
    setTableData(updatedTableData)
  }
  const handleDeleteRow = (index) => {
    const updatedData = tableData.filter((item) => item.index !== index)
    setTableData(updatedData)
    console.log('table', tableData)
  }

  const { Title } = Typography
  return (
    <Form {...layout} form={form} name='control-hooks' onFinish={onFinish}>
      <div className='tabled'>
        <Row gutter={[24, 0]} style={{ marginBottom: '14px' }}>
          <Col md={20}>
            <Title
              level={4}
              style={{
                marginLeft: '10px',
                marginTop: '4px',
                fontWeight: '700'
              }}
            >
              {' '}
              Tạo mới khách hàng
            </Title>
          </Col>
          <Col
            md={4}
            style={{
              display: 'flex',
              justifyContent: 'right',
              paddingRight: '32px'
            }}
          >
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
          </Col>
        </Row>
      </div>

      <Col className='customerForm'>
        <Card style={{ height: 680, maxHeight: 680, overflowX: 'hidden' }}>
          <Row gutter={16}>
            <Col span={12} xl={8}>
              <Form.Item
                label={'Loại khách hàng'}
                name={'typeCustomer'}
                rules={[
                  {
                    required: true,
                    message: 'Trường dữ liệu bắt buộc'
                  }
                ]}
              >
                <StyledSelect
                  value={typeCustomer}
                  onChange={setTypeCustomer}
                  options={[
                    { value: 1, label: 'Công ty' },
                    { value: 2, label: 'Cá nhân' }
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12} xl={8}>
              <Form.Item
                label={'Giai đoạn'}
                name={'phase'}
                rules={[
                  {
                    required: true,
                    message: 'Trường dữ liệu bắt buộc'
                  }
                ]}
              >
                <StyledSelect
                  value={phase}
                  onChange={setPhase}
                  options={phaseList}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={18}>
            <Col span={12} xl={8}>
              <Form.Item
                label={'Nguồn khách hàng'}
                name={'source'}
                rules={[
                  {
                    required: true,
                    message: 'Trường dữ liệu bắt buộc'
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
                />
              </Form.Item>
            </Col>
            <Col span={12} xl={8}>
              {' '}
              <Form.Item
                label={'Ngày tạo'}
                name={'createdDate'}
                rules={[
                  {
                    required: true,
                    message: 'Trường dữ liệu bắt buộc'
                  }
                ]}
              >
                <StyledDatepicker placeholder={'Chọn ngày tạo'} />
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
          {typeCustomer === 2 && (
            <div>
              <Row gutter={16}>
                <Col span={12}>
                  <Card
                    className='infoCustomer'
                    title='Thông tin chung Khách hàng Cá nhân'
                    style={{ fontSize: '18px' }}
                  >
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Tên khách hàng'}
                          name={'customerName'}
                          rules={[
                            {
                              required: true,
                              message: 'Trường dữ liệu bắt buộc'
                            }
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Giới tính'}
                          name={'gender'}
                          rules={[
                            {
                              required: true,
                              message: 'Trường dữ liệu bắt buộc'
                            }
                          ]}
                        >
                          <StyledSelect
                            placeholder={'Chọn giới tính'}
                            options={[
                              { value: 'Male', label: 'Nam' },
                              { value: 'Female', label: 'Nữ' }
                            ]}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Ngày sinh'}
                          name={'dayOfBirth'}
                          rules={[
                            {
                              required: true,
                              message: 'Trường dữ liệu bắt buộc'
                            }
                          ]}
                        >
                          <StyledDatepicker placeholder={'Chọn ngày sinh'} />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className='customHorizontal'
                          label={'CCCD'}
                          name={'cccd'}
                          rules={[
                            {
                              required: true,
                              message: 'Trường dữ liệu bắt buộc'
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
                          className='customHorizontal'
                          label={'Quốc tịch'}
                          name={'nationality'}
                        >
                          <StyledSelect
                            placeholder='Chọn quốc tịch'
                            options={[{ value: 1, label: 'Việt Nam' }]}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Ghi chú'}
                          name={'description'}
                        >
                          <Input.TextArea />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Card>
                  <Card
                    className='infoCustomer'
                    title='Nhân viên phụ trách'
                    style={{ marginTop: '16px' }}
                  >
                    <Table
                      columns={columns}
                      dataSource={tableData}
                      pagination={false}
                    />
                    <Button
                      type='dashed'
                      onClick={addRow}
                      block
                      icon={<FiPlus />}
                    >
                      Thêm nhân viên
                    </Button>
                  </Card>
                </Col>
                <Col span={12} gutter={16}>
                  <Card
                    className='infoCustomer'
                    title='Thông tin liên lạc Khách hàng Cá nhân'
                  >
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Email'}
                          name={'email'}
                          rules={[
                            {
                              required: true,
                              message: 'Trường dữ liệu bắt buộc'
                            }
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Số điện thoại'}
                          name={'phoneNumber'}
                        >
                          <Input />
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
                              message: 'Trường dữ liệu bắt buộc'
                            }
                          ]}
                        >
                          <StyledSelect
                            placeholder='Chọn quận/huyện'
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
                              message: 'Trường dữ liệu bắt buộc'
                            }
                          ]}
                        >
                          <StyledSelect
                            placeholder='Chọn tỉnh/thành phố'
                            options={provinces}
                            onChange={onChangeProvince}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </div>
          )}
          {typeCustomer === 1 && (
            <div>
              <Row gutter={16}>
                <Col xl={12}>
                  <Card
                    className='infoCustomer'
                    title='Thông tin chung Khách hàng Doanh nghiệp'
                    style={{ fontSize: '18px' }}
                  >
                    <Row gutter={16}>
                      <Col xl={8} stg>
                        <Form.Item
                          className='customHorizontal'
                          label={'Tên doanh nghiệp'}
                          name={'businessName'}
                          rules={[
                            {
                              required: true,
                              message: 'Trường dữ liệu bắt buộc'
                            }
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xl={8}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Mã số thuế'}
                          name={'taxCode'}
                          rules={[
                            {
                              required: true,
                              message: 'Trường dữ liệu bắt buộc'
                            }
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xl={8}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Số ĐKKD'}
                          name={'businessRegistrationNumber'}
                          rules={[
                            {
                              required: true,
                              message: 'Trường dữ liệu bắt buộc'
                            }
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col xl={8}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Quốc gia'}
                          name={'businessNationality'}
                        >
                          <StyledSelect
                            placeholder='Chọn quốc gia'
                            options={[{ value: 1, label: 'Việt Nam' }]}
                          />
                        </Form.Item>
                      </Col>
                      <Col xl={8}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Lĩnh vực kinh doanh'}
                          name={'businessIndustryId'}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xl={8}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Ghi chú'}
                          name={'description'}
                        >
                          <Input.TextArea />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col xl={8}>
                        <Form.Item
                          className='customHorizontal customDetailAddress'
                          label={'Địa chỉ'}
                          name={'detailAddress'}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xl={8}>
                        <Form.Item
                          className='customHorizontal customAddress'
                          label={' '}
                          name={'district'}
                          rules={[
                            {
                              required: true,
                              message: 'Trường dữ liệu bắt buộc'
                            }
                          ]}
                        >
                          <StyledSelect
                            placeholder='Chọn quận/huyện'
                            options={districts}
                          />
                        </Form.Item>
                      </Col>
                      <Col xl={8}>
                        <Form.Item
                          className='customHorizontal customAddress'
                          label={' '}
                          name={'city'}
                          rules={[
                            {
                              required: true,
                              message: 'Trường dữ liệu bắt buộc'
                            }
                          ]}
                        >
                          <StyledSelect
                            placeholder='Chọn tỉnh/thành phố'
                            options={provinces}
                            onChange={onChangeProvince}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Card>
                  <Card
                    title='Nhân viên phụ trách'
                    style={{ marginTop: '16px' }}
                  >
                    <Table
                      columns={columns}
                      dataSource={tableData}
                      pagination={false}
                    />
                    <Button
                      type='dashed'
                      onClick={addRow}
                      block
                      icon={<FiPlus />}
                    >
                      Thêm nhân viên
                    </Button>
                  </Card>
                </Col>
                <Col xl={12}>
                  <Card
                    className='infoCustomer'
                    title='Thông tin Người đại diện Doanh nghiệp'
                  >
                    <Row gutter={16}>
                      <Col xl={12}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Tên người đại diện'}
                          name={'name'}
                          rules={[
                            {
                              required: true,
                              message: 'Trường dữ liệu bắt buộc'
                            }
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xl={12}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Giới tính'}
                          name={'gender'}
                          rules={[
                            {
                              required: true,
                              message: 'Trường dữ liệu bắt buộc'
                            }
                          ]}
                        >
                          <StyledSelect
                            placeholder={'Chọn giới tính'}
                            options={[
                              { value: 'Male', label: 'Nam' },
                              { value: 'Female', label: 'Nữ' }
                            ]}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col xl={12}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Ngày sinh'}
                          name={'dayOfBirth'}
                          rules={[
                            {
                              required: true,
                              message: 'Trường dữ liệu bắt buộc'
                            }
                          ]}
                        >
                          <StyledDatepicker placeholder={'Chọn ngày sinh'} />
                        </Form.Item>
                      </Col>
                      <Col xl={12}>
                        <Form.Item
                          className='customHorizontal'
                          label={'CCCD'}
                          name={'cccd'}
                          rules={[
                            {
                              required: true,
                              message: 'Trường dữ liệu bắt buộc'
                            }
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col xl={12}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Quốc tịch'}
                          name={'nationality'}
                        >
                          <StyledSelect
                            placeholder='Chọn quốc tịch'
                            options={[{ value: 1, label: 'Việt Nam' }]}
                          />
                        </Form.Item>
                      </Col>
                      <Col xl={12}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Chức vụ'}
                          name={'position'}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col xl={12}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Email'}
                          name={'email'}
                          rules={[
                            {
                              required: true,
                              message: 'Trường dữ liệu bắt buộc'
                            }
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xl={12}>
                        <Form.Item
                          className='customHorizontal'
                          label={'Số điện thoại'}
                          name={'phoneNumber'}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </div>
          )}
        </Card>
      </Col>
    </Form>
  )
}
export default CustomerForm
