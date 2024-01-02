import { Button, Col, Form, Input, Row, Table } from 'antd'
import { useState } from 'react'
import { FiPlus, FiTrash2 } from 'react-icons/fi'

import { StyledModal } from '../../component/ComponentOfForm'

const BillForm = ({ visible, setVisible }) => {
  const [tableData, setTableData] = useState([
    {
      index: 1,
      name: 'Lê Huy Ngọ',
      code: 'SP-001',
      quantity: 12,
      price: '12.000.000'
    },
    {
      index: 2,
      name: 'Lê Huy Ngọ',
      code: 'SP-001',
      quantity: 12,
      price: '12.000.000'
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
      code: '',
      quantity: 0,
      price: ''
    }

    setTableData([...tableData, newItem])
    console.log('table', tableData)
  }

  const columns = [
    {
      title: 'Tên sản phẩm',
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
      title: 'Mã sản phẩm',
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
      width: '10%',
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (item, record, index) => (
        <Input
          defaultValue={item}
          onChange={(e) => handleCellChange(index, 'quantity', e.target.value)}
        />
      )
    },
    {
      title: 'Giá tiền',
      dataIndex: 'price',
      key: 'price',
      render: (item, record, index) => (
        <Input
          defaultValue={item}
          onChange={(e) => handleCellChange(index, 'price', e.target.value)}
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

  return (
    <StyledModal
      title={
        <div
          style={{ display: 'flex', gap: '5px', alignContent: 'space-between' }}
        >
          <div style={{ width: '90%' }}>
            <h2>Thêm Hóa đơn</h2>
          </div>
          <div style={{ display: 'flex', gap: '5px' }}>
            <Button onClick={() => setVisible(false)}>Hủy </Button>
            <Button style={{ background: '#F58220' }}>Thêm </Button>
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
      <Form layout='vertical'>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label={'Mã Báo giá'}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label={'Nhân viên tạo'}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label={'Mã nhân viên tạo'}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label={'Ngày tạo'}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Table columns={columns} dataSource={tableData} pagination={false} />
      <Button type='dashed' onClick={addRow} block icon={<FiPlus />}>
        Thêm sản phẩm
      </Button>
    </StyledModal>
  )
}

export default BillForm
