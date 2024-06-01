import { useMutation } from '@tanstack/react-query'
import { Button, Col, Form, Input, Modal, Row, Typography, message } from 'antd'
import Card from 'antd/lib/card/Card'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { useGetProfile } from '../../../api/Customer/profile'
import { useChangePassword } from '../../../api/auth'
import { ButtonOk } from '../../../assets/styles/button.style'
import { StyledDatepicker, StyledSelect } from '../../component/ComponentOfForm'
const ClientProfile = () => {
  const { Title } = Typography
  const [isUpdate, setIsUpdate] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isBusiness, setIsBusiness] = useState(false)
  const { data: userInfo } = useGetProfile()
  const [form] = Form.useForm()
  const { mutate: changePassword } = useMutation({
    mutationFn: useChangePassword,
    onSuccess: () => {
      setIsOpen(false)
      message.success('Đổi mật khẩu thành công')
    },
    onError: (error) => {
      if (error.response.message === 'Old password wrong') {
        message.error('Mật khẩu cũ không đúng')
      } else message.error('Đổi mật khẩu thất bại')
    }
  })
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
        description: userInfo.description,
        phaseName: userInfo.phaseName,
        nationality: userInfo.nationality,
        cccd: userInfo.cccd,
        industry: userInfo.industry,
        registrationNumber: userInfo.registrationNumber
      })
      setIsBusiness(userInfo.isBusiness)
      if (userInfo.isBusiness) {
        form.setFieldsValue({
          representativeName: userInfo.representativeName,
          representativeGender: userInfo.representativeGender,
          representativeDayOfBirth: dayjs(userInfo.representativeDayOfBirth),
          representativeCccd: userInfo.representativeCccd,
          representativeNationality: userInfo.representativeNationality,
          representativePosition: userInfo.representativePosition,
          representativeEmail: userInfo.representativeEmail,
          representativePhoneNumber: userInfo.representativePhone
        })
      }
    }
  }, [userInfo, form])
  const handleChangePassword = (values) => {
    changePassword(values)
  }
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
            Thông tin tài khoản
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
          <Form form={form} layout='vertical'>
            <Row gutter={[8, 16]}>
              {isBusiness ? (
                <>
                  <Col span={12}>
                    <Card title={'Thông tin Doanh nghiệp'}>
                      <Row gutter={16}>
                        <Col span={8}>
                          <Form.Item name={'name'} label='Tên Công ty'>
                            <Input disabled={!isUpdate} />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item name={'phaseName'} label='Giai đoạn'>
                            <Input disabled={true} />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item name='registrationNumber' label='Số ĐKKD'>
                            <Input disabled={!isUpdate} />
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
                        <Col span={12}>
                          <Form.Item
                            name='industry'
                            label='Lĩnh vực kinh doanh'
                          >
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
                          <Form.Item
                            name='representativeName'
                            label='Tên Người đại diện'
                          >
                            <Input disabled={!isUpdate} />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item
                            name='representativeGender'
                            label='Giới tính'
                          >
                            <StyledSelect
                              placeholder={'Chọn giới tính'}
                              options={[
                                { value: 'MALE', label: 'Nam' },
                                { value: 'FEMALE', label: 'Nữ' },
                                { value: 'UNKNOWN', label: 'Khác' }
                              ]}
                              disabled={!isUpdate}
                            />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item
                            name='representativeDayOfBirth'
                            label='Ngày sinh'
                          >
                            <StyledDatepicker disabled={!isUpdate} />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col span={8}>
                          <Form.Item name='representativeCccd' label='CCCD'>
                            <Input disabled={!isUpdate} />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item
                            name='representativeNationality'
                            label='Quốc tịch'
                          >
                            <Input disabled={!isUpdate} />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item
                            name='representativePosition'
                            label='Chức vụ'
                          >
                            <Input disabled={!isUpdate} />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col span={8}>
                          <Form.Item
                            name='representativePhoneNumber'
                            label='Số điện thoại'
                          >
                            <Input disabled={!isUpdate} />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item name='representativeEmail' label='Email'>
                            <Input
                              placeholder='Nhập Email'
                              disabled={!isUpdate}
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </>
              ) : (
                <>
                  <Card>
                    <Form form={form} layout='vertical'>
                      <Row gutter={[8, 16]}>
                        <Col span={8}>
                          <Form.Item name={'name'} label='Tên chủ tài khoản'>
                            <Input disabled={!isUpdate} />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item name={'code'} label='Mã tài khoản'>
                            <Input disabled={!isUpdate} />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item name='phaseName' label='Giai đoạn'>
                            <Input disabled={true} />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item name='gender' label='Giới tính'>
                            <StyledSelect
                              placeholder={'Chọn giới tính'}
                              options={[
                                { value: 'MALE', label: 'Nam' },
                                { value: 'FEMALE', label: 'Nữ' },
                                { value: 'UNKNOWN', label: 'Khác' }
                              ]}
                              disabled={!isUpdate}
                            />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item name='birthday' label='Ngày sinh'>
                            <StyledDatepicker disabled={!isUpdate} />
                          </Form.Item>
                        </Col>

                        <Col span={8}>
                          <Form.Item name='cccd' label='CCCD'>
                            <Input disabled={!isUpdate} />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item name='nationality' label='Quốc tịch'>
                            <Input disabled={!isUpdate} />
                          </Form.Item>
                        </Col>

                        <Col span={8}>
                          <Form.Item name='phoneNumber' label='Số điện thoại'>
                            <Input disabled={!isUpdate} />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item name='email' label='Email'>
                            <Input
                              placeholder='Nhập Email'
                              disabled={!isUpdate}
                            />
                          </Form.Item>
                        </Col>
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
                    </Form>
                  </Card>
                </>
              )}
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
            <ButtonOk type='primary' onClick={() => setIsOpen(false)}>
              Hủy
            </ButtonOk>
            <Form.Item>
              <ButtonOk
                form='changePasswordForm'
                key='submit'
                htmlType='submit'
                type='primary'
              >
                Thay đổi mật khẩu
              </ButtonOk>
            </Form.Item>
          </div>
        }
      >
        <Form
          layout='vertical'
          id='changePasswordForm'
          onFinish={handleChangePassword}
        >
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
