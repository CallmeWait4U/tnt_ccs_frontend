import { useMutation } from '@tanstack/react-query'
import {
  Button,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Select,
  Table,
  Typography,
  message
} from 'antd'
import Card from 'antd/lib/card/Card'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  useReadPriceQuoteRequest,
  useSendPriceQuoteRequest
} from '../../../../api/Customer/priceQuote'
import { StyledDatepicker } from '../../../component/ComponentOfForm'
const ClientQuoteRequestDetail = () => {
  const { state } = useLocation()
  const { data: priceQuoteRequest } = useReadPriceQuoteRequest(state)
  const { Title } = Typography
  const [form] = Form.useForm()
  const { mutate: sendRequest } = useMutation({
    mutationFn: useSendPriceQuoteRequest,
    onSuccess: () => {
      console.log('Gửi thành công')
      message.success('Gửi yêu cầu báo giá thành công')
    }
  })
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
      title: 'SỐ LƯỢNG',
      dataIndex: 'quantity',
      key: 'quantity'
    },
    {
      title: 'ĐƠN VỊ',
      dataIndex: 'unit',
      key: 'unit'
    }
  ]
  useEffect(() => {
    if (priceQuoteRequest) {
      form.setFieldsValue({
        code: priceQuoteRequest.code,
        createdDate: dayjs(priceQuoteRequest.createdDate),
        status: priceQuoteRequest.status
      })
    }
  }, [form, priceQuoteRequest])
  const handleSend = () => {
    sendRequest({ uuid: priceQuoteRequest?.uuid })
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
            Chi tiết yêu cầu báo giá
          </Title>
        </Col>
        {priceQuoteRequest?.status === 'UNSENT' && (
          <Col md={4} style={{ display: 'flex', justifyContent: 'right' }}>
            <Flex gap='small' align='flex-start' vertical>
              <Flex gap='small' wrap='wrap'>
                <Button
                  style={{
                    background: '#F58220',
                    color: 'white',
                    width: '80px',
                    height: '40px'
                  }}
                  size={40}
                  onClick={handleSend}
                >
                  Gửi
                </Button>
              </Flex>
            </Flex>
          </Col>
        )}
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
              <Col md={6} offset={1}>
                <Form.Item label='Mã yêu cầu báo giá' name='code'>
                  <Input disabled />
                </Form.Item>
              </Col>
              <Col md={6} offset={1}>
                <Form.Item label='Ngày tạo yêu cầu' name='createdDate'>
                  <StyledDatepicker disabled />
                </Form.Item>
              </Col>
              <Col md={6} offset={1}>
                <Form.Item label='Trạng thái' name='status'>
                  <Select
                    disabled
                    options={[
                      { label: 'Chưa gửi', value: 'UNSENT' },
                      { label: 'Đã gửi', value: 'SENT' }
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <Row>
            <Col span={24}>
              <Table
                bordered
                style={{ border: '2px solid' }}
                dataSource={priceQuoteRequest?.products?.map((item, index) => ({
                  ...item,
                  key: index
                }))}
                columns={columns}
                pagination={false}
              />
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  )
}
export default ClientQuoteRequestDetail
