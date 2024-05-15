import React, { useState } from 'react'
// Images
import { useMutation } from '@tanstack/react-query'
import {
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Radio,
  Row,
  Select,
  Tabs,
  Typography,
  message
} from 'antd'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  useDeleteTypeComplaint,
  useGetDetailType,
  useGetTypeComplaint
} from '../../api/Admin/complaint'
import { ButtonOk } from '../../assets/styles/button.style'
const { Option } = Select

const NewComplaintTypeModal = ({ isOpen, setIsOpen }) => {
  const [form] = Form.useForm()
  const [listOfField, setListOfField] = useState([])

  const handleAddField = () => {
    setListOfField([
      ...listOfField,
      {
        name: '',
        isFieldFile: false,
        title: '',
        specificFileTypes: [],
        maxNumOfFiles: 0,
        listOptions: []
      }
    ])
  }

  const handleRemoveField = (index) => {
    const updatedList = [...listOfField]
    updatedList.splice(index, 1)
    setListOfField(updatedList)
  }

  const handleChange = (index, key, value) => {
    const updatedList = [...listOfField]
    updatedList[index] = { ...updatedList[index], [key]: value }
    setListOfField(updatedList)
  }

  const renderFieldInput = (field, index) => {
    switch (field.name) {
      case 'Trả lời ngắn':
      case 'Bộ chọn thời gian':
      case 'Trả lời dài':
        return (
          <>
            <Input
              placeholder='Mô tả trường'
              value={field.description}
              onChange={(e) =>
                handleChange(index, 'description', e.target.value)
              }
              style={{ marginTop: 10 }}
            />
          </>
        )
      case 'Tải tệp lên':
        return (
          <>
            <Select
              mode='tags'
              placeholder='Chọn định dạng tệp'
              value={field.specificFileTypes}
              onChange={(values) =>
                handleChange(index, 'specificFileTypes', values)
              }
              style={{ marginTop: 10, width: '100%' }}
            >
              <Option value='.pdf'>.pdf</Option>
              <Option value='.doc'>.doc</Option>
              <Option value='.docx'>.docx</Option>
            </Select>
            <Input
              type='number'
              placeholder='Số lượng tệp tối đa'
              value={field.maxNumOfFiles}
              onChange={(e) =>
                handleChange(index, 'maxNumOfFiles', parseInt(e.target.value))
              }
              style={{ marginTop: 10 }}
            />
          </>
        )
      case 'Hộp kiểm':
        return (
          <>
            <Checkbox.Group
              options={field.listOptions.map((option) => ({
                label: option,
                value: option
              }))}
              onChange={(values) => handleChange(index, 'listOptions', values)}
              style={{ marginTop: 10, display: 'block' }}
            />
          </>
        )
      case 'Trắc nghiệm':
        return (
          <>
            <Radio.Group
              options={field.listOptions.map((option) => ({
                label: option,
                value: option
              }))}
              onChange={(e) =>
                handleChange(index, 'listOptions', e.target.value)
              }
              style={{ marginTop: 10, display: 'block' }}
            />
          </>
        )
      default:
        return null
    }
  }

  const handleOk = () => {
    form.validateFields().then((values) => {
      const { name, description } = values
      // Create the new complaint type object
      const newComplaintType = {
        name,
        description,
        listOfField
      }
      console.log('New Complaint Type:', newComplaintType)
      // Here you can send the newComplaintType object to your API or do other operations
      setIsOpen(false)
    })
  }

  return (
    <Modal
      title='Thêm loại khiếu nại mới'
      visible={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={[
        <ButtonOk key='cancel' onClick={() => setIsOpen(false)}>
          Hủy
        </ButtonOk>,
        <ButtonOk key='add' type='primary' onClick={handleOk}>
          Thêm
        </ButtonOk>
      ]}
    >
      <Form form={form} layout='vertical'>
        <Form.Item
          name='name'
          label='Tên loại khiếu nại'
          rules={[
            { required: true, message: 'Vui lòng nhập tên loại khiếu nại' }
          ]}
        >
          <Input placeholder='Tên loại khiếu nại' />
        </Form.Item>
        <Form.Item
          name='description'
          label='Mô tả'
          rules={[
            { required: true, message: 'Vui lòng nhập mô tả loại khiếu nại' }
          ]}
        >
          <Input.TextArea placeholder='Mô tả loại khiếu nại' />
        </Form.Item>
        <Form.Item label='Trường dữ liệu'>
          {listOfField.map((field, index) => (
            <div key={index} style={{ marginBottom: 20 }}>
              <h4>{`Trường ${index + 1}`}</h4>
              <Select
                placeholder='Chọn loại trường'
                value={field.name}
                onChange={(value) => handleChange(index, 'name', value)}
                style={{ width: '100%', marginBottom: 10 }}
              >
                <Option value='Trả lời ngắn'>Trả lời ngắn</Option>
                <Option value='Trả lời dài'>Trả lời dài</Option>
                <Option value='Tải tệp lên'>Tải tệp lên</Option>
                <Option value='Hộp kiểm'>Hộp kiểm</Option>
                <Option value='Trắc nghiệm'>Trắc nghiệm</Option>
                <Option value='Bộ chọn thời gian'>Bộ chọn thời gian</Option>
              </Select>
              {renderFieldInput(field, index)}
              {listOfField.length > 1 && (
                <Button
                  type='link'
                  danger
                  onClick={() => handleRemoveField(index)}
                >
                  Xóa trường này
                </Button>
              )}
            </div>
          ))}
          <Button onClick={handleAddField}>Thêm trường dữ liệu</Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

const ChildrenComponent = ({ uuid, refetch }) => {
  const { data: detailType } = useGetDetailType(uuid)
  const { mutate: deleteTypeComplaint } = useMutation({
    mutationFn: useDeleteTypeComplaint,
    onSuccess: () => {
      console.log('Delete success')
      refetch()
    }
  })
  if (!detailType) {
    return <div>No data available</div> // Handle case where detailType is null or undefined
  }

  const renderFieldInput = (field) => {
    switch (field.name) {
      case 'Trả lời ngắn':
        return <Input />
      case 'Trả lời dài':
        return <Input.TextArea />
      case 'Hộp kiểm':
        return (
          <Checkbox.Group>
            {field.listOptions.map((option) => (
              <Checkbox value={option}>{option}</Checkbox>
            ))}
          </Checkbox.Group>
        )
      case 'Trắc nghiệm':
        return (
          <Radio.Group>
            {field.listOptions.map((option) => (
              <Radio value={option}>{option}</Radio>
            ))}
          </Radio.Group>
        )
      case 'Tải tệp lên':
        return <Input type='file' />
      case 'Bộ chọn thời gian':
        return <DatePicker />
      default:
        return <Input />
    }
  }

  return (
    <div>
      <Form layout='horizontal'>
        <Row>
          <Col span={12} offset={6}>
            <Card>
              {detailType?.listOfField.map((field, index) => (
                <>
                  <Row key={field.uuid} style={{ paddingBottom: '16px' }}>
                    <Col
                      style={{
                        display: 'flex',
                        textAlign: 'right',
                        alignItems: 'center'
                      }}
                    >
                      {field.title}
                    </Col>
                  </Row>
                  <Row style={{ paddingBottom: '16px' }}>
                    <Col span={24}>{renderFieldInput(field)}</Col>
                  </Row>
                </>
              ))}
              <ButtonOk
                onClick={() => {
                  if (detailType?.numsOfComaplaint > 0) {
                    message.error('Giai đoạn đang có khách hàng')
                  } else deleteTypeComplaint(detailType?.uuid)
                }}
                style={{
                  background: '#F43F5E',
                  fontSize: '14px',
                  height: '42px'
                }}
              >
                Xóa loại khiếu nại
              </ButtonOk>
            </Card>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
const ComplaintClassifytManagement = () => {
  const { data: typeComplaint, refetch } = useGetTypeComplaint()
  const [complaintList, setComplaintList] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const domain = '/' + window.location.pathname.split('/')[1]
  const navigate = useNavigate()
  useEffect(() => {
    if (typeComplaint) {
      const items =
        typeComplaint?.item?.map((complaint) => ({
          key: complaint.uuid,
          label: complaint.name,
          children: (
            <ChildrenComponent uuid={complaint.uuid} refetch={refetch()} />
          )
        })) || []
      setComplaintList(items)
    }
  }, [typeComplaint, refetch])

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
            style={{
              background: '#F58220',
              fontSize: '14px',

              height: '42px'
            }}
            onClick={() => navigate(`${domain}/complaint-type-create`)}
          >
            Thêm loại khiếu nại
          </ButtonOk>
        </Col>
      </Row>
      <Card>
        <Tabs type='card' defaultActiveKey='2' items={complaintList} />
      </Card>
      <NewComplaintTypeModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
export default ComplaintClassifytManagement
