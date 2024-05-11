import { Button, Col, Form, Input, Modal, Row, Switch, Typography } from 'antd'
import Card from 'antd/lib/card/Card'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { useGetProfile } from '../../api/Admin/profile'
import { ButtonOk } from '../../assets/styles/button.style'
import { StyledDatepicker, StyledSelect } from '../component/ComponentOfForm'
const UserProfile = () => {
  const { Title } = Typography
  const [isUpdate, setIsUpdate] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { data: userInfo } = useGetProfile()
  const [form] = Form.useForm()
  useEffect(() => {
    if (userInfo) {
      form.setFieldsValue({
        name: userInfo.name,
        address: userInfo.detailAddress,
        district: userInfo.district,
        city: userInfo.city,
        birthday: dayjs(userInfo.dayOfBirth),
        code: userInfo.code,
        gender: userInfo.gender,
        position: userInfo.position,
        phoneNumber: userInfo.phoneNumber,
        email: userInfo.email,
        description: userInfo.description
      })
    }
  }, [userInfo, form])

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
          <Form className='tabled'>
            <Row gutter={16}>
              <Col>
                <Form.Item name={'typecus'} label='Loại khách hàng'>
                  <Input disabled={true} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item name={'phase'} label='Giai đoạn'>
                  <Input disabled={true} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item name={'code'} label='Mã khách hàng'>
                  <Input disabled={true} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label='Nhận email từ hệ thống'>
                  <Switch />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <Form form={form} layout='vertical'>
            <Row gutter={[8, 16]}>
              <Col span={12}>
                <Card title={'Thông tin Doanh nghiệp'}>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item name={'name'} label='Tên Công ty'>
                        <Input disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name={'tax'} label='Mã số thuế'>
                        <StyledSelect disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name='businessnumber' label='Số ĐKKD'>
                        <StyledDatepicker disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item name={'address'} label='Địa chỉ'>
                        <Input disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name={'district'} label=' '>
                        <Input disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name={'city'} label=' '>
                        <Input disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item name='business' label='Lĩnh vực kinh doanh'>
                        <Input disabled={!isUpdate} />
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
                        <Input disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name='tax' label='Giới tính'>
                        <StyledSelect disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name='birthday' label='Ngày sinh'>
                        <StyledDatepicker disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item name='id' label='CCCD'>
                        <Input disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name='nationality' label='Quốc tịch'>
                        <Input disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item name='position' label='Chức vụ'>
                        <Input disabled={!isUpdate} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item name='phoneNumber' label='Số điện thoại'>
                        <Input disabled={!isUpdate} />
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
export default UserProfile
