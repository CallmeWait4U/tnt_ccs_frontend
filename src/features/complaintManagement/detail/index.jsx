import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Image,
  Input,
  Radio,
  Row,
  Table,
  Typography
} from 'antd'
import Card from 'antd/lib/card/Card'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  useGetComplaintActivity,
  useReadComplaint
} from '../../../api/Admin/complaint'
import { ButtonOk } from '../../../assets/styles/button.style'
import { PATH } from '../../../contants/common'
import {
  StyledDatepicker,
  StyledModal,
  StyledSelect
} from '../../component/ComponentOfForm'
import '../complaintManagement.css'
const ComplaintDetail = () => {
  const location = useLocation()
  const paramsString = location.pathname.split('/')[3]
  const paramsArray = paramsString.split('&')
  const uuid = paramsArray[0]
  const { data: ComplaintData } = useReadComplaint(uuid)
  const { data: ComplaintActivity } = useGetComplaintActivity(uuid)
  const [form] = Form.useForm()
  const { Title } = Typography
  // const [isUpdate, setIsUpdate] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

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
  const columns = [
    {
      title: 'Mã nhân viên',
      dataIndex: 'employeeCode',
      key: 'employeeCode'
    },
    {
      title: 'Tên nhân viên CSKH',
      dataIndex: 'employeeName',
      key: 'employeeName'
    },
    {
      title: 'Ngày thực hiện',
      dataIndex: 'doneDate',
      key: 'doneDate',
      render: (text) => dayjs(text).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      title: 'Hoạt động',
      dataIndex: 'activityName',
      key: 'activityName'
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
      key: 'note'
    }
  ]

  const [dataTable, setDataTable] = useState([])
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
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
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
  const addRow = () => {
    // const maxIndex = dataTable.reduce(
    //   (max, item) => (item.index > max ? item.index : max),
    //   0
    // )
    const newItem = {}

    setDataTable([...dataTable, newItem])
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
          {ComplaintData?.status !== 'SOLVED' && (
            <ButtonOk
              className='deleteComplainBtn'
              style={{
                fontSize: '14px',
                height: '42px',
                background: '#F43F5E'
              }}
            >
              Cập nhật trạng thái
            </ButtonOk>
          )}
          <ButtonOk
            type='primary'
            className='historyActBtn'
            style={{ fontSize: '14px', height: '42px' }}
            onClick={() => setIsOpen(true)}
          >
            Lịch sử hoạt động
          </ButtonOk>
        </Col>
      </Row>

      <Card className='complaintForm'>
        <Form form={form}>
          <Row gutter={16}>
            <Col span={4} offset={1}>
              <Form.Item name='type' label='Loại khiếu nại'>
                <Input disabled={false} />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Form.Item name='date' label='Ngày gửi'>
                <StyledDatepicker disabled={false} />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Form.Item name='code' label='Mã hóa đơn'>
                <Input disabled={false} />
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
                  disabled={false}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[8, 16]} style={{ marginRight: '24px' }}>
            <Col span={12}>
              <Card title={'Thông tin chung của khách hàng'}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      className='customHorizontal'
                      name='name'
                      label='Tên khách hàng'
                    >
                      <Input placeholder='Tên khách hàng' disabled={false} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      className='customHorizontal'
                      name='cccd'
                      label='CCCD'
                    >
                      <Input placeholder='Nhập CCCD' disabled={false} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      className='customHorizontal'
                      name='email'
                      label='Email'
                    >
                      <Input placeholder='Nhập email' disabled={false} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      className='customHorizontal'
                      name='phone'
                      label='Số điện thoại'
                    >
                      <Input
                        placeholder='Nhập số điện thoại'
                        disabled={false}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Button
                    onClick={() => {
                      navigate(
                        `${PATH.CUSTOMER}/${ComplaintData.isBusiness}&${ComplaintData.customerUUID}`
                      )
                    }}
                  >
                    Chi tiết khách hàng
                  </Button>
                </Row>
              </Card>
            </Col>
            <Col span={12}>
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
                      <Col span={24}>{renderFieldInput(field)}</Col>
                    </Row>
                  </>
                ))}
              </Card>
            </Col>
          </Row>
        </Form>
      </Card>
      {isOpen && (
        <StyledModal
          title={
            <div
              style={{
                display: 'flex',
                gap: '5px',
                alignContent: 'space-between'
              }}
            >
              <div style={{ width: '90%' }}>
                <h2>Lịch sử hoạt động</h2>
              </div>
              <div style={{ display: 'flex', gap: '5px' }}>
                <Button onClick={() => setIsOpen(false)}>Hủy </Button>

                <Button style={{ background: '#F58220' }} onClick={addRow}>
                  Thêm
                </Button>
              </div>
            </div>
          }
          closeIcon={null}
          open={isOpen}
          footer={null}
        >
          <Table columns={columns} dataSource={ComplaintActivity?.items} />
        </StyledModal>
      )}
    </div>
  )
}
export default ComplaintDetail
