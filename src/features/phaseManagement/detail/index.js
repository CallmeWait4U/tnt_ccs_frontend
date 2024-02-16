import { Button, Card, Col, Flex, Form, Input, Row, Typography } from 'antd'
import { useState } from 'react'
import { ButtonOk } from '../../../assets/styles/button.style'
import '../phaseManagement.css'

const PhaseDetail = () => {
  const [isUpdate, setIsUpdate] = useState(false)
  const { Title } = Typography

  return (
    <>
      <Form className='tabled'>
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
              Chi tiết giai đoạn Tiềm năng
            </Title>
          </Col>
          <Col md={4} style={{ display: 'flex', justifyContent: 'right' }}>
            {isUpdate ? (
              <Flex gap='small' align='flex-start' vertical>
                <Flex gap='small' wrap='wrap'>
                  <Button
                    size={40}
                    style={{
                      borderColor: '#F58220',
                      color: '#F58220',
                      width: '80px',
                      height: '40px'
                    }}
                    onClick={() => setIsUpdate(false)}
                  >
                    Hủy
                  </Button>
                  <Button
                    style={{
                      background: '#F58220',
                      color: 'white',
                      width: '80px',
                      height: '40px'
                    }}
                    size={40}
                    htmlType='submit'
                  >
                    Lưu
                  </Button>
                </Flex>
              </Flex>
            ) : (
              <Flex gap='small' align='flex-start' vertical>
                <Flex gap='small' wrap='wrap'>
                  <div style={{ width: '80px' }}></div>
                  <ButtonOk
                    onClick={() => setIsUpdate(true)}
                    style={{
                      background: '#F58220',
                      color: 'white',
                      width: '80px',
                      height: '40px'
                    }}
                  >
                    Chỉnh sửa
                  </ButtonOk>
                </Flex>
              </Flex>
            )}
          </Col>
        </Row>
        <Card className='phaseForm' style={{ width: '1000px', margin: 'auto' }}>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                className='customHorizontal'
                name='name'
                label='Tên Giai đoạn'
                rules={[{ required: true, message: 'Yêu cầu thông tin' }]}
              >
                <Input placeholder='Tên giai đoạn' disabled={!isUpdate} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                className='customHorizontal'
                name='priority'
                label='Thứ tự giai đoạn'
                rules={[{ required: true, message: 'Yêu cầu thông tin' }]}
              >
                <Input placeholder='Thứ tự giai đoạn' disabled={!isUpdate} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                className='customHorizontal'
                name='description'
                label='Mô tả giai đoạn'
              >
                <Input.TextArea
                  placeholder='Nhập mô tả'
                  disabled={!isUpdate}
                  style={{ height: 100 }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
    </>
  )
}

export default PhaseDetail