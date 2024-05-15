import { UploadOutlined } from '@ant-design/icons'
import { useMutation } from '@tanstack/react-query'
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Switch,
  Typography,
  Upload
} from 'antd'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useReadTask, useSendEmail } from '../../../api/Admin/activity'

const TaskDetail = () => {
  const [autoAnnounceEmp, setAutoAnnounceEmp] = useState(false)
  const [autoAnnounceCus, setAutoAnnounceCus] = useState(false)
  const [showCreateEmailModal, setShowCreateEmailModal] = useState(false)
  const { Title } = Typography
  const location = useLocation()
  const paramsString = location.pathname.split('/')[5]
  const uuid = paramsString.split('&')
  const { data: taskDetail } = useReadTask(uuid[0])
  const [fileList, setFileList] = useState([])
  const { mutate: sendEmail } = useMutation({
    mutationFn: useSendEmail,
    onSuccess: () => {
      console.log('Send email success')
    }
  })
  const layout = {
    labelCol: {
      span: 10
    },
    wrapperCol: {
      span: 14
    }
  }
  const [form] = Form.useForm()
  useEffect(() => {
    if (taskDetail) {
      form.setFieldsValue({
        customerName: taskDetail.customerName,
        status: taskDetail.status,
        createdDate: dayjs(taskDetail.createdDate),
        note: taskDetail.note,
        startDate: dayjs(taskDetail.startDate),
        endDate: dayjs(taskDetail.endDate)
      })
    }
  }, [taskDetail, form])
  const handleCreateEmailClick = () => {
    setShowCreateEmailModal(true)
  }

  const handleCancelCreateEmail = () => {
    setShowCreateEmailModal(false)
  }

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList)
  }
  const handleCreateEmail = (values) => {
    const formData = new FormData()
    formData.append('subject', values.subject)
    formData.append('content', values.content)
    formData.append('activityUUID', uuid[0])
    fileList.forEach((file) => {
      formData.append('files', file)
    })

    sendEmail(formData)
    setShowCreateEmailModal(false)
  }
  return (
    <>
      <Row>
        <Col md={20}>
          <Title
            level={4}
            style={{
              marginLeft: '10px',
              marginTop: '4px',
              fontWeight: '700'
            }}
          >
            {' '}
            Chi tiết nhiệm vụ
          </Title>
        </Col>
      </Row>
      <Form {...layout} form={form} name='control-hooks' key={'activityForm'}>
        <Card>
          <Row gutter={8}>
            <Col span={6} xl={6}>
              <Form.Item label={'Trạng thái'} name={'status'}>
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={6} xl={6}>
              <Form.Item label={'Ngày hoàn thành'} name={'doneDate'}>
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={6} xl={6}>
              <Form.Item label={'Tên khách hàng'} name={'customerName'}>
                <Input disabled />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={8}>
            <Col span={6}>
              <Form.Item
                label={'Ngày tạo'}
                name={'createdDate'}
                rules={[
                  {
                    required: true,
                    message: 'Yêu cầu thông tin'
                  }
                ]}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label={'Ngày bắt đầu'}
                name={'startDate'}
                rules={[
                  {
                    required: true,
                    message: 'Yêu cầu thông tin'
                  }
                ]}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label={'Ngày kết thúc'}
                name={'endDate'}
                rules={[
                  {
                    required: true,
                    message: 'Yêu cầu thông tin'
                  }
                ]}
              >
                <DatePicker />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={8}>
            <Col span={6}>
              <Form.Item label={'Ghi chú'} name={'note'}>
                <Input.TextArea
                  style={{
                    height: 100,
                    color: 'black',
                    fontSize: 14,
                    fontWeight: 'normal'
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item
                name='autoAnnounceEmp'
                label='Tư động thông báo nhân viên:'
              >
                <Switch
                  // defaultChecked={false}
                  // style={{ backgroundColor: '#f5f5f5' }}
                  checked={autoAnnounceEmp}
                  onChange={(value) => {
                    setAutoAnnounceEmp(value)
                  }}
                />
              </Form.Item>
              <Form.Item
                name='autoAnnounceCus'
                label='Tự động thông báo khách hàng:'
              >
                <Switch
                  // defaultChecked={false}
                  checked={autoAnnounceCus}
                  onChange={(value) => {
                    setAutoAnnounceCus(value)
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row justify='center' style={{ marginTop: '20px' }}>
            <Button
              type='primary'
              style={{ backgroundColor: 'blue' }}
              onClick={handleCreateEmailClick}
            >
              Thêm Email
            </Button>
          </Row>
        </Card>
      </Form>

      {/* Modal tạo email mới */}
      <Modal
        title='Tạo Email Mới'
        open={showCreateEmailModal}
        onCancel={handleCancelCreateEmail}
        footer={null}
      >
        <Form
          name='create-email-form'
          onFinish={handleCreateEmail}
          initialValues={{ subject: '', content: '' }}
          layout='vertical'
        >
          <Form.Item
            name='subject'
            label='Tiêu đề mail'
            rules={[{ required: true, message: 'Vui lòng nhập tiêu đề!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='content'
            label='Nội dung email'
            rules={[{ required: true, message: 'Vui lòng nhập nội dung!' }]}
          >
            <Input.TextArea rows={8} />
          </Form.Item>
          <Form.Item label='Tải tệp lên' name='files'>
            <Upload
              fileList={fileList}
              onChange={handleFileChange}
              beforeUpload={() => false} // Tắt chức năng tự động tải lên
            >
              <Button icon={<UploadOutlined />}>Chọn tệp</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Row justify='end'>
              <Button
                onClick={handleCancelCreateEmail}
                style={{ marginRight: 8 }}
              >
                Hủy
              </Button>
              <Button
                type='primary'
                style={{ backgroundColor: 'blue' }}
                htmlType='submit'
              >
                Tạo Email
              </Button>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default TaskDetail
