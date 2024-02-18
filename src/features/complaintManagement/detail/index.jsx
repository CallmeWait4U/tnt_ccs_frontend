import { Button, Col, Form, Input, Row, Table, Typography } from 'antd'
import Card from 'antd/lib/card/Card'
import { useState } from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import { MdRadioButtonChecked } from 'react-icons/md'
import { ButtonOk } from '../../../assets/styles/button.style'
import {
  StyledDatepicker,
  StyledModal,
  StyledSelect
} from '../../component/ComponentOfForm'

const ComplaintDetail = () => {
  const problems = [
    'Sản phẩm bị lỗi',
    'Sản phẩm không đúng mô tả',
    'Sản phẩm không đúng kích thước',
    'Sản phẩm không đúng màu sắc',
    'Sản phẩm không đúng số lượng',
    'Sản phẩm không đúng chất lượng'
  ]
  const productsProblem = [
    'Tai nghe bluetooth XT80',
    'Chuột không dây Inphic PM6'
  ]
  const { Title } = Typography
  const [isUpdate, setIsUpdate] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const columns = [
    {
      title: 'Mã nhân viên',
      dataIndex: 'code',
      key: 'code',
      render: (text) => <Input />
    },
    {
      title: 'Tên nhân viên CSKH',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Input />
    },
    {
      title: 'Ngày thực hiện',
      dataIndex: 'date',
      key: 'date',
      render: (text) => <Input />
    },
    {
      title: 'Hoạt động',
      dataIndex: 'action',
      key: 'action',
      render: (text) => <Input />
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
      key: 'note',
      render: (text) => <Input />
    }
  ]

  const [dataTable, setDataTable] = useState([
    {
      index: 1,
      key: '1',
      code: 'NV001',
      name: 'Nguyễn Văn A',
      date: '20/10/2021',
      action: 'Xử lí lại',
      note: 'Không có ghi chú'
    },
    {
      index: 2,
      key: '2',
      code: 'NV002',
      name: 'Nguyễn Văn B',
      date: '20/10/2021',
      action: 'Xử lí lại',
      note: 'Không có ghi chú'
    }
  ])
  const addRow = () => {
    const maxIndex = dataTable.reduce(
      (max, item) => (item.index > max ? item.index : max),
      0
    )
    const newItem = {
      index: maxIndex + 1,
      key: '2',
      code: 'NV002',
      name: 'Nguyễn Văn B',
      date: '20/10/2021',
      action: 'Xử lí lại',
      note: 'Không có ghi chú'
    }

    setDataTable([...dataTable, newItem])
  }
  return (
    <div>
      <Row gutter={[24, 0]} style={{ marginBottom: '5px' }}>
        <Col md={20}>
          <Title level={4}>Khiếu nại #1</Title>
        </Col>
        <Col
          md={4}
          style={{ display: 'flex', justifyContent: 'right', gap: '8px' }}
        >
          <ButtonOk
            style={{ fontSize: '14px', height: '42px', background: '#F43F5E' }}
          >
            Xóa
          </ButtonOk>
          <ButtonOk
            type='primary'
            style={{ fontSize: '14px', height: '42px' }}
            onClick={() => setIsOpen(true)}
          >
            Lịch sử hoạt động
          </ButtonOk>
        </Col>
      </Row>

      <Card>
        <Form layout='vertical'>
          <Row gutter={16}>
            <Col span={4} offset={2}>
              <Form.Item name='type' label='Loại khiếu nại'>
                <Input placeholder='Tên khách hàng' disabled={!isUpdate} />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Form.Item name='date' label='Ngày gửi'>
                <StyledDatepicker disabled={!isUpdate} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={4} offset={2}>
              <Form.Item name='code' label='Mã đơn hàng'>
                <Input disabled={!isUpdate} />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Form.Item name='status' label='Trạng thái'>
                <StyledSelect
                  options={[
                    { value: '1', label: 'Đã xử lí' },
                    { value: '2', label: 'Chưa xử lí' },
                    { value: '3', label: 'Cần xử lý lại' }
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[8, 16]}>
            <Col span={12}>
              <Card title={'Thông tin chung của khách hàng'}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item name='name' label='Tên khách hàng'>
                      <Input
                        placeholder='Tên khách hàng'
                        disabled={!isUpdate}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name='sex' label='Giới tính'>
                      <StyledSelect disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name='birthday' label='Ngày sinh'>
                      <StyledDatepicker disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item name='cccd' label='CCCD'>
                      <Input placeholder='Số điện thoại' disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name='email' label='Email'>
                      <Input placeholder='Số điện thoại' disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name='phone' label='Số điện thoại'>
                      <Input placeholder='Số điện thoại' disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item name='address' label='Địa chỉ'>
                      <Input placeholder='Địa chỉ' disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name='province' label=' '>
                      <Input disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name='district' label=' '>
                      <Input disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={12}>
              <Card title={'Thông tin khiếu nại'}>
                <Row>
                  <span>Những vấn đề bạn gặp với sản phẩm?</span>
                  {problems.map((item, index) => (
                    <Col span={24} key={index}>
                      <div style={{ display: 'flex', marginLeft: 10 }}>
                        <FiCheckSquare />{' '}
                        <span style={{ marginLeft: 10 }}>{item}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
                <Row style={{ marginTop: '20px' }}>
                  <span>Hình ảnh minh họa</span>
                  <Col span={24}>
                    <div style={{ display: 'flex', marginLeft: 10 }}>
                      <span>hinhf1.jpg</span>

                      <button
                        style={{
                          marginLeft: 10,
                          border: '1px',
                          borderRadius: '5px',
                          background: '#8b8989',
                          padding: '2px 5px'
                        }}
                      >
                        Tải hình ảnh xuống
                      </button>
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                  <Col span={24}>
                    <span>Sản phẩm khiếu nại</span>
                  </Col>
                  <Col span={24}>
                    <div
                      style={{
                        width: '100%',

                        padding: '10px 0px 10px 10px',
                        borderWidth: '2px',
                        borderColor: 'black',
                        borderRadius: '5px'
                      }}
                    >
                      {productsProblem.map((item, index) => (
                        <div style={{ display: 'flex', marginLeft: 10 }}>
                          <MdRadioButtonChecked />
                          <span style={{ marginLeft: 10 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                  <Col span={24}>
                    <span>Mô tả chi tiết</span>
                  </Col>
                  <Col span={24}>
                    <div
                      style={{
                        width: '100%',

                        padding: '10px 0px 10px 10px',
                        borderWidth: '2px',
                        borderColor: 'black',
                        borderRadius: '5px'
                      }}
                    >
                      <span>
                        Sản phẩm bị lỗi màu, không đúng với mô tả bản đầu trên
                        quảng cáo.
                      </span>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Form>
      </Card>
      {isOpen && (
        <StyledModal
          title={
            <div
              style={{
                display: 'flex',
                gap: '5px',
                alignContent: 'space-between'
              }}
            >
              <div style={{ width: '90%' }}>
                <h2>Lịch sử hoạt động</h2>
              </div>
              <div style={{ display: 'flex', gap: '5px' }}>
                <Button onClick={() => setIsOpen(false)}>Hủy </Button>

                <Button style={{ background: '#F58220' }} onClick={addRow}>
                  Thêm
                </Button>
              </div>
            </div>
          }
          closeIcon={null}
          open={isOpen}
          footer={null}
        >
          <Table columns={columns} dataSource={dataTable} />
        </StyledModal>
      )}
    </div>
  )
}
export default ComplaintDetail
