import { useMutation } from '@tanstack/react-query'
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Table,
  message
} from 'antd'
import { useState } from 'react'
import { useCreateBill, useGetProductList } from '../../../api/Admin/customer'
import { StyledModal } from '../../component/ComponentOfForm'
const BillForm = ({ visible, setVisible, customerUUID }) => {
  const { data: productList } = useGetProductList()
  const [selectedProducts, setSelectedProducts] = useState([])

  const { mutate: createBill } = useMutation({
    mutationFn: useCreateBill,
    onSuccess: () => {
      message.success('Tạo hóa đơn thành công')
      setVisible(false)
    }
  })
  const handleQuantityChange = (uuid, quantity) => {
    setSelectedProducts((prevSelectedProducts) => {
      const updatedProducts = prevSelectedProducts.filter(
        (product) => product.uuid !== uuid
      )
      if (quantity > 0) {
        updatedProducts.push({ uuid, quantity })
      }
      return updatedProducts
    })
  }
  const handleFixedPriceChange = (uuid, fixedPrice) => {
    setSelectedProducts((prevSelectedProducts) => {
      const updatedProducts = prevSelectedProducts.map((product) =>
        product.uuid === uuid ? { ...product, fixedPrice } : product
      )
      return updatedProducts
    })
  }

  const handleAddProduct = (uuid) => {
    if (!selectedProducts.find((product) => product.uuid === uuid)) {
      setSelectedProducts((prevSelectedProducts) => [
        ...prevSelectedProducts,
        { uuid, quantity: 0, fixedPrice: 0 }
      ])
    }
  }
  const columnsModal = [
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (_, record) => (
        <InputNumber
          min={1}
          defaultValue={0}
          onChange={(value) => handleQuantityChange(record.uuid, value)}
        />
      )
    },
    {
      title: 'Giá cố định',
      dataIndex: 'fixedPrice',
      key: 'fixedPrice',
      render: (_, record) => (
        <InputNumber
          min={0}
          defaultValue={0}
          onChange={(value) => handleFixedPriceChange(record.uuid, value)}
        />
      )
    }
  ]
  const handleSubmit = (values) => {
    console.log(values)
    const requestBody = {
      ...values,
      createdDate: new Date().toISOString(),
      customerUUID: customerUUID,
      priceQuoteUUID: 'eb2c6110-cc9c-4a73-ab6a-fc70d511ee96',
      products: selectedProducts
    }
    createBill(requestBody)
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
            <Button
              style={{ background: '#F58220' }}
              form='BillForm'
              key='submit'
              htmlType='submit'
            >
              Thêm{' '}
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
      <Form layout='vertical' id='BillForm' onFinish={handleSubmit}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name='code' label={'Mã hóa đơn'}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name='status' label={'Trạng thái'}>
              <Select
                options={[
                  { label: 'Đã thanh toán', value: 'PAID' },
                  { label: 'Chưa thanh toán', value: 'UNPAID' }
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table
              columns={columnsModal}
              dataSource={productList?.items || []}
              rowKey='uuid'
              style={{ overflow: 'auto' }}
              onRow={(record) => ({
                onClick: () => handleAddProduct(record.uuid)
              })}
            />
          </Col>
        </Row>
      </Form>
    </StyledModal>
  )
}

export default BillForm
