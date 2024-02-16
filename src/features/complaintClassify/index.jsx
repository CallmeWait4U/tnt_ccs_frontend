import React, { useState } from 'react'
// Images
import { AndroidOutlined } from '@ant-design/icons'
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Tabs,
  Typography
} from 'antd'
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
          <TbTrashFilled color='red' size={14} />
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

const ChildrenComponent = ({ isUpdate, selectedLabel }) => {
  return (
    <div>
      <Form>
        <Row gutter={16} style={{ marginBottom: '30px' }}>
          <Col
            span={3}
            style={{
              display: 'flex',
              textAlign: 'right',
              alignItems: 'center'
            }}
          >
            Loại khiếu nại
          </Col>
          <Col span={4}>
            <Input value={selectedLabel} />
          </Col>
          <Col span={3}>{isUpdate && <ActionComponent />}</Col>
        </Row>

        <Row gutter={40}>
          <Col span={12}>
            <Row>
              <Col span={20}>
                <span>Những vấn đề bạn gặp với sản phẩm?</span>
              </Col>
              {isUpdate && <ActionComponent />}
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
              {isUpdate && <ActionComponent />}
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
              {isUpdate && <ActionComponent />}
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
              {isUpdate && <ActionComponent />}
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
  const [isUpdate, setIsUpdate] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenModal = () => {
    Modal.confirm({
      content: 'Bạn có chắc chắn muốn xóa loại khiếu nại?',
      centered: true,
      icon: <></>,
      footer: (_) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <ButtonOk
            style={{
              background: '#7364FF'
            }}
          >
            Hủy bỏ
          </ButtonOk>
          <ButtonOk
            style={{
              background: '#F43F5E'
            }}
          >
            Xác nhận
          </ButtonOk>
        </div>
      )
    })
  }
  const items = [
    {
      key: '1',
      label: 'Sản phẩm',
      children: (
        <ChildrenComponent isUpdate={isUpdate} selectedLabel='Sản phẩm' />
      )
    },
    {
      key: '2',
      label: 'Nhân viên',
      children: (
        <ChildrenComponent isUpdate={isUpdate} selectedLabel='Nhân viên' />
      ),
      icon: <AndroidOutlined />
    },
    {
      key: '3',
      label: 'Vận chuyển',
      children: (
        <ChildrenComponent isUpdate={isUpdate} selectedLabel='Vận chuyển' />
      ),
      icon: <AndroidOutlined />
    }
  ]
  const { Title } = Typography
  return (
    <div className='tabled'>
      <Row gutter={[24, 0]} style={{ marginBottom: '14px' }}>
        <Col md={20}>
          <Title level={4}>Phân loại khiếu nại</Title>
        </Col>
        <Col
          md={4}
          style={{ display: 'flex', justifyContent: 'right', gap: '8px' }}
        >
          <ButtonOk
            style={{ fontSize: '14px', height: '42px' }}
            onClick={() => setIsUpdate(!isUpdate)}
          >
            Chỉnh sửa
          </ButtonOk>
          <ButtonOk
            style={{
              background: '#F58220',
              fontSize: '14px',

              height: '42px'
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            Thêm loại khiếu nại
          </ButtonOk>
          <ButtonOk
            onClick={() => handleOpenModal()}
            style={{
              background: '#F43F5E',
              fontSize: '14px',
              height: '42px'
            }}
          >
            Xóa
          </ButtonOk>
        </Col>
      </Row>
      <Card>
        <Tabs type='card' defaultActiveKey='2' items={items} title='ngọ' />
      </Card>
      <Modal
        title={
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h2>Thêm mục cho khiếu nại</h2>
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
            <ButtonOk onClick={() => setIsOpen(false)}>Thêm</ButtonOk>
          </div>
        }
      >
        <Form layout='vertical'>
          <Form.Item label='Loại'>
            <Select
              options={[
                { value: 'Hộp kiểm', label: 'Hộp kiểm' },
                { value: 'Ô nhập', label: 'Ô nhập' },
                { value: 'Tải tệp lên', label: 'Tải tệp lên' },
                { value: 'Bộ chọn thời gian', label: 'Bộ chọn thời gian' }
              ]}
            />
          </Form.Item>
          <Form.Item label='Tên mục'>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
export default ComplaintClassifytManagement
