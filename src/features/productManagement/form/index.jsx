import { useMutation } from '@tanstack/react-query'
import { Button, Card, Col, Flex, Form, Input, Row, Typography } from 'antd'
import { useCreateProduct } from '../../../api/Admin/product'
import '../productManagement.css'
const NewProduct = () => {
  const { Title } = Typography
  const { mutate: mutateCreate } = useMutation({ mutationFn: useCreateProduct })

  const handleFormSubmit = async (values) => {
    console.log('values', values)
    mutateCreate(values, {
      onSuccess: (data) => {
        console.log('success', data)
      },
      onError: (error) => {
        console.log('error', error)
      }
    })
  }

  return (
    <div>
      <Form className='tabled' onFinish={handleFormSubmit}>
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
              Tạo mới sản phẩm
            </Title>
          </Col>
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
                  htmlType='submit'
                >
                  Lưu
                </Button>
              </Flex>
            </Flex>
          </Col>
        </Row>
        <Card
          className='productForm'
          style={{
            width: '1000px',
            margin: 'auto',
            height: 680,
            maxHeight: 680,
            overflowX: 'hidden'
          }}
        >
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                className='customHorizontal'
                name='productName'
                label='Tên Sản phẩm'
                rules={[{ required: true, message: 'Yêu cầu thông tin' }]}
              >
                <Input placeholder='Nhập tên Sản phẩm' />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                className='customHorizontal'
                name='productCode'
                label='Mã Sản phẩm'
                rules={[{ required: true, message: 'Yêu cầu thông tin' }]}
              >
                <Input placeholder='Nhập mã Sản phẩm' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                className='customHorizontal'
                name='price'
                label='Giá tiền'
                rules={[{ required: true, message: 'Yêu cầu thông tin' }]}
              >
                <Input placeholder='Nhập giá tiền' />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                className='customHorizontal'
                name='quantity'
                label='Số lượng'
                rules={[{ required: true, message: 'Yêu cầu thông tin' }]}
              >
                <Input placeholder='Nhập số lượng' />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                className='customHorizontal'
                name='unit'
                label='Đơn vị '
              >
                <Input placeholder='Nhập đơn vị' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                className='customHorizontal'
                name='features'
                label='Mô tả đặc điểm sản phẩm'
              >
                <Input.TextArea
                  placeholder='Nhập mô tả'
                  style={{ height: 220 }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                className='customHorizontal'
                name='description'
                label='Ghi chú'
              >
                <Input.TextArea
                  placeholder='Nhập ghi chú'
                  style={{ height: 80 }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
    </div>
  )
}
export default NewProduct
