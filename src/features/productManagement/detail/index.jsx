import { Button, Card, Col, Flex, Form, Input, Row, Typography } from 'antd'
import { useState } from 'react'
import { ButtonOk } from '../../../assets/styles/button.style'

const ProductDetail = () => {
  const { Title } = Typography
  const [isUpdate, setIsUpdate] = useState(false)
  return (
    <div>
      <Row gutter={[24, 0]} style={{ marginBottom: '5px' }}>
        <Col md={20}>
          <Title level={4}>Chi tiết sản phẩm</Title>
        </Col>
        <Col md={4} style={{ display: 'flex', justifyContent: 'right' }}>
          {isUpdate ? (
            <Flex gap='small' align='flex-start' vertical>
              <Flex gap='small' wrap='wrap'>
                <Button
                  size={40}
                  style={{ borderColor: '#F58220', color: '#F58220' }}
                  onClick={() => setIsUpdate(false)}
                >
                  Hủy
                </Button>
                <Button
                  style={{ background: '#F58220', color: 'white' }}
                  size={40}
                  onClick={() => setIsUpdate(false)}
                >
                  Lưu
                </Button>
              </Flex>
            </Flex>
          ) : (
            <Flex gap='small' align='flex-start' vertical>
              <Flex gap='small' wrap='wrap'>
                <ButtonOk size={40} onClick={() => setIsUpdate(true)}>
                  Sửa
                </ButtonOk>
              </Flex>
            </Flex>
          )}
        </Col>
      </Row>

      <Card style={{ width: '1000px', margin: 'auto' }}>
        <Form layout='vertical'>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name='name'
                label='Tên Sản phẩm'
                rules={[{ required: true, message: 'Yêu cầu thông tin' }]}
              >
                <Input placeholder='Tên sản phẩm' disabled={!isUpdate} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name='code'
                label='Mã Sản phẩm'
                rules={[{ required: true, message: 'Yêu cầu thông tin' }]}
              >
                <Input disabled={!isUpdate} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label='Giá tiền'>
                <Input disabled={!isUpdate} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label='Số lượng'>
                <Input disabled={!isUpdate} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label='Đơn vị '>
                <Input disabled={!isUpdate} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label='Mô tả đặc điểm sản phẩm'>
                <Input.TextArea disabled={!isUpdate} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label='Ghi chú'>
                <Input.TextArea disabled={!isUpdate} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
}
export default ProductDetail
