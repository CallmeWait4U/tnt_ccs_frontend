import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Table,
  Typography
} from 'antd'
import Card from 'antd/lib/card/Card'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useReadComplaint } from '../../../api/Admin/complaint'
import { ButtonOk } from '../../../assets/styles/button.style'
import {
  StyledDatepicker,
  StyledModal,
  StyledSelect
} from '../../component/ComponentOfForm'
import '../complaintManagement.css'

const ComplaintDetail = () => {
  const location = useLocation()
  const paramsString = location.pathname.split('/')[2]
  const paramsArray = paramsString.split('&')
  const uuid = paramsArray[0]
  const { data: ComplaintData } = useReadComplaint(uuid)
  const [form] = Form.useForm()
  const { Title } = Typography
  const [isUpdate, setIsUpdate] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
    }
  }, [ComplaintData, form, location.state.typeComplaintName])
  const columns = [
    {
      title: 'Mã nhân viên',
      dataIndex: 'code',
      key: 'code',
      render: (text) => <Input />
    },
    {
      title: 'Tên nhân viên CSKH',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Input />
    },
    {
      title: 'Ngày thực hiện',
      dataIndex: 'date',
      key: 'date',
      render: (text) => <Input />
    },
    {
      title: 'Hoạt động',
      dataIndex: 'action',
      key: 'action',
      render: (text) => <Input />
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
      key: 'note',
      render: (text) => <Input />
    }
  ]

  const [dataTable, setDataTable] = useState([
    {
      index: 1,
      key: '1',
      code: 'NV001',
      name: 'Nguyễn Văn A',
      date: '20/10/2021',
      action: 'Xử lí lại',
      note: 'Không có ghi chú'
    },
    {
      index: 2,
      key: '2',
      code: 'NV002',
      name: 'Nguyễn Văn B',
      date: '20/10/2021',
      action: 'Xử lí lại',
      note: 'Không có ghi chú'
    }
  ])
  const renderFieldInput = (field) => {
    switch (field.name) {
      case 'Trả lời ngắn':
        return <Input value='Thái độ của nhân viên không tốt' disabled={true} />
      case 'Trả lời dài':
        return <Input.TextArea disabled={true} />
      case 'Hộp kiểm':
        return (
          <Checkbox.Group>
            {field.listOptions.map((option) => (
              <Checkbox value={option} disabled={true}>
                {option}
              </Checkbox>
            ))}
          </Checkbox.Group>
        )
      case 'Trắc nghiệm':
        return (
          <Radio.Group>
            {field.listOptions.map((option) => (
              <Radio value={option} disabled={true}>
                {option}
              </Radio>
            ))}
          </Radio.Group>
        )
      case 'Tải tệp lên':
        return <Input type='file' />
      case 'Bộ chọn thời gian':
        return <DatePicker disabled={true} />
      default:
        return <Input disabled={true} />
    }
  }
  const addRow = () => {
    const maxIndex = dataTable.reduce(
      (max, item) => (item.index > max ? item.index : max),
      0
    )
    const newItem = {
      index: maxIndex + 1,
      key: '2',
      code: 'NV002',
      name: 'Nguyễn Văn B',
      date: '20/10/2021',
      action: 'Xử lí lại',
      note: 'Không có ghi chú'
    }

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
                <Input disabled={!isUpdate} />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Form.Item name='date' label='Ngày gửi'>
                <StyledDatepicker disabled={!isUpdate} />
              </Form.Item>
            </Col>
            <Col span={4} offset={2}>
              <Form.Item name='code' label='Mã hóa đơn'>
                <Input disabled={!isUpdate} />
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
                  disabled={!isUpdate}
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
                      <Input
                        placeholder='Tên khách hàng'
                        disabled={!isUpdate}
                      />
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
                      <Input placeholder='Nhập CCCD' disabled={!isUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      className='customHorizontal'
                      name='email'
                      label='Email'
                    >
                      <Input placeholder='Nhập email' disabled={!isUpdate} />
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
                        disabled={!isUpdate}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={12}>
              <Card title={'Thông tin khiếu nại'}>
                {ComplaintData?.listOfField.map((field, index) => (
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
          <Table columns={columns} dataSource={dataTable} />
        </StyledModal>
      )}
    </div>
  )
}
export default ComplaintDetail
