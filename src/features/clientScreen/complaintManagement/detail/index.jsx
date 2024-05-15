import {
  Checkbox,
  Col,
  DatePicker,
  Form,
  Image,
  Input,
  Radio,
  Row,
  Typography
} from 'antd'
import Card from 'antd/lib/card/Card'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useReadComplaint } from '../../../../api/Customer/complaint'
import { ButtonOk } from '../../../../assets/styles/button.style'
import {
  StyledDatepicker,
  StyledSelect
} from '../../../component/ComponentOfForm'
import '../complaintManagement.css'
const ClientComplaintDetail = () => {
  const location = useLocation()
  const paramsString = location.pathname.split('/')[4]
  const paramsArray = paramsString.split('&')
  const uuid = paramsArray[0]
  const { data: ComplaintData } = useReadComplaint(uuid)
  const [form] = Form.useForm()
  const { Title } = Typography
  // const [isUpdate, setIsUpdate] = useState(false)

  useEffect(() => {
    if (ComplaintData) {
      form.setFieldsValue({
        name: ComplaintData.customerName,
        email: ComplaintData.customerEmail,
        cccd: ComplaintData.customerCCCD,
        phone: ComplaintData.customerPhoneNumber,
        type: location.state.typeComplaintName,
        date: dayjs(ComplaintData.sentDate),
        code: ComplaintData.code,
        status: ComplaintData.status
      })
      ComplaintData?.listOfField.forEach((field, index) => {
        const valueField = ComplaintData?.valueFieldComplaint.find(
          (valueField) => valueField.fieldComplaintUUID === field.uuid
        )

        if (valueField) {
          const value = valueField.value[0]
          let fieldValue = value

          switch (field.name) {
            case 'Trả lời ngắn':
            case 'Trả lời dài':
              break
            case 'Hộp kiểm':
              fieldValue = value.split(',').map((item) => item === 'true')
              break
            case 'Trắc nghiệm':
              fieldValue = parseInt(value)
              break
            case 'Tải tệp lên':
              break
            case 'Bộ chọn thời gian':
              fieldValue = new Date(value)
              break
            default:
              break
          }
          form.setFieldsValue({
            [field.name]: fieldValue
          })
        }
      })
    }
  }, [ComplaintData, form, location.state.typeComplaintName])

  const renderFieldInput = (field) => {
    switch (field.name) {
      case 'Trả lời ngắn':
        return (
          <Form.Item name={field.name}>
            <Input value='Thái độ của nhân viên không tốt' disabled={true} />
          </Form.Item>
        )
      case 'Trả lời dài':
        return (
          <Form.Item name={field.name}>
            <Input.TextArea disabled={true} />
          </Form.Item>
        )
      case 'Hộp kiểm':
        return (
          <Form.Item name={field.name}>
            <Checkbox.Group>
              {field.listOptions.map((option, index) => (
                <Checkbox key={index} value={option} disabled={true}>
                  {option}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Form.Item>
        )
      case 'Trắc nghiệm':
        return (
          <Form.Item name={field.name}>
            <Radio.Group>
              {field.listOptions.map((option) => (
                <Radio value={option} disabled={true}>
                  {option}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
        )
      case 'Tải tệp lên':
        return (
          <Form.Item name={field.name}>
            {ComplaintData?.valueFieldComplaint.map((valueField) => {
              if (valueField.fieldComplaintUUID === field.uuid) {
                return (
                  <div key={valueField.value[0]}>
                    <Image
                      src={valueField.value[0]}
                      alt='Uploaded file'
                      style={{ maxWidth: '400px', maxHeight: '400px' }}
                    />
                  </div>
                )
              }
              return null
            })}
          </Form.Item>
        )
      case 'Bộ chọn thời gian':
        return (
          <Form.Item name={field.name}>
            <DatePicker disabled={true} />
          </Form.Item>
        )
      default:
        return (
          <Form.Item name={field.name}>
            <Input disabled={true} />
          </Form.Item>
        )
    }
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
            Khiếu nại #1
          </Title>
        </Col>
        <Col
          md={4}
          style={{ display: 'flex', justifyContent: 'right', gap: '8px' }}
        >
          <ButtonOk
            className='deleteComplainBtn'
            style={{
              fontSize: '14px',
              height: '42px',
              background: '#F43F5E'
            }}
          >
            Hủy khiếu nại
          </ButtonOk>
        </Col>
      </Row>

      <Card className='complaintForm'>
        <Form form={form}>
          <Row gutter={16}>
            <Col span={4} offset={1}>
              <Form.Item name='type' label='Loại khiếu nại'>
                <Input disabled={true} />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Form.Item name='date' label='Ngày gửi'>
                <StyledDatepicker disabled={true} />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Form.Item name='code' label='Mã hóa đơn'>
                <Input disabled={true} />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Form.Item name='status' label='Trạng thái'>
                <StyledSelect
                  options={[
                    { value: 'PENDING', label: 'Chưa xử lí' },
                    { value: 'PROCESSING', label: 'Đang xử lí' },
                    { value: 'SOLVED', label: 'Đã xử lí' },
                    { value: 'REPROCESS', label: 'Xử lý lại' }
                  ]}
                  disabled={true}
                />
              </Form.Item>
            </Col>
          </Row>

          <Card title={'Thông tin khiếu nại'}>
            {ComplaintData?.listOfField?.map((field, index) => (
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
                  <Col>{renderFieldInput(field)}</Col>
                </Row>
              </>
            ))}
          </Card>
        </Form>
      </Card>
    </div>
  )
}
export default ClientComplaintDetail
