import {
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Typography
} from 'antd'
import Card from 'antd/lib/card/Card'

import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  useGetDetailType,
  useGetTypeComplaint
} from '../../../../api/Admin/complaint'
import { useCreateComplaint } from '../../../../api/Customer/complaint'
import { ButtonOk } from '../../../../assets/styles/button.style'
import { PATH } from '../../../../contants/common'
import { StyledSelect } from '../../../component/ComponentOfForm'
import '../complaintManagement.css'

const ChildrenComponent = ({ uuid }) => {
  const [fileList, setFileList] = useState([])
  const [form] = Form.useForm()
  const { data: detailType } = useGetDetailType(uuid)
  const navigate = useNavigate()
  const domain = '/' + window.location.pathname.split('/')[1]
  const { mutate: createComplaint } = useMutation({
    mutationFn: useCreateComplaint,
    onSuccess: () => {
      console.log('Create complaint success')
      navigate(`${domain + PATH.CUSTOME_URL.COMPLAINT}`)
    }
  })

  if (!detailType) {
    return <div>Chọn loại khiếu nại bạn muốn tạo</div>
  }
  const handleFileChange = (e) => {
    const files = e.target.files
    const fileList = Array.from(files)
    setFileList(fileList)
  }
  const handleOk = () => {
    form.validateFields().then((values) => {
      const sentDate = new Date().toISOString()
      const valueFieldComplaint = []
      const formData = new FormData()
      formData.append('status', 'PENDING')
      formData.append('typeComplaintUUID', uuid)
      formData.append('sentDate', sentDate)
      formData.append('billUUID', 'ec6bea58-8362-4483-9685-b0065f43e370')
      formData.append('customerUUID', '08bce84d-8e57-4d56-9148-07894fc04c1f')

      detailType?.listOfField.forEach((field) => {
        switch (field.name) {
          case 'Trả lời ngắn':
          case 'Trả lời dài':
            valueFieldComplaint.push({
              fieldComplaintUUID: field.uuid,
              value: [values[field.name]]
            })
            break
          case 'Hộp kiểm':
            const checkboxValues = field.listOptions?.map(
              (option) => !!values[field.name]?.includes(option)
            )
            valueFieldComplaint.push({
              fieldComplaintUUID: field.uuid,
              value: [checkboxValues.toString()]
            })
            break
          case 'Trắc nghiệm':
            const selectedRadio = values[field.name]
            const selectedOptionIndex = field.listOptions.indexOf(selectedRadio)
            valueFieldComplaint.push({
              fieldComplaintUUID: field.uuid,
              value: [selectedOptionIndex.toString()]
            })
            break
          case 'Tải tệp lên':
            valueFieldComplaint.push({
              fieldComplaintUUID: field.uuid,
              value: [fileList?.map((file, index) => index).toString()]
            })
            break
          case 'Bộ chọn thời gian':
            const selectedDate = values[field.name].toISOString()
            valueFieldComplaint.push({
              fieldComplaintUUID: field.uuid,
              value: [selectedDate]
            })
            break
          default:
            // Handle other field types if needed
            break
        }
      })
      formData.append(
        'valueFieldComplaint',
        JSON.stringify(valueFieldComplaint)
      )
      fileList.forEach((file) => {
        formData.append('images', file)
      })
      createComplaint(formData)
    })
  }
  const renderFieldInput = (field) => {
    switch (field.name) {
      case 'Trả lời ngắn':
        return (
          <Form.Item name={field.name}>
            <Input />
          </Form.Item>
        )
      case 'Trả lời dài':
        return (
          <Form.Item name={field.name}>
            <Input.TextArea />
          </Form.Item>
        )
      case 'Hộp kiểm':
        return (
          <Form.Item name={field.name}>
            <Checkbox.Group>
              {field.listOptions?.map((option) => (
                <Checkbox value={option}>{option}</Checkbox>
              ))}
            </Checkbox.Group>
          </Form.Item>
        )
      case 'Trắc nghiệm':
        return (
          <Form.Item name={field.name}>
            <Radio.Group>
              {field.listOptions?.map((option) => (
                <Radio value={option}>{option}</Radio>
              ))}
            </Radio.Group>
          </Form.Item>
        )
      case 'Tải tệp lên':
        return (
          <Form.Item
            name={field.name}
            valuePropName='fileList'
            getValueFromEvent={handleFileChange}
          >
            <input type='file' onChange={handleFileChange} />
          </Form.Item>
        )
      case 'Bộ chọn thời gian':
        return (
          <Form.Item name={field.name}>
            <DatePicker name={field.name} />
          </Form.Item>
        )
      default:
        return <Input />
    }
  }

  return (
    <div>
      <Form layout='horizontal' form={form}>
        {detailType?.listOfField?.map((field, index) => (
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
        <ButtonOk onClick={handleOk} type='primary'>
          Tạo khiếu nại
        </ButtonOk>
      </Form>
    </div>
  )
}

const ClientNewComplaint = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [hasBill, setHasBill] = useState(false)
  const location = useLocation()
  const params = location.state
  useEffect(() => {
    if (params) {
      setHasBill(true)
    }
  }, [params])
  const { Title } = Typography
  const { data: typeComplaint } = useGetTypeComplaint()
  const typeComplaintOptions = typeComplaint?.item?.map((item) => ({
    value: item.uuid,
    label: item.name
  }))
  const handleSelectChange = (value) => {
    console.log(value)
    setSelectedOption(value)
  }

  return (
    <div>
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
            Tạo mới khiếu nại
          </Title>
        </Col>
        <Col
          md={4}
          style={{ display: 'flex', justifyContent: 'right', gap: '8px' }}
        >
          <ButtonOk
            className='cancelComplainBtn'
            style={{ fontSize: '14px', height: '42px', background: '#F43F5E' }}
          >
            Hủy khiếu nại
          </ButtonOk>
        </Col>
      </Row>

      <Card className='clientComplaint'>
        <Row gutter={16}>
          <Col span={8} offset={1}>
            <StyledSelect
              options={typeComplaintOptions}
              placeholder='Chọn loại yêu cầu'
              onChange={handleSelectChange}
            />
          </Col>
          <Col offset={2}>{hasBill && <Input value={params?.code} />}</Col>
        </Row>

        <Row gutter={[8, 16]} style={{ marginRight: '24px' }}>
          <Col span={16} offset={4}>
            <Card title={'Thông tin khiếu nại'}>
              <ChildrenComponent uuid={selectedOption} />
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default ClientNewComplaint
