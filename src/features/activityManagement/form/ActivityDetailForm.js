import { Button, Card, Col, Form, Input, Modal, Row, Table } from 'antd'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { FiPlus, FiTrash2 } from 'react-icons/fi'
import styled from 'styled-components'
import { StyledDatepicker, StyledSelect } from '../../component/ComponentOfForm'

const ActivityDetailForm = ({ visible, setVisible }) => {
  const [tableData, setTableData] = useState([
    {
      index: 1,
      name: 'Lê Huy Ngọ',
      code: 'SP-001'
    },
    {
      index: 2,
      name: 'Lê Huy Ngọ',
      code: 'SP-001'
    }
  ])

  const addRow = () => {
    const maxIndex = tableData.reduce(
      (max, item) => (item.index > max ? item.index : max),
      0
    )
    const newItem = {
      index: maxIndex + 1,
      name: '',
      code: ''
    }

    setTableData([...tableData, newItem])
    console.log('table', tableData)
  }

  const columns = [
    {
      title: 'Mã Nhân viên',
      dataIndex: 'code',
      key: 'code',
      width: '15%',
      render: (item, record, index) => (
        <Input
          defaultValue={item}
          onChange={(e) => handleCellChange(index, 'code', e.target.value)}
        />
      )
    },
    {
      title: 'Tên Nhân viên',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      render: (item, record, index) => (
        <Input
          defaultValue={item}
          onChange={(e) => handleCellChange(index, 'name', e.target.value)}
        />
      )
    },

    {
      title: 'Action',
      width: '7%',
      render: (item) => (
        <Button
          type='link'
          icon={<FiTrash2 size={24} />}
          onClick={() => handleDeleteRow(item.index)}
        />
      )
    }
  ]

  const [isCanUpdate, setIsCanUpdate] = useState(false)
  const handleCellChange = (index, field, value) => {
    const updatedTableData = [...tableData]
    updatedTableData[index][field] = value
    setTableData(updatedTableData)
  }
  const handleDeleteRow = (index) => {
    const updatedData = tableData.filter((item) => item.index !== index)
    setTableData(updatedData)
    console.log('table', tableData)
  }
  const today = dayjs()
  return (
    <ModalStyle
      style={{ width: '1000px' }}
      title={
        <div
          style={{ display: 'flex', gap: '5px', alignContent: 'space-between' }}
        >
          <div style={{ width: '90%' }}>
            <h2>Chi tiết hoạt động</h2>
          </div>
          <div style={{ display: 'flex', gap: '5px' }}>
            <Button onClick={() => setVisible(false)}>Đóng </Button>

            <Button
              style={{ background: '#F58220' }}
              onClick={() => setIsCanUpdate(!isCanUpdate)}
            >
              {isCanUpdate ? 'Lưu' : 'Sửa'}
            </Button>
          </div>
        </div>
      }
      closeIcon={<></>}
      open={visible}
      onCancel={() => {
        setVisible(false)
      }}
      footer={<></>}
    >
      <Row gutter={[16, 16]}>
        <Col xl={24} xxl={12}>
          <Card title={null}>
            <Form layout='vertical'>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label='Kiểu hoạt động'>
                    <StyledSelect
                      value={'Kiểm tra báo giá'}
                      disabled={!isCanUpdate}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label='Mô tả'>
                    <Input.TextArea
                      value={
                        'Kiểm tra các mail trả lời của khách hàng về báo giá và trả lời cho họ.'
                      }
                      disabled={!isCanUpdate}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Form.Item label={'Ghi chú'}>
                    <Input.TextArea disabled={!isCanUpdate} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item label='Ngày tạo'>
                    <StyledDatepicker value={today} disabled={!isCanUpdate} />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label='Ngày bắt đầu'>
                    <StyledDatepicker value={today} disabled={!isCanUpdate} />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label='Ngày kết thúc'>
                    <StyledDatepicker value={today} disabled={!isCanUpdate} />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
        <Col xl={24} xxl={12}>
          <Card title={<h3>Nhân viên phụ trách</h3>}>
            <Table
              columns={columns}
              dataSource={tableData}
              pagination={false}
            />
            <Button
              type='dashed'
              onClick={addRow}
              block
              icon={<FiPlus />}
              disabled={!isCanUpdate}
            >
              Thêm sản phẩm
            </Button>
          </Card>
        </Col>
      </Row>
    </ModalStyle>
  )
}
const ModalStyle = styled(Modal)`
  width: 70vw !important;
`

export default ActivityDetailForm
