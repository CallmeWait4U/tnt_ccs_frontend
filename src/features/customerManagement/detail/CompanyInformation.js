import { Card, Col, Form, Input, Row } from 'antd'

import { StyledSelect } from '../../component/ComponentOfForm'

const CompanyInformation = () => {
  return (
    <Card style={{ width: '100%' }}>
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label={'Tên công ty'}
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
              label={'Mã số thuế'}
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
              label={'Số ĐKKD'}
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
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              label={'Quốc gia'}
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
              label={'Lĩnh vực kinh doanh'}
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
export default CompanyInformation
