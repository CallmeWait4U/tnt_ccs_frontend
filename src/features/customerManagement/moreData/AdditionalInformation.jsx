import { Button, Col, Flex, Form, Input, Row, Table, Typography } from 'antd'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { TbTrashFilled } from 'react-icons/tb'
import { useReadCustomer } from '../../../api/Admin/customer'
import { ButtonOk } from '../../../assets/styles/button.style'
import { StyledDatepicker, StyledSelect } from '../../component/ComponentOfForm'
const AdditionalInformation = ({ id, typeCustomer }) => {
  const [isUpdate, setIsUpdate] = useState(false)
  const { data: customerInfo } = useReadCustomer(id)

  const [tableData, setTableData] = useState([
    {
      index: 1,
      name: 'Lê Huy Ngọ',
      code: 'SP-001',
      key: 1
    },
    {
      index: 2,
      name: 'Lê Huy Ngọ',
      code: 'SP-001',
      key: 2
    }
  ])
  const { Title } = Typography
  const [form] = Form.useForm()

  const data = [
    { code: 'HT-0001', date: '23-11-2023', status: 'Đã gửi' },
    { code: 'HT-0001', date: '23-11-2023', status: 'Đã gửi' }
  ]

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
  useEffect(() => {
    if (customerInfo) {
      form.setFieldsValue({
        name: customerInfo.business.representativeName,
        gender: customerInfo.business.representativeGender,
        dayOfBirth: dayjs(customerInfo.business.representativeBirthday),
        cccd: customerInfo.business.representativeCccd,
        nationality: customerInfo.business.nationality,
        position: customerInfo.business.representativePosition,
        email: customerInfo.business.representativeEmail,
        phoneNumber: customerInfo.business.representativePhone
      })
    }
  }, [customerInfo])
  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 12
    }
  }

  const onFinish = (values) => {
    console.log(values)
  }

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

  return (
    <>
      <Form
        {...layout}
        form={form}
        name='control-hooks'
        onFinish={onFinish}
        key={'additionalInfo'}
      >
        {typeCustomer === 1 && (
          <div>
            <Row gutter={16} style={{ paddingBottom: '12px' }}>
              <Col span={12} xl={18}>
                <Title level={4}>Thông tin Người đại diện Doanh nghiệp</Title>
              </Col>
              <Col md={4} style={{ display: 'contents' }}>
                {isUpdate ? (
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
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item
                  className='customHorizontal'
                  label={'Tên người đại diện'}
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
                      { value: 'Male', label: 'Nam' },
                      { value: 'Female', label: 'Nữ' }
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
                    disabled={!isUpdate}
                    placeholder={'Chọn ngày sinh'}
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
                  <StyledSelect
                    placeholder='Chọn quốc tịch'
                    options={[{ value: 1, label: 'Việt Nam' }]}
                    disabled={!isUpdate}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  className='customHorizontal'
                  label={'Chức vụ'}
                  name={'position'}
                >
                  <Input disabled={!isUpdate} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8} xl={8}>
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
              <Col span={8} xl={8}>
                <Form.Item
                  className='customHorizontal'
                  label={'Số điện thoại'}
                  name={'phoneNumber'}
                >
                  <Input disabled={!isUpdate} />
                </Form.Item>
              </Col>
            </Row>
          </div>
        )}

        <Title level={4}>Thông tin nhân viên</Title>

        <Row gutter={16}>
          <Col span={24} style={{ paddingBottom: '15px' }}>
            <Table
              columns={columns}
              dataSource={tableData}
              pagination={false}
            />
            <Button type='dashed' onClick={addRow} block icon={<FiPlus />}>
              Thêm nhân viên
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}
export default AdditionalInformation
