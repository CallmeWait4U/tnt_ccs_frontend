import { useMutation } from '@tanstack/react-query'
import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  Input,
  InputNumber,
  Row,
  Typography
} from 'antd'
import { useCreatePhase } from '../../../api/Admin/phase'
import '../phaseManagement.css'
const NewPhase = () => {
  const { Title } = Typography
  const { mutate: mutateCreate } = useMutation({
    mutationFn: useCreatePhase,
    onSuccess: () => {
      console.log('Create success')
    }
  })
  const onFinish = (values) => {
    mutateCreate(values)
  }
  return (
    <>
      <Form className='tabled' onFinish={onFinish}>
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
              Tạo mới giai đoạn
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
        <Card className='phaseForm' style={{ width: '1000px', margin: 'auto' }}>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                className='customHorizontal'
                name='name'
                label='Tên Giai đoạn'
                rules={[{ required: true, message: 'Yêu cầu thông tin' }]}
              >
                <Input placeholder='Tên giai đoạn' />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                className='customHorizontal'
                name='priority'
                label='Thứ tự giai đoạn'
                rules={[{ required: true, message: 'Yêu cầu thông tin' }]}
              >
                <InputNumber placeholder='Thứ tự giai đoạn' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                className='customHorizontal'
                name='description'
                label='Mô tả giai đoạn'
              >
                <Input.TextArea
                  placeholder='Nhập mô tả'
                  style={{ height: 100 }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
    </>
  )
}

export default NewPhase
