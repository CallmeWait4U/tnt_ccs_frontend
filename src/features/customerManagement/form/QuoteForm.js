import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Table,
  InputNumber,
  DatePicker,
  Select,
  message
} from 'antd'

import { useState } from 'react'
import { StyledModal } from '../../component/ComponentOfForm'
import {
  useGetProductList,
  useCreatePriceQuote
} from '../../../api/Admin/customer'
import { useMutation } from '@tanstack/react-query'
const QuoteForm = ({ visible, setVisible, uuid, refetch }) => {
  const { data: productList } = useGetProductList()
  const [selectedProduct, setSelectedProduct] = useState([])

  const { mutate: createPriceQuote } = useMutation({
    mutationFn: useCreatePriceQuote,
    onSuccess: () => {
      message.success('Tạo báo giá thành công')
      refetch()
      setVisible(false)
    }
  })
  const handleQuantityChange = (uuid, quantity) => {
    setSelectedProduct((prevSelectedProducts) => {
      const updatedProducts = prevSelectedProducts.filter(
        (product) => product.uuid !== uuid
      )
      if (quantity > 0) {
        updatedProducts.push({ uuid, quantity })
      }
      return updatedProducts
    })
  }
  const handleNegotiatedPriceChange = (uuid, negotiatedPrice) => {
    setSelectedProduct((prevSelectedProducts) => {
      const updatedProducts = prevSelectedProducts.map((product) =>
        product.uuid === uuid ? { ...product, negotiatedPrice } : product
      )
      return updatedProducts
    })
  }

  const handleAddProduct = (uuid) => {
    if (!selectedProduct.find((product) => product.uuid === uuid)) {
      setSelectedProduct((prevSelectedProducts) => [
        ...prevSelectedProducts,
        { uuid, quantity: 0, negotiatedPrice: 0 }
      ])
    }
  }
  const columnModal = [
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
      title: 'Giá thương lượng',
      dataIndex: 'negotiatedPrice',
      key: 'negotiatedPrice',
      render: (_, record) => (
        <InputNumber
          min={0}
          defaultValue={0}
          onChange={(value) => handleNegotiatedPriceChange(record.uuid, value)}
        />
      )
    }
  ]
  const handleSubmit = (values) => {
    console.log(values)
    const requestBody = {
      ...values,
      createdDate: new Date().toISOString(),
      sentDate: new Date().toISOString(),
      customerUUID: uuid,
      products: selectedProduct
    }
    createPriceQuote(requestBody)
  }

  return (
    <StyledModal
      title={
        <div
          style={{ display: 'flex', gap: '5px', alignContent: 'space-between' }}
        >
          <div style={{ width: '90%' }}>
            <h2>Thêm báo giá</h2>
          </div>
          <div style={{ display: 'flex', gap: '5px' }}>
            <Button onClick={() => setVisible(false)}>Hủy </Button>
            <Button
              style={{ background: '#F58220' }}
              form='PQForm'
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
      <Form layout='vertical' id='PQForm' onFinish={handleSubmit}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item name='code' label={'Mã báo giá'}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name='priceQuoteUUID' label={'Mã yêu cầu báo giá'}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name='status' label={'Trạng thái'}>
              <Select
                options={[
                  { label: 'Đã gửi', value: 'SENT' },
                  { label: 'Chưa gửi', value: 'UNSENT' }
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name='effectiveDate' label={'Ngày hiệu lực'}>
              <DatePicker />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table
              columns={columnModal}
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

export default QuoteForm
