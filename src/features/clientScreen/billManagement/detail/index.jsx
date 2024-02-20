import { Col, Form, Input, Row, Table, Typography } from 'antd'
import Card from 'antd/lib/card/Card'
import { ButtonOk } from '../../../../assets/styles/button.style'
import { StyledDatepicker } from '../../../component/ComponentOfForm'

const ClientBillDetail = () => {
  const { Title } = Typography
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
      price: 100000,
      number: '1',
      total: 100000
    },
    {
      key: '2',
      code: '2',
      name: 'Chuột không dây Inphic PM6',
      price: 100000,
      number: '1',
      total: 100000
    },
    {
      key: '3',
      code: '3',
      name: 'Tai nghe bluetooth XT80',
      price: 100000,
      number: '1',
      total: 100000
    },
    {
      key: '4',
      code: '4',
      name: 'Chuột không dây Inphic PM6',
      price: 100000,
      number: '1',
      total: 100000
    }
  ]

  const sumBill = (data) => {
    let sum = 0
    data.forEach((item) => (sum = sum + item.total))
    return Math.floor(sum)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
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
            Chi tiết hóa đơn
          </Title>
        </Col>
        <Col
          md={4}
          style={{ display: 'flex', justifyContent: 'right', gap: '8px' }}
        >
          <ButtonOk
            className='cancelComplainBtn'
            style={{ fontSize: '14px', height: '42px', background: '#F43F5E' }}
          >
            Khiếu nại về hóa đơn
          </ButtonOk>
        </Col>
      </Row>
      <div
        style={{
          alignContent: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Card style={{ maxWidth: '1053px', minWidth: '50vw' }}>
          <Form layout='vertical'>
            <Row gutter={16}>
              <Col md={6} offset={1}>
                <Form.Item label='Mã báo giá'>
                  <Input disabled />
                </Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label='Ngày gửi'>
                  <StyledDatepicker disabled />
                </Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label='Trạng thái'>
                  <Input disabled />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col md={6} offset={1}>
                <Form.Item label='Nhân viên tạo'>
                  <Input disabled />
                </Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label='Mã Nhân viên tạo'>
                  <Input disabled />
                </Form.Item>
              </Col>
              <Col md={6}>
                <Form.Item label='Ngày tạo'>
                  <StyledDatepicker disabled />
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
                        Tổng tiền
                      </p>
                    </Col>
                    <Col span={4} style={{ textAlign: 'left' }}>
                      <p style={{ fontSize: '16px' }}>{sumBill(dataTable)}</p>
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
