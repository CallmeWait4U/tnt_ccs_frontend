import { Button, Card, Col, Flex, Form, Input, Row, Typography } from 'antd'

const NewProduct = () => {
  const { Title } = Typography

  return (
    <div>
      <Row gutter={[24, 0]} style={{ marginBottom: '5px' }}>
        <Col md={20}>
          <Title level={4}> Tạo mới sản phẩm</Title>
        </Col>
        <Col md={4} style={{ display: 'flex', justifyContent: 'right' }}>
          <Flex gap='small' align='flex-start' vertical>
            <Flex gap='small' wrap='wrap'>
              <Button
                size={40}
                style={{ borderColor: '#F58220', color: '#F58220' }}
              >
                Hủy
              </Button>
              <Button
                style={{ background: '#F58220', color: 'white' }}
                size={40}
              >
                Tạo
              </Button>
            </Flex>
          </Flex>
        </Col>
      </Row>

      <Card style={{ width: '1000px', margin: 'auto' }}>
        <Form layout='vertical'>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name='name'
                label='Tên Sản phẩm'
                rules={[
                  { required: true, message: 'Vui lòng nhập tên sản phẩm' }
                ]}
              >
                <Input placeholder='Tên sản phẩm' />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name='code'
                label='Mã Sản phẩm'
                rules={[
                  { required: true, message: 'Vui lòng nhập mã sản phẩm' }
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item label='Giá tiền'>
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label='Số lượng'>
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label='Đơn vị '>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label='Mô tả đặc điểm sản phẩm'>
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label='Ghi chú'>
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
}
export default NewProduct
