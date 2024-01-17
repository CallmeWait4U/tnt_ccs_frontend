import React from 'react'

// Images
import { AndroidOutlined } from '@ant-design/icons'
import { Button, Card, Col, Form, Input, Row, Tabs, Typography } from 'antd'
import { FiCheckSquare } from 'react-icons/fi'
import { MdModeEditOutline } from 'react-icons/md'
import { TbTrashFilled } from 'react-icons/tb'
import { ButtonOk } from '../../assets/styles/button.style'
const problems = [
  'Sản phẩm bị lỗi',
  'Sản phẩm không đúng mô tả',
  'Sản phẩm không đúng kích thước',
  'Sản phẩm không đúng màu sắc',
  'Sản phẩm không đúng số lượng',
  'Sản phẩm không đúng chất lượng'
]

const ActionComponent = (data) => {
  return (
    <Col span={4}>
      <div style={{ gap: '15px', display: 'flex' }}>
        <Button
          type='primary'
          shape='circle'
          style={{ backgroundColor: 'rgb(255,225,225)' }}
          size='small'
        >
          <TbTrashFilled
            color='red'
            size={14}
            onClick={() => console.log('trash')}
          />
        </Button>
        <Button
          type='primary'
          shape='circle'
          style={{ backgroundColor: 'rgb(220,245,255)' }}
          size='small'
        >
          <MdModeEditOutline color='00AEEF' size={16} />
        </Button>
      </div>
    </Col>
  )
}

const ChildrenComponent = () => {
  return (
    <div>
      <Form>
        <Row gutter={16} style={{ marginBottom: '30px' }}>
          <Col span={3} style={{ textAlign: 'right' }}>
            Loại khiếu nại
          </Col>
          <Col span={4}>
            <Input />
          </Col>
          <Col span={3}>
            <ActionComponent />
          </Col>
        </Row>

        <Row gutter={40}>
          <Col span={12}>
            <Row>
              <Col span={20}>
                <span>Những vấn đề bạn gặp với sản phẩm?</span>
              </Col>
              <ActionComponent />
            </Row>
            {problems.map((item, index) => (
              <Col span={24} key={index}>
                <div style={{ display: 'flex', marginLeft: 10 }}>
                  <FiCheckSquare />{' '}
                  <span style={{ marginLeft: 10 }}>{item}</span>
                </div>
              </Col>
            ))}
            <Row style={{ marginTop: '20px' }}>
              <Col span={20}>
                <span>Hình ảnh minh họa</span>
              </Col>
              <ActionComponent />
            </Row>
            <Col span={24}>
              <div>
                <button
                  style={{
                    marginLeft: 10,
                    border: '1px',
                    border: '2px solid black',
                    borderRadius: '5px',
                    background: '#8b8989',
                    padding: '2px 5px'
                  }}
                >
                  Tải hình ảnh xuống
                </button>
              </div>
            </Col>

            <Row style={{ margin: '20px 0 5px 0' }}>
              <Col span={20}>
                <span>Mô tả chi tiết</span>
              </Col>
              <ActionComponent />
            </Row>

            <Col span={24}>
              <Input.TextArea style={{ height: '100px' }}></Input.TextArea>
            </Col>

            <Row style={{ marginTop: '20px' }}>
              <Col span={24}>
                <div>
                  <button
                    style={{
                      marginLeft: 10,
                      border: '2px solid black',
                      borderRadius: '5px',
                      background: '#8b8989',
                      padding: '2px 5px'
                    }}
                  >
                    Thêm mục
                  </button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row style={{ marginBottom: '5px' }}>
              <Col span={20}>
                <span>Ghi chú</span>
              </Col>
              <ActionComponent />
            </Row>
            <Col span={24}>
              <Input.TextArea style={{ height: '100px' }}></Input.TextArea>
            </Col>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
const ComplaintClassifytManagement = () => {
  const items = [
    {
      key: '1',
      label: <h3>Sản phẩm</h3>,
      children: <ChildrenComponent />
    },
    {
      key: '2',
      label: <h3>Nhân viên</h3>,
      children: <ChildrenComponent />,
      icon: <AndroidOutlined />
    },
    {
      key: '3',
      label: <h3>Vận chuyển</h3>,
      children: <ChildrenComponent />,
      icon: <AndroidOutlined />
    }
  ]
  const { Title } = Typography
  return (
    <div className='tabled'>
      <Row gutter={[24, 0]} style={{ marginBottom: '14px' }}>
        <Title level={4}>Phân loại khiếu nại</Title>
      </Row>
      <Card>
        <Tabs defaultActiveKey='2' items={items} title='ngọ' />
        <ButtonOk
          style={{
            position: 'absolute',
            top: 20,
            right: 240
          }}
        >
          Chỉnh sửa
        </ButtonOk>
        <ButtonOk
          style={{
            position: 'absolute',
            top: 20,
            right: 90,
            background: '#F58220'
          }}
        >
          Phân loại khiếu nại
        </ButtonOk>
        <ButtonOk
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: '#F43F5E'
          }}
        >
          Xóa
        </ButtonOk>
      </Card>
    </div>
  )
}
export default ComplaintClassifytManagement
