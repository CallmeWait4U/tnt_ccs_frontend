import { Col, Form, Input, Row, Typography } from 'antd'
import Card from 'antd/lib/card/Card'
import { FiCheckSquare } from 'react-icons/fi'
import { MdRadioButtonChecked } from 'react-icons/md'
import { ButtonOk } from '../../../../assets/styles/button.style'
import {
  StyledDatepicker,
  StyledSelect
} from '../../../component/ComponentOfForm'
import '../complaintManagement.css'

const ClientNewComplaint = () => {
  const problems = [
    'Sản phẩm bị lỗi',
    'Sản phẩm không đúng mô tả',
    'Sản phẩm không đúng kích thước',
    'Sản phẩm không đúng màu sắc',
    'Sản phẩm không đúng số lượng',
    'Sản phẩm không đúng chất lượng'
  ]
  const productsProblem = [
    'Tai nghe bluetooth XT80',
    'Chuột không dây Inphic PM6'
  ]
  const { Title } = Typography

  return (
    <div>
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
            Tạo mới khiếu nại
          </Title>
        </Col>
        <Col
          md={4}
          style={{ display: 'flex', justifyContent: 'right', gap: '8px' }}
        >
          <ButtonOk
            className='cancelComplainBtn'
            style={{ fontSize: '14px', height: '42px', background: '#F43F5E' }}
          >
            Hủy khiếu nại
          </ButtonOk>
        </Col>
      </Row>

      <Card className='clientComplaint'>
        <Form>
          <Row gutter={16}>
            <Col span={4} offset={1}>
              <Form.Item name='type' label='Loại khiếu nại'>
                <StyledSelect
                  options={[
                    { value: 'Sản phẩm', label: 'Sản phẩm' },
                    { value: 'Vận chuyển', label: 'Vận chuyển' },
                    { value: 'Nhân viên', label: 'Nhân viên' }
                  ]}
                  placeholder='Chọn loại yêu cầu'
                />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Form.Item name='date' label='Ngày gửi'>
                <StyledDatepicker />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Form.Item name='code' label='Mã hóa đơn'>
                <Input />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Form.Item name='status' label='Trạng thái'>
                <StyledSelect
                  options={[
                    { value: '1', label: 'Chưa xử lí' },
                    { value: '2', label: 'Đang xử lí' },
                    { value: '3', label: 'Đã xử lí' },
                    { value: '4', label: 'Xử lý lại' }
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[8, 16]} style={{ marginRight: '24px' }}>
            <Col span={12}>
              <Card title={'Thông tin chung của khách hàng'}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      className='customHorizontal'
                      name='name'
                      label='Tên khách hàng'
                    >
                      <Input placeholder='Tên khách hàng' />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      className='customHorizontal'
                      name='sex'
                      label='Giới tính'
                    >
                      <StyledSelect
                        placeholder={'Chọn giới tính'}
                        options={[
                          { value: 'Male', label: 'Nam' },
                          { value: 'Female', label: 'Nữ' }
                        ]}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      className='customHorizontal'
                      name='birthday'
                      label='Ngày sinh'
                    >
                      <StyledDatepicker placeholder={'Chọn ngày sinh'} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      className='customHorizontal'
                      name='cccd'
                      label='CCCD'
                    >
                      <Input placeholder='Nhập CCCD' />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      className='customHorizontal'
                      name='email'
                      label='Email'
                    >
                      <Input placeholder='Nhập email' />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      className='customHorizontal'
                      name='phone'
                      label='Số điện thoại'
                    >
                      <Input placeholder='Nhập số điện thoại' />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
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
                      <StyledSelect placeholder='Chọn quận/huyện' />
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
                      <StyledSelect placeholder='Chọn tỉnh/thành phố' />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={12}>
              <Card title={'Thông tin khiếu nại'}>
                <Row>
                  <span style={{ paddingBottom: '5px' }}>
                    Những vấn đề bạn gặp với sản phẩm?
                  </span>
                  {problems.map((item, index) => (
                    <Col span={24} key={index}>
                      <div style={{ display: 'flex', marginLeft: 10 }}>
                        <FiCheckSquare />{' '}
                        <span style={{ marginLeft: 10 }}>{item}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
                <Row style={{ marginTop: '20px' }}>
                  <span style={{ paddingBottom: '5px' }}>
                    Hình ảnh minh họa
                  </span>
                  <Col span={24}>
                    <div style={{ display: 'flex', marginLeft: 10 }}>
                      <span>hinhf1.jpg</span>

                      <button
                        style={{
                          marginLeft: 10,
                          border: '1px',
                          borderRadius: '5px',
                          borderColor: 'black',
                          background: '#E9E6E6',
                          padding: '2px 5px'
                        }}
                      >
                        Tải hình ảnh xuống
                      </button>
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                  <Col span={24} style={{ paddingBottom: '5px' }}>
                    <span>Sản phẩm khiếu nại</span>
                  </Col>
                  <Col span={24}>
                    <div
                      style={{
                        width: '100%',

                        padding: '10px 0px 10px 10px',
                        borderWidth: '2px',
                        borderColor: 'black',
                        borderRadius: '5px'
                      }}
                    >
                      {productsProblem.map((item, index) => (
                        <div style={{ display: 'flex', marginLeft: 10 }}>
                          <MdRadioButtonChecked />
                          <span style={{ marginLeft: 10 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                  <Col span={24} style={{ paddingBottom: '5px' }}>
                    <span>Mô tả chi tiết</span>
                  </Col>
                  <Col span={24}>
                    <div
                      style={{
                        width: '100%',

                        padding: '10px 0px 10px 10px',
                        borderWidth: '2px',
                        borderColor: 'black',
                        borderRadius: '5px'
                      }}
                    >
                      <span>
                        Sản phẩm bị lỗi màu, không đúng với mô tả bản đầu trên
                        quảng cáo.
                      </span>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
}

export default ClientNewComplaint
