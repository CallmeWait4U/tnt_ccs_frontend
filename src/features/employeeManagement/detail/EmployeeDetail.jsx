import { Card, Checkbox, Col, Form, Input, Row, Typography } from 'antd'
import { StyledDatepicker, StyledSelect } from '../../component/ComponentOfForm'

const EmployeeDetail = ({ match }) => {
  const { Title } = Typography
  return (
    <div>
      <Row gutter={16}>
        <Col span={14}>
          <Title level={2}>Chi tiết nhân viên</Title>
        </Col>
      </Row>
      <Card>
        <Form layout='vertical'>
          <Row gutter={[16, 16]}>
            <Col span={14} xl={24}>
              <Card>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item label='Tên nhân viên'>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label='Mã nhân viên'>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label='Vị trí'>
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item label='Ngày sinh'>
                      <StyledDatepicker />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label='Giới tính'>
                      <StyledSelect />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label='Quốc tịch'>
                      <StyledSelect />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={14}>
                  <Col span={8}>
                    <Form.Item label='CCCD'>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label='Số điện thoại'>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label='Email'>
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={14}>
                  <Col span={8}>
                    <Form.Item label='Địa chỉ'>
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label=' '>
                      <StyledDatepicker />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label=' '>
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={14}>
                  <Col span={8}>
                    <Form.Item label='Ghi chú'>
                      <Input.TextArea />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={10} xl={24}>
              <Card>
                <Row>
                  <Col span={12}>
                    <Form.Item label='Loại tài khoản'>
                      <StyledSelect />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Title level={5}>Danh sách quyền</Title>
                </Row>
                <Card>
                  <Card.Grid hoverable={false} style={{ width: '100%' }}>
                    <Title level={5}>Quyền quản lý khách hàng</Title>
                    <Row gutter={16}>
                      <Col span={8}>
                        <Checkbox>Xem chi tiết</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Thêm mới</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Sửa</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Xem chi tiết</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Thêm mới</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Sửa</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Xem chi tiết</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Thêm mới</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Sửa</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Sửa</Checkbox>
                      </Col>
                    </Row>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={{ width: '100%' }}>
                    <Title level={5}>Quyền quản lý hoạt động</Title>
                    <Row gutter={16}>
                      <Col span={8}>
                        <Checkbox>Xem chi tiết</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Thêm mới</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Sửa</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Xem chi tiết</Checkbox>
                      </Col>
                    </Row>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={{ width: '100%' }}>
                    <Title level={5}>Quyền quản lý tổ chức</Title>
                    <Row gutter={16}>
                      <Col span={8}>
                        <Checkbox>Xem chi tiết</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Thêm mới</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Sửa</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Xem chi tiết</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Thêm mới</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Sửa</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Xem chi tiết</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Thêm mới</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Sửa</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Sửa</Checkbox>
                      </Col>
                    </Row>
                  </Card.Grid>
                  <Card.Grid hoverable={false} style={{ width: '100%' }}>
                    <Title level={5}>Quyền quản lý khiếu nại</Title>
                    <Row gutter={16}>
                      <Col span={8}>
                        <Checkbox>Xem chi tiết</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Thêm mới</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Sửa</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Xem chi tiết</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Thêm mới</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Sửa</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Xem chi tiết</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Thêm mới</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Sửa</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox>Sửa</Checkbox>
                      </Col>
                    </Row>
                  </Card.Grid>
                </Card>
              </Card>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
}
export default EmployeeDetail
