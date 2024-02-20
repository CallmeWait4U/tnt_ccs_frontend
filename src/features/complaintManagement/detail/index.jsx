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
import '../complaintManagement.css'

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
            Khiếu nại #1
          </Title>
        </Col>
        <Col
          md={4}
          style={{ display: 'flex', justifyContent: 'right', gap: '8px' }}
        >
          <ButtonOk
            className='deleteComplainBtn'
            style={{ fontSize: '14px', height: '42px', background: '#F43F5E' }}
          >
            Xóa
          </ButtonOk>
          <ButtonOk
            type='primary'
            className='historyActBtn'
            style={{ fontSize: '14px', height: '42px' }}
            onClick={() => setIsOpen(true)}
          >
            Lịch sử hoạt động
          </ButtonOk>
        </Col>
      </Row>

      <Card className='complaintForm'>
        <Form>
          <Row gutter={16}>
            <Col span={4} offset={1}>
              <Form.Item name='type' label='Loại khiếu nại'>
                <StyledSelect
                  options={[
                    { value: 'Sản phẩm', label: 'Sản phẩm' },
                    { value: 'Vận chuyển', label: 'Vận chuyển' },
                    { value: 'Nhân viên', label: 'Nhân viên' }
                  ]}
                  placeholder='Chọn loại yêu cầu'
                  disabled={!isUpdate}
                />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Form.Item name='date' label='Ngày gửi'>
                <StyledDatepicker disabled={!isUpdate} />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Form.Item name='code' label='Mã hóa đơn'>
                <Input disabled={!isUpdate} />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Form.Item name='status' label='Trạng thái'>
                <StyledSelect
                  options={[
                    { value: '1', label: 'Chưa xử lí' },
                    { value: '2', label: 'Đang xử lí' },
                    { value: '3', label: 'Đã xử lí' },
                    { value: '4', label: 'Xử lý lại' }
                  ]}
                  disabled={!isUpdate}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[8, 16]} style={{ marginRight: '24px' }}>
            <Col span={12}>
              <Card title={'Thông tin chung của khách hàng'}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      className='customHorizontal'
                      name='name'
                      label='Tên khách hàng'
                    >
                      <Input
                        placeholder='Tên khách hàng'
                        disabled={!isUpdate}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      className='customHorizontal'
                      name='sex'
                      label='Giới tính'
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
                      name='birthday'
                      label='Ngày sinh'
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
                      name='cccd'
                      label='CCCD'
                    >
                      <Input placeholder='Nhập CCCD' disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      className='customHorizontal'
                      name='email'
                      label='Email'
                    >
                      <Input placeholder='Nhập email' disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      className='customHorizontal'
                      name='phone'
                      label='Số điện thoại'
                    >
                      <Input
                        placeholder='Nhập số điện thoại'
                        disabled={!isUpdate}
                      />
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
                        disabled={!isUpdate}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={12}>
              <Card title={'Thông tin khiếu nại'}>
                <Row>
                  <span style={{ paddingBottom: '5px' }}>
                    Những vấn đề bạn gặp với sản phẩm?
                  </span>
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
                  <span style={{ paddingBottom: '5px' }}>
                    Hình ảnh minh họa
                  </span>
                  <Col span={24}>
                    <div style={{ display: 'flex', marginLeft: 10 }}>
                      <span>hinhf1.jpg</span>

                      <button
                        style={{
                          marginLeft: 10,
                          border: '1px',
                          borderRadius: '5px',
                          borderColor: 'black',
                          background: '#E9E6E6',
                          padding: '2px 5px'
                        }}
                      >
                        Tải hình ảnh xuống
                      </button>
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                  <Col span={24} style={{ paddingBottom: '5px' }}>
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
                  <Col span={24} style={{ paddingBottom: '5px' }}>
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
