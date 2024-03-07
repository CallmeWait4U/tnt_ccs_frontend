import { useMutation } from '@tanstack/react-query'
import {
  Card,
  Checkbox,
  Col,
  Collapse,
  Flex,
  Form,
  Input,
  Row,
  Typography
} from 'antd'
import { useCreateAccount } from '../../../api/Admin/account'
import { ButtonOk } from '../../../assets/styles/button.style'
import { StyledDatepicker, StyledSelect } from '../../component/ComponentOfForm'
import '../accountManagement.css'
const NewAccount = () => {
  const { Title } = Typography
  const mutation = useMutation({
    mutationFn: useCreateAccount
  })
  const handleSubmit = (values) => {
    mutation.mutate(values)
  }
  const items = [
    {
      key: 'customerManagement',
      label: <Title level={5}>Quyền quản lý khách hàng</Title>,
      children: (
        <Row gutter={16}>
          <Col span={8}>
            <Checkbox>Xem Chi Tiết</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Tạo Khách Hàng</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Chính sửa Khách Hàng</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Xóa Khách Hàng</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Xem Chi Tiết Báo Giá</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Tạo Báo Giá</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Xóa Báo Giá</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Xem Chi Tiết Hóa Đơn</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Tạo Hóa Đơn</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Xóa Hóa Đơn</Checkbox>
          </Col>
        </Row>
      )
    },
    {
      key: 'activityManagement',
      label: <Title level={5}>Quyền quản lý hoạt động</Title>,
      children: (
        <Row gutter={16}>
          <Col span={8}>
            <Checkbox>Xem Chi Tiết Hoạt Động</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Tạo Loại Hoạt Động</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Xem Chi Tiết Hoạt Động</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Xóa Hoạt Động</Checkbox>
          </Col>
        </Row>
      )
    },
    {
      key: 'organizationManagement',
      label: <Title level={5}>Quyền quản lý tổ chức</Title>,
      children: (
        <Row gutter={16}>
          <Col span={8}>
            <Checkbox>Xem Chi Tiết Tài Khoản</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Tạo Tài Khoản</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Chỉnh sửa Tài Khoản</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Xóa Tài Khoản</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Xem Chi Tiết Sản Phẩm</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Tạo Sản Phẩm</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Chỉnh Sửa Sản Phẩm</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Xóa Sản Phẩm</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Xem Chi Tiết Giai Đoạn</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Tạo Giai Đoạn</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Xóa Giai Đoạn</Checkbox>
          </Col>
        </Row>
      )
    },
    {
      key: 'complaintManagement',
      label: <Title level={5}>Quyền quản lý khiếu nại</Title>,
      children: (
        <Row gutter={16}>
          <Col span={8}>
            <Checkbox>Xem Chi Tiết Khiếu Nại</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Xóa Khiếu Nại</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Xem Chi Tiết Loại Khiếu Nại</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Tạo Loại Khiếu Nại</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox>Xóa Loại Khiếu Nại</Checkbox>
          </Col>
        </Row>
      )
    }
  ]

  return (
    <Form layout='vertical' className='tabled' onFinish={handleSubmit}>
      <Row gutter={16} style={{ marginBottom: '14px' }}>
        <Col md={20}>
          <Title
            level={4}
            style={{
              marginLeft: '10px',
              marginTop: '4px',
              fontWeight: '700'
            }}
          >
            Tạo mới tài khoản
          </Title>
        </Col>
        <Col md={4} style={{ display: 'flex', justifyContent: 'right' }}>
          <Flex gap='small' align='flex-start' vertical>
            <Flex gap='small' wrap='wrap'>
              <div style={{ width: '80px' }}></div>
              <ButtonOk
                style={{
                  background: '#F58220',
                  color: 'white',
                  width: '80px',
                  height: '40px'
                }}
                htmlType='submit'
              >
                Lưu
              </ButtonOk>
            </Flex>
          </Flex>
        </Col>
      </Row>
      <Card
        className='accountForm'
        style={{ height: 680, maxHeight: 680, overflowX: 'hidden' }}
      >
        <Row gutter={[16, 16]}>
          <Col span={14} xl={12}>
            <Card title='Thông tin Chủ tài khoản'>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    label='Tên chủ tài khoản'
                    name={'name'}
                    rules={[
                      {
                        required: true,
                        message: 'Yêu cầu thông tin'
                      }
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label='Mã nhân viên'
                    name={'code'}
                    rules={[
                      {
                        required: true,
                        message: 'Yêu cầu thông tin'
                      }
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label='Vị trí'
                    name={'position'}
                    rules={[
                      {
                        required: true,
                        message: 'Yêu cầu thông tin'
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
                    label='Ngày sinh'
                    name={'dayOfBirth'}
                    rules={[
                      {
                        required: true,
                        message: 'Yêu cầu thông tin'
                      }
                    ]}
                  >
                    <StyledDatepicker />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label='Giới tính'
                    name={'gender'}
                    rules={[
                      {
                        required: true,
                        message: 'Yêu cầu thông tin'
                      }
                    ]}
                  >
                    <StyledSelect
                      placeholder={'Chọn giới tính'}
                      options={[
                        { value: 'MALE', label: 'Nam' },
                        { value: 'FEMALE', label: 'Nữ' }
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label='Quốc tịch' name={'nationality'}>
                    <StyledSelect
                      placeholder='Chọn quốc tịch'
                      options={[
                        { value: 'Việt Nam', label: 'Việt Nam' },
                        { value: 'Lào', label: 'Lào' },
                        { value: 'Campuchia', label: 'Campuchia' }
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={14}>
                <Col span={8}>
                  <Form.Item
                    label='CCCD'
                    name={'cccd'}
                    rules={[
                      {
                        required: true,
                        message: 'Yêu cầu thông tin'
                      }
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label='Số điện thoại' name={'phoneNumber'}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label='Email'
                    name={'email'}
                    rules={[
                      {
                        required: true,
                        message: 'Yêu cầu thông tin'
                      }
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={14}>
                <Col span={8}>
                  <Form.Item
                    className='customHorizontal customDetailAddress'
                    label={'Địa chỉ'}
                    name={'detailAddress'}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    className='customHorizontal customAddress'
                    label={' '}
                    name={'district'}
                    rules={[
                      {
                        required: true,
                        message: 'Yêu cầu thông tin'
                      }
                    ]}
                  >
                    <StyledSelect
                      placeholder='Chọn quận/huyện'
                      options={[
                        { value: 'Quận 1', label: 'Quận 1' },
                        { value: 'Quận 2', label: 'Quận 2' },
                        { value: 'Quận 3', label: 'Quận 3' }
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    className='customHorizontal customAddress'
                    label={' '}
                    name={'city'}
                    rules={[
                      {
                        required: true,
                        message: 'Yêu cầu thông tin'
                      }
                    ]}
                  >
                    <StyledSelect
                      placeholder='Chọn tỉnh/thành phố'
                      options={[
                        { value: 1, label: 'Hồ Chí Minh' },
                        { value: 2, label: 'Bình Định' },
                        { value: 3, label: 'Bến Tre' }
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={14}>
                <Col span={8}>
                  <Form.Item label='Ghi chú' name={'description'}>
                    <Input.TextArea />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={10} xl={12}>
            <Card>
              <Row>
                <Col span={12}>
                  <Form.Item
                    label='Loại tài khoản'
                    name={'type'}
                    rules={[
                      {
                        required: true,
                        message: 'Yêu cầu thông tin'
                      }
                    ]}
                  >
                    <StyledSelect
                      options={[
                        { value: 'ADMIN', label: 'Quản trị viên' },
                        { value: 'EMPLOYEE', label: 'Nhân viên' }
                      ]}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Title level={5}>Danh sách quyền</Title>
              </Row>
              <Card>
                <Collapse items={items} defaultActiveKey={['1']} />
              </Card>
            </Card>
          </Col>
        </Row>
      </Card>
    </Form>
  )
}
export default NewAccount
