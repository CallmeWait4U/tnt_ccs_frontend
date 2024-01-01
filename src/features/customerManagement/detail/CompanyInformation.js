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
              <Input value={"TNT"} />
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
              value={"tnt@gmail.com"}
            >
              <Input value={"333333"} />
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
              <Input value={"33333333333"} />
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
              <StyledSelect value={"Việt Nam"} />
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
              <StyledSelect value={"Bán hàng"} />
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
              <Input.TextArea
                value={"Công ty này đã có doanh thu trên 2 tỷ trong năm 2022"}
              />
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
              <StyledSelect value={"TP.Hồ Chí Minh"} />
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
              <StyledSelect value={"Thủ Đức"} />
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
<<<<<<< HEAD
              <Input style={{ width: '100%' }} />
=======
              <StyledSelect value={"Linh Đông"} />
>>>>>>> feat/customer-detail
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}
export default CompanyInformation
