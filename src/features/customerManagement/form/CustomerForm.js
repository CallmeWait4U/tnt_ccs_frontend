import { Button, Card, Col, Form, Input, Row, Table } from 'antd'
import { useState } from 'react'

import { Select, Switch, Typography } from 'antd'
import { FiPlus } from 'react-icons/fi'
import { TbTrashFilled } from 'react-icons/tb'
import { StyledDatepicker, StyledSelect } from '../../component/ComponentOfForm'

const CustomerForm = () => {
  const [typeCustomer, setTypeCustomer] = useState(1)
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
      title: 'Action',
      width: '7%',
      render: (item) => (
        <Button
          type='link'
          icon={
            <TbTrashFilled
              color='red'
              backgroundColor='red'
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
    <>
      <Row gutter={[24, 0]} style={{ marginBottom: '5px' }}>
        <Col md={20}>
          <Title level={4}> Thêm khách hàng mới</Title>
        </Col>
      </Row>
      <Card>
        <Form>
          <Row gutter={16}>
            <Col span={12} xl={8}>
              <Form.Item
                label={'Loại khách hàng'}
                rules={[
                  {
                    require: true,
                    message: 'this field is required!'
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
                rules={[
                  {
                    require: true,
                    message: 'this field is required!'
                  }
                ]}
              >
                <StyledSelect />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12} xl={8}>
              <Form.Item
                label={'Nguồn khách hàng'}
                rules={[
                  {
                    require: true,
                    message: 'this field is required!'
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
              {' '}
              <Form.Item
                label={'Ngày tạo'}
                rules={[
                  {
                    require: true,
                    message: 'this field is required!'
                  }
                ]}
              >
                <StyledDatepicker />
              </Form.Item>
            </Col>
            <Col span={12} xl={8}>
              {' '}
              <Form.Item
                label={'Tài khoản'}
                rules={[
                  {
                    require: true,
                    message: 'this field is required!'
                  }
                ]}
              >
                <Switch />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        {typeCustomer === 2 && (
          <div>
            <Row gutter={16}>
              <Col span={12}>
                <Card title='Thông tin chung của khách hàng'>
                  <Form layout='vertical'>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label={'Tên khách hàng'}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label={'Giới tính'}>
                          <StyledSelect />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label={'Ngày sinh'}>
                          <StyledDatepicker />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label={'CCCD'}>
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label={'Quốc tịch'}>
                          <StyledSelect />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label={'Ghi chú'}>
                          <Input.TextArea />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Card>
                <Card title='Nhân viên phụ trách' style={{ marginTop: '16px' }}>
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
                <Card title='Thông tin liên lạc của khách hàng'>
                  <Form layout='vertical'>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item label={'Số điện thoại'}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item label={'Email'}>
                          <StyledSelect />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={8}>
                        <Form.Item label={'Địa chỉ'}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label={' '}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label={' '}>
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
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
                  title='Thông tin doanh nghiệp'
                  style={{ marginTop: '16px' }}
                >
                  <Form layout='vertical'>
                    <Row gutter={16}>
                      <Col xl={8}>
                        <Form.Item label={'Tên doanh nghiệp'}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xl={8}>
                        <Form.Item label={'Mã số thuế'}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xl={8}>
                        <Form.Item label={'Số ĐKKD'}>
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col xl={8}>
                        <Form.Item label={'Quốc gia'}>
                          <Select />
                        </Form.Item>
                      </Col>
                      <Col xl={8}>
                        <Form.Item label={'Lĩnh vực kinh doanh'}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xl={8}>
                        <Form.Item label={'Ghi chú'}>
                          <Input.TextArea />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col xl={8}>
                        <Form.Item label={'Địa chỉ'}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xl={8}>
                        <Form.Item label=' '>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xl={8}>
                        <Form.Item label={' '}>
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Card>
                <Card title='Nhân viên phụ trách' style={{ marginTop: '16px' }}>
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
                  title='Thông tin người đại diện'
                  style={{ marginTop: '16px' }}
                >
                  <Form layout='vertical'>
                    <Row gutter={16}>
                      <Col xl={12}>
                        <Form.Item label={'Tên người đại diện'}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xl={12}>
                        <Form.Item label={'Giới tính'}>
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col xl={12}>
                        <Form.Item label={'Ngày sinh'}>
                          <StyledDatepicker />
                        </Form.Item>
                      </Col>
                      <Col xl={12}>
                        <Form.Item label={'CCCD'}>
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col xl={12}>
                        <Form.Item label={'Quốc tịch'}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xl={12}>
                        <Form.Item label={'Chức vụ'}>
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col xl={12}>
                        <Form.Item label={'Số điện thoại'}>
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xl={12}>
                        <Form.Item label={'Email'}>
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </Card>
    </>
  )
}
export default CustomerForm
