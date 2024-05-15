import { useMutation } from '@tanstack/react-query'
import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  Image,
  Input,
  Row,
  Typography,
  Upload,
  message
} from 'antd'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useReadProduct, useUpdateProduct } from '../../../api/Admin/product'
import { ButtonOk } from '../../../assets/styles/button.style'
import '../productManagement.css'
const ProductDetail = () => {
  const { Title } = Typography
  const [isUpdate, setIsUpdate] = useState(false)
  const location = useLocation()
  const paramsString = location.pathname.split('/')[3]
  const uuid = paramsString.split('&')
  const [fileList, setFileList] = useState([])
  const { data: productInfo, refetch } = useReadProduct(uuid[0])
  const [form] = Form.useForm()
  useEffect(() => {
    if (productInfo) {
      form.setFieldsValue({
        name: productInfo.name,
        code: productInfo.code,
        price: productInfo.price,
        description: productInfo.description,
        unit: productInfo.unit,
        features: productInfo.features,
        quantity: productInfo.quantity
      })
    }
  }, [productInfo, form])

  const { mutate: updateProduct } = useMutation({
    mutationFn: useUpdateProduct,
    onSuccess: () => {
      console.log('Update product success')
      message.success('Cập nhật sản phẩm thành công')
      refetch()
      setIsUpdate(false)
    }
  })
  const handleFileChange = ({ fileList }) => {
    setFileList(fileList)
  }
  const onUpdateProduct = (values) => {
    const formData = new FormData()
    formData.append('name', values.name)
    formData.append('code', values.code)
    formData.append('price', values.price)
    formData.append('description', values.description)
    formData.append('unit', values.unit)
    formData.append('features', values.features)
    formData.append('quantity', values.quantity)
    formData.append('isChangeImage', true)
    fileList.forEach((file) => {
      formData.append('images', file)
    })
    formData.append('uuid', uuid[0])
    updateProduct(formData)
  }
  return (
    <div>
      <Form className='tabled' form={form} onFinish={onUpdateProduct}>
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
              Chi tiết sản phẩm
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
        <Card
          className='productForm'
          style={{
            width: '1000px',
            margin: 'auto',
            height: 680,
            maxHeight: 680,
            overflowX: 'hidden'
          }}
        >
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                className='customHorizontal'
                name='name'
                label='Tên Sản phẩm'
                rules={[{ required: true, message: 'Yêu cầu thông tin' }]}
              >
                <Input placeholder='Nhập tên Sản phẩm' disabled={!isUpdate} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                className='customHorizontal'
                name='code'
                label='Mã Sản phẩm'
                rules={[{ required: true, message: 'Yêu cầu thông tin' }]}
              >
                <Input placeholder='Nhập mã Sản phẩm' disabled={!isUpdate} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                className='customHorizontal'
                name='price'
                label='Giá tiền'
                rules={[{ required: true, message: 'Yêu cầu thông tin' }]}
              >
                <Input placeholder='Nhập giá tiền' disabled={!isUpdate} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                className='customHorizontal'
                name='quantity'
                label='Số lượng'
                rules={[{ required: true, message: 'Yêu cầu thông tin' }]}
              >
                <Input placeholder='Nhập số lượng' disabled={!isUpdate} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                className='customHorizontal'
                name='unit'
                label='Đơn vị '
              >
                <Input placeholder='Nhập đơn vị' disabled={!isUpdate} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                className='customHorizontal'
                name='features'
                label='Mô tả đặc điểm sản phẩm'
              >
                <Input.TextArea disabled={!isUpdate} placeholder='Nhập mô tả' />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                className='customHorizontal'
                name='description'
                label='Ghi chú'
              >
                <Input.TextArea
                  disabled={!isUpdate}
                  placeholder='Nhập ghi chú'
                />
              </Form.Item>
            </Col>
          </Row>
          {isUpdate === false ? (
            <Row gutter={16}>
              <Col>
                <Form.Item
                  className='customHorizontal'
                  name='image'
                  label='Hình ảnh mô tả'
                >
                  <Image src={`${productInfo?.images[0]?.url}`} />
                </Form.Item>
              </Col>
            </Row>
          ) : (
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  className='customHorizontal'
                  label='Tải ảnh lên'
                  name='images'
                >
                  <Upload
                    fileList={fileList}
                    onChange={handleFileChange}
                    beforeUpload={() => false}
                  >
                    <Button>Tải lên</Button>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
          )}
        </Card>
      </Form>
    </div>
  )
}
export default ProductDetail
