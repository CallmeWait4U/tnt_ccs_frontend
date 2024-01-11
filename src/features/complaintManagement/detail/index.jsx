import { Button, Col, Form, Input, Row, Typography } from 'antd'
import Card from 'antd/lib/card/Card'
import { useState } from 'react'
import { FiCheckSquare } from 'react-icons/fi'
import { MdRadioButtonChecked } from 'react-icons/md'
import { ButtonOk } from '../../../assets/styles/button.style'
import { StyledDatepicker, StyledSelect } from '../../component/ComponentOfForm'

const ComplaintDetail = () => {
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
  const [isUpdate, setIsUpdate] = useState(false)
  return (
    <div>
      <Row gutter={[24, 0]} style={{ marginBottom: '5px' }}>
        <Col md={20}>
          <Title level={4}> Danh sách khách hàng</Title>
        </Col>
        <Col
          md={4}
          style={{ display: 'flex', justifyContent: 'right', gap: '16px' }}
        >
          <Button
            style={{ height: '35px', background: '#F43F5E', color: 'white' }}
          >
            Xóa
          </Button>
          <ButtonOk type='primary'>Lịch sử hoạt động</ButtonOk>
        </Col>
      </Row>

      <Card>
        <Form layout='vertical'>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name='type' label='Loại khiếu nại'>
                <Input placeholder='Tên khách hàng' disabled={!isUpdate} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='date' label='Ngày gửi'>
                <StyledDatepicker />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name='code' label='Mã đơn hàng'>
                <Input disabled={!isUpdate} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name='status' label='Trạng thái'>
                <StyledSelect />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12} xl={24}>
              <Card title={'Thông tin chung của khách hàng'}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item name='name' label='Tên khách hàng'>
                      <Input
                        placeholder='Tên khách hàng'
                        disabled={!isUpdate}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name='sex' label='Giới tính'>
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
                    <Form.Item name='cccd' label='CCCD'>
                      <Input placeholder='Số điện thoại' disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name='email' label='Email'>
                      <Input placeholder='Số điện thoại' disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name='phone' label='Số điện thoại'>
                      <Input placeholder='Số điện thoại' disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item name='address' label='Địa chỉ'>
                      <Input placeholder='Địa chỉ' disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name='province' label=' '>
                      <Input disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name='district' label=' '>
                      <Input disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={12} xl={24}>
              <Card title={'Thông tin khiếu nại'}>
                <Row>
                  <span>Những vấn đề bạn gặp với sản phẩm?</span>
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
                  <span>Hình ảnh minh họa</span>
                  <Col span={24}>
                    <div style={{ display: 'flex', marginLeft: 10 }}>
                      <span>hinhf1.jpg</span>

                      <button
                        style={{
                          marginLeft: 10,
                          border: '1px',
                          borderRadius: '5px',
                          background: '#8b8989',
                          padding: '2px 5px'
                        }}
                      >
                        Tải hình ảnh xuống
                      </button>
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                  <Col span={24}>
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
                  <Col span={24}>
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
export default ComplaintDetail
