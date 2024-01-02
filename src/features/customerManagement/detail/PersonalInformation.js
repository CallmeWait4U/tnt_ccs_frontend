import { Card, Col, Form, Input, Row } from 'antd'

import { StyledDatepicker, StyledSelect } from '../../component/ComponentOfForm'

const PersonalInformation = () => {
  return (
    <Card style={{ width: '100%' }}>
      <Form layout='vertical'>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label={'Tên khách hàng'}
              rules={[
                {
                  require: true,
                  message: 'this field is required!'
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            {' '}
            <Form.Item
              label={'Giới tính'}
              rules={[
                {
                  require: true,
                  message: 'this field is required!'
                }
              ]}
            >
              <StyledSelect />
            </Form.Item>
          </Col>
          <Col span={8}>
            {' '}
            <Form.Item
              label={'Ngày sinh'}
              rules={[
                {
                  require: true,
                  message: 'this field is required!'
                }
              ]}
            >
              <StyledDatepicker />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label={'CCCD'}
              rules={[
                {
                  require: true,
                  message: 'this field is required!'
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            {' '}
            <Form.Item
              label={'Quốc gia'}
              rules={[
                {
                  require: true,
                  message: 'this field is required!'
                }
              ]}
            >
              <StyledSelect />
            </Form.Item>
          </Col>
          <Col span={8}>
            {' '}
            <Form.Item
              label={'Ghi chú'}
              rules={[
                {
                  require: true,
                  message: 'this field is required!'
                }
              ]}
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label={'Số điện thoại'}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            {' '}
            <Form.Item
              label={'Email'}
              rules={[
                {
                  require: true,
                  message: 'this field is required!'
                }
              ]}
            >
              <Input type='email' />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label={'Địa chỉ'}
              rules={[
                {
                  require: true,
                  message: 'this field is required!'
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label={' '}
              rules={[
                {
                  require: true,
                  message: 'this field is required!'
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label={' '}
              rules={[
                {
                  require: true,
                  message: 'this field is required!'
                }
              ]}
            >
              <Input style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}
export default PersonalInformation
