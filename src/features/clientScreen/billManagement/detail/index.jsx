import { Col, Form, Input, Row, Select, Table, Typography } from 'antd'
import Card from 'antd/lib/card/Card'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useReadBill } from '../../../../api/Customer/bill'
import { ButtonOk } from '../../../../assets/styles/button.style'
import { PATH } from '../../../../contants/common'
import { StyledDatepicker } from '../../../component/ComponentOfForm'

const ClientBillDetail = () => {
  const location = useLocation()
  const paramsString = location.pathname.split('/')[3]
  const paramsArray = paramsString.split('&')
  const uuid = paramsArray[0]
  const navigate = useNavigate()
  const domain = '/' + window.location.pathname.split('/')[1]
  const { data: billInfo } = useReadBill(uuid)
  const { Title } = Typography
  const [form] = Form.useForm()
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
      title: 'GIÁ TIỀN',
      dataIndex: 'fixedPrice',
      key: 'fixedPrice'
    },
    {
      title: 'SỐ LƯỢNG',
      dataIndex: 'quantity',
      key: 'quantity'
    },
    {
      title: 'GIÁ TIỀN',
      dataIndex: 'fixedPrice',
      key: 'fixedPrice'
    }
  ]

  useEffect(() => {
    if (billInfo) {
      form.setFieldsValue({
        code: billInfo.code,
        createdDate: dayjs(billInfo.createdDate),
        status: billInfo.status,
        employee: billInfo.employee,
        employeeCode: billInfo.employeeCode
      })
    }
  }, [billInfo, form])
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
            onClick={() =>
              navigate(`${domain + PATH.CUSTOME_URL.NEWCOMPLAINT}`, {
                state: billInfo
              })
            }
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
          <Form layout='vertical' form={form}>
            <Row gutter={16} span={24}>
              <Col md={6} offset={1} span={8}>
                <Form.Item label='Mã đơn hàng' name='code'>
                  <Input disabled />
                </Form.Item>
              </Col>
              <Col md={6} offset={1} span={8}>
                <Form.Item label='Ngày gửi' name='createdDate'>
                  <StyledDatepicker disabled />
                </Form.Item>
              </Col>
              <Col md={6} offset={1} span={8}>
                <Form.Item label='Trạng thái' name='status'>
                  <Select
                    disabled
                    options={[
                      { value: 'UNPAID', label: 'Chưa thanh toán' },
                      { value: 'PAID', label: 'Đã thanh toán' }
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              {/* <Col md={6}>
                <Form.Item label='Ngày tạo'>
                  <StyledDatepicker disabled />
                </Form.Item>
              </Col> */}
            </Row>
          </Form>
          <Row>
            <Col span={24}>
              <Table
                bordered
                style={{ border: '2px solid' }}
                dataSource={billInfo?.products?.map((item, index) => ({
                  ...item,
                  key: index
                }))}
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
                      <p style={{ fontSize: '16px' }}>{billInfo?.total}</p>
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
