// NewComplaintTypePage.js
import { useMutation } from '@tanstack/react-query'
import { Button, Card, Col, Form, Input, Row, Select, Typography } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreateComplaintType } from '../../../api/Admin/complaint'
import { ButtonOk } from '../../../assets/styles/button.style'
import { PATH } from '../../../contants/common'

const { Option } = Select
const NewComplaintType = () => {
  const navigate = useNavigate()
  const domain = '/' + window.location.pathname.split('/')[1]
  const [form] = Form.useForm()
  const [listOfField, setListOfField] = useState([])
  const { Title } = Typography
  const { mutate: mutateCreateComplaintType } = useMutation({
    mutationFn: useCreateComplaintType,
    onSuccess: () => {
      console.log('Create complaint type successfully')
      navigate(`${domain + PATH.COMPLAINTCLASSIFY}`)
    },
    onError: (error) => {
      console.log('Create complaint type failed', error)
    }
  })
  const handleAddField = () => {
    setListOfField([
      ...listOfField,
      {
        name: '',
        isFieldFile: false,
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
    if (key === 'name' && value === 'Tải tệp lên') {
      updatedList[index] = {
        ...updatedList[index],
        [key]: value,
        isFieldFile: true,
        maxNumOfFiles: 1
      }
    } else {
      updatedList[index] = { ...updatedList[index], [key]: value }
    }
    setListOfField(updatedList)
  }
  const handleOptionChange = (index, optionIndex, e) => {
    const updatedList = [...listOfField]
    updatedList[index].listOptions[optionIndex] = e.target.value
    setListOfField(updatedList)
  }

  const addOption = (index) => {
    const updatedList = [...listOfField]
    updatedList[index].listOptions.push('')
    setListOfField(updatedList)
  }

  const removeOption = (index, optionIndex) => {
    const updatedList = [...listOfField]
    updatedList[index].listOptions.splice(optionIndex, 1)
    setListOfField(updatedList)
  }
  const renderFieldInput = (field, index) => {
    switch (field.name) {
      case 'Trả lời ngắn':
      case 'Trả lời dài':
        return (
          <>
            <Input
              placeholder='Mô tả trường'
              value={field.title}
              onChange={(e) => handleChange(index, 'title', e.target.value)}
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
              <Option value='jpg'>.jpg</Option>
              <Option value='doc'>.doc</Option>
              <Option value='pdf'>.pdf</Option>
            </Select>
            <Input
              placeholder='Mô tả trường'
              value={field.title}
              onChange={(e) => handleChange(index, 'title', e.target.value)}
              style={{ marginTop: 10 }}
            />
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
            <Input
              placeholder='Mô tả trường'
              value={field.title}
              onChange={(e) => handleChange(index, 'title', e.target.value)}
              style={{ marginTop: 10 }}
            />
            {field.listOptions.map((option, optionIndex) => (
              <div key={optionIndex}>
                <Input
                  placeholder={`Option ${optionIndex + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(index, optionIndex, e)}
                  style={{ marginTop: 10 }}
                />
                <Button
                  type='link'
                  danger
                  onClick={() => removeOption(index, optionIndex)}
                >
                  Remove Option
                </Button>
              </div>
            ))}
            <Button onClick={() => addOption(index)}>Add Option</Button>
          </>
        )
      case 'Trắc nghiệm':
        return (
          <>
            <Input
              placeholder='Mô tả trường'
              value={field.title}
              onChange={(e) => handleChange(index, 'title', e.target.value)}
              style={{ marginTop: 10 }}
            />
            {field.listOptions.map((option, optionIndex) => (
              <div key={optionIndex}>
                <Input
                  placeholder={`Option ${optionIndex + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(index, optionIndex, e)}
                  style={{ marginTop: 10 }}
                />
                <Button
                  type='link'
                  danger
                  onClick={() => removeOption(index, optionIndex)}
                >
                  Remove Option
                </Button>
              </div>
            ))}
            <Button onClick={() => addOption(index)}>Add Option</Button>
          </>
        )
      case 'Bộ chọn thời gian':
        return (
          <>
            <Input
              placeholder='Mô tả trường'
              value={field.title}
              onChange={(e) => handleChange(index, 'title', e.target.value)}
              style={{ marginTop: 10 }}
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
      mutateCreateComplaintType(newComplaintType)
    })
  }

  return (
    <div className='tabled'>
      <Row gutter={[24, 0]} style={{ marginBottom: '14px' }}>
        <Col md={20}>
          <Title level={4}>Tạo loại khiếu nại mới</Title>
        </Col>
      </Row>
      <Card>
        <Form form={form} layout='vertical'>
          <Form.Item
            name='name'
            label={
              <span style={{ 'font-weight': 'bold' }}>Tên loại khiếu nại</span>
            }
            rules={[
              { required: true, message: 'Vui lòng nhập tên loại khiếu nại' }
            ]}
          >
            <Input placeholder='Tên loại khiếu nại' />
          </Form.Item>
          <Form.Item
            name='description'
            label={
              <span style={{ 'font-weight': 'bold' }}>
                Mô tả loại khiếu nại
              </span>
            }
            rules={[
              { required: true, message: 'Vui lòng nhập mô tả loại khiếu nại' }
            ]}
          >
            <Input.TextArea placeholder='Mô tả loại khiếu nại' />
          </Form.Item>
          <Form.Item
            label={
              <span style={{ 'font-weight': 'bold' }}>Trường dữ liệu</span>
            }
          >
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
          <Form.Item>
            <ButtonOk type='primary' onClick={handleOk}>
              Tạo mới
            </ButtonOk>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default NewComplaintType
