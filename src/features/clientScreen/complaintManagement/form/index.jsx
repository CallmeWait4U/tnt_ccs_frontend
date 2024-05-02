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

import { useState } from 'react'
import {
  useGetDetailType,
  useGetTypeComplaint
} from '../../../../api/Admin/complaint'
import { ButtonOk } from '../../../../assets/styles/button.style'
import { StyledSelect } from '../../../component/ComponentOfForm'
import '../complaintManagement.css'

const ChildrenComponent = ({ uuid }) => {
  const { data: detailType } = useGetDetailType(uuid)
  const [form] = Form.useForm()

  if (!detailType) {
    return <div>No data available</div> // Handle case where detailType is null or undefined
  }

  const handleOk = () => {
    form.validateFields().then((values) => {
      const { name, description } = values
      // Create the new complaint type object
      const newComplaintType = {
        name,
        description
      }
      console.log('New Complaint Type:', newComplaintType)
    })
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
      <Form layout='horizontal' form={form}>
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
        <ButtonOk onClick={handleOk} type='primary'>
          Tạo khiếu nại
        </ButtonOk>
      </Form>
    </div>
  )
}

const ClientNewComplaint = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const { Title } = Typography
  const { data: typeComplaint } = useGetTypeComplaint()
  const typeComplaintOptions = typeComplaint?.item.map((item) => ({
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
        <Form>
          <Row gutter={16}>
            <Col span={8} offset={1}>
              <Form.Item name='type' label='Loại khiếu nại'>
                <StyledSelect
                  options={typeComplaintOptions}
                  placeholder='Chọn loại yêu cầu'
                  onChange={handleSelectChange}
                />
              </Form.Item>
            </Col>

            <Col offset={2}>
              <Form.Item name='code' label='Mã hóa đơn'>
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[8, 16]} style={{ marginRight: '24px' }}>
            <Col span={16} offset={4}>
              <Card title={'Thông tin khiếu nại'}>
                <ChildrenComponent uuid={selectedOption} />
              </Card>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
}

export default ClientNewComplaint
