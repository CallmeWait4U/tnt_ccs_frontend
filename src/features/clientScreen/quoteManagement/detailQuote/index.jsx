import { Col, Form, Input, Row, Table, Typography } from 'antd'
import Card from 'antd/lib/card/Card'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useReadPriceQuote } from '../../../../api/Customer/priceQuote'
import { StyledDatepicker } from '../../../component/ComponentOfForm'

const ClientQuoteDetail = () => {
  const { state } = useLocation()
  const { data: priceQuote } = useReadPriceQuote(state)
  const [form] = Form.useForm()
  const { Title } = Typography
  const columns = [
    {
      title: 'STT',
      dataIndex: 'code',
      key: 'code',
      render: (text, record, index) => index + 1
    },
    {
      title: 'TÊN SẢN PHẨM',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'ĐƠN VỊ',
      dataIndex: 'unit',
      key: 'unit'
    },
    {
      title: 'SỐ LƯỢNG',
      dataIndex: 'quantity',
      key: 'quantity'
    },
    {
      title: 'GIÁ THƯƠNG LƯỢNG',
      dataIndex: 'negotiatedPrice',
      key: 'negotiatedPrice'
    }
  ]

  useEffect(() => {
    if (priceQuote) {
      form.setFieldsValue({
        code: priceQuote.code,
        createdDate: dayjs(priceQuote.createdDate),
        status: priceQuote.status,
        sentDate: dayjs(priceQuote.sentDate)
      })
    }
  }, [form, priceQuote])
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
            Chi tiết báo giá
          </Title>
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
          <Form layout='vertical' form={form}>
            <Row gutter={16}>
              <Col md={6} offset={1} span={8}>
                <Form.Item label='Mã báo giá' name='code'>
                  <Input disabled />
                </Form.Item>
              </Col>
              <Col md={6} offset={1} span={8}>
                <Form.Item label='Ngày gửi' name='sentDate'>
                  <StyledDatepicker disabled />
                </Form.Item>
              </Col>
              <Col md={6} offset={1} span={8}>
                <Form.Item label='Ngày tạo' name='createdDate'>
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
                dataSource={priceQuote?.products.map((item, index) => ({
                  ...item,
                  key: index
                }))}
                columns={columns}
                pagination={false}
                footer={() => (
                  <Row>
                    <Col span={20}>
                      <p style={{ fontSize: '16px', fontWeight: 'bold' }}>
                        Tổng cộng
                      </p>
                    </Col>
                    <Col span={4} style={{ textAlign: 'left' }}>
                      <p style={{ fontSize: '16px' }}>{priceQuote?.total}</p>
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
export default ClientQuoteDetail
