import { Col, Form, Input, Row, Table, Typography } from 'antd'
import Card from 'antd/lib/card/Card'
import { useState } from 'react'
import { StyledDatepicker } from '../../../component/ComponentOfForm'

const ClientBillDetail = () => {
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
      title: 'STT',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: 'TÊN SẢN PHẨM',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'GIÁ TIỀN',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'SỐ LƯỢNG',
      dataIndex: 'number',
      key: 'number'
    },
    {
      title: 'THÀNH TIỀN',
      dataIndex: 'total',
      key: 'total'
    }
  ]

  const dataTable = [
    {
      key: '1',
      code: '1',
      name: 'Tai nghe bluetooth XT80',
      price: '100.000',
      number: '1',
      total: '100.000'
    },
    {
      key: '2',
      code: '2',
      name: 'Chuột không dây Inphic PM6',
      price: '100.000',
      number: '1',
      total: '100.000'
    },
    {
      key: '3',
      code: '3',
      name: 'Tai nghe bluetooth XT80',
      price: '100.000',
      number: '1',
      total: '100.000'
    },
    {
      key: '4',
      code: '4',
      name: 'Chuột không dây Inphic PM6',
      price: '100.000',
      number: '1',
      total: '100.000'
    }
  ]
  return (
    <div>
      <Row gutter={[24, 0]} style={{ marginBottom: '5px' }}>
        <Col md={20}>
          <Title level={4}> Chi tiết hóa đơn</Title>
        </Col>
      </Row>
      <div
        style={{
          alignContent: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Card style={{ maxWidth: '1053px' }}>
          <Form layout='vertical'>
            <Row gutter={16}>
              <Col md={8}>
                <Form.Item label='Mã báo giá'>
                  <Input />
                </Form.Item>
              </Col>
              <Col md={8}>
                <Form.Item label='Ngày gửi'>
                  <StyledDatepicker />
                </Form.Item>
              </Col>
              <Col md={8}>
                <Form.Item label='Trạng thái'>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col md={8}>
                <Form.Item label='Nhân viên tạo'>
                  <Input />
                </Form.Item>
              </Col>
              <Col md={8}>
                <Form.Item label='Mã Nhân viên tạo'>
                  <Input />
                </Form.Item>
              </Col>
              <Col md={8}>
                <Form.Item label='Ngày tạo'>
                  <StyledDatepicker />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <Row>
            <Col span={24}>
              <Table
                bordered
                style={{ border: '2px solid' }}
                dataSource={dataTable}
                columns={columns}
                pagination={false}
                footer={() => (
                  <Row>
                    <Col span={20}>
                      <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
                        Thành tiền
                      </p>
                    </Col>
                    <Col span={4} style={{ textAlign: 'left' }}>
                      <p style={{ fontSize: '16px' }}> 400.000</p>
                    </Col>
                  </Row>
                )}
              />
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  )
}
export default ClientBillDetail
