import { Button, Col, Form, Input, Modal, Row, Switch, Typography } from 'antd'
import Card from 'antd/lib/card/Card'
import React, { useState } from 'react'
import { ButtonOk } from '../../../assets/styles/button.style'
import { StyledDatepicker, StyledSelect } from '../../component/ComponentOfForm'

const ClientProfile = () => {
  const { Title } = Typography
  const [isUpdate, setIsUpdate] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Row gutter={[24, 0]} style={{ marginBottom: '5px' }}>
        <Col md={20}>
          <Title
            level={4}
            style={{
              marginLeft: '10px',
              marginTop: '4px',
              fontWeight: '700'
            }}
          >
            {' '}
            Thông tin chi tiết
          </Title>
        </Col>
      </Row>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Card>
          <Form>
            <Row gutter={16}>
              <Col>
                <Form.Item name='typecus' label='Loại khách hàng'>
                  <Input placeholder='Doanh nghiệp' disabled={true} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item name='phase' label='Giai đoạn'>
                  <Input placeholder='Tiềm năng' disabled={true} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item name='customerid' label='Mã khách hàng'>
                  <Input placeholder='KH-001' disabled={true} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label='Nhận email từ hệ thống'>
                  <Switch />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <Form layout='vertical'>
            <Row gutter={[8, 16]}>
              <Col span={12}>
                <Card title={'Thông tin Doanh nghiệp'}>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item name='name' label='Tên Công ty'>
                        <Input placeholder='Tên Công ty' disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name='tax' label='Mã số thuế'>
                        <StyledSelect
                          placeholder='3500806643'
                          disabled={!isUpdate}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name='businessnumber' label='Số ĐKKD'>
                        <StyledDatepicker
                          placeholder='492043000050'
                          disabled={!isUpdate}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item name='address' label='Địa chỉ'>
                        <Input
                          placeholder='268 Lý Thường Kiệt'
                          disabled={!isUpdate}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name='province' label=' '>
                        <Input placeholder='Phường 14' disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name='district' label=' '>
                        <Input placeholder='Quận 10' disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item name='country' label='Quốc gia'>
                        <Input placeholder='Việt Nam' disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name='business' label='Lĩnh vực kinh doanh'>
                        <Input placeholder='Sản xuất' disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={12}>
                <Card title={'Thông tin Người đại diện doanh nghiệp'}>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item name='name' label='Tên Người đại diện'>
                        <Input
                          placeholder='Tên Người đại diện'
                          disabled={!isUpdate}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name='tax' label='Giới tính'>
                        <StyledSelect
                          placeholder='3500806643'
                          disabled={!isUpdate}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name='birthday' label='Ngày sinh'>
                        <StyledDatepicker
                          placeholder='Nhập ngày sinh'
                          disabled={!isUpdate}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item name='id' label='CCCD'>
                        <Input
                          placeholder='Nhập số CCCD'
                          disabled={!isUpdate}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name='nationality' label='Quốc tịch'>
                        <Input placeholder='Việt Nam' disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name='position' label='Chức vụ'>
                        <Input
                          placeholder='Nhập chức vụ'
                          disabled={!isUpdate}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item name='phoneNumber' label='Số điện thoại'>
                        <Input
                          placeholder='Nhập số điện thoại'
                          disabled={!isUpdate}
                        />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name='email' label='Email'>
                        <Input placeholder='Nhập Email' disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Form>
          <Row
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '30px'
            }}
          >
            <Col>
              <Button
                size='large'
                style={{ backgroundColor: '#F58220', color: '#fff' }}
                onClick={() => setIsUpdate(!isUpdate)}
              >
                Chỉnh sửa thông tin
              </Button>
            </Col>
            <Col offset={1}>
              <ButtonOk size='large' onClick={() => setIsOpen(!isOpen)}>
                Đổi mật khẩu
              </ButtonOk>
            </Col>
          </Row>
        </Card>
      </div>
      <Modal
        title={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <h2>Đổi mật khẩu</h2>
          </div>
        }
        open={isOpen}
        footer={
          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'flex-end'
            }}
          >
            <ButtonOk onClick={() => setIsOpen(false)}>Hủy</ButtonOk>
            <Form.Item>
              <ButtonOk onClick={() => setIsOpen(false)} htmlType='submit'>
                Thay đổi mật khẩu
              </ButtonOk>
            </Form.Item>
          </div>
        }
      >
        <Form layout='vertical'>
          <Form.Item
            name='oldPassword'
            label='Nhập mật khẩu cũ'
            rules={[
              {
                required: true,
                message: 'Yêu cầu thông tin'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='newPassword'
            label='Nhập mật khẩu mới'
            rules={[
              {
                required: true,
                message: 'Yêu cầu thông tin'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='confirmPassword'
            label='Xác nhận mật khẩu'
            rules={[
              {
                required: true,
                message: 'Yêu cầu thông tin'
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
export default ClientProfile
