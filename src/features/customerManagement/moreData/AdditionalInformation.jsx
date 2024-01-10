import { Col, Form, Input, Row, Table, Typography } from 'antd'

import { HiInformationCircle, HiOutlineTrash } from 'react-icons/hi'
import { StyledDatepicker, StyledSelect } from '../../component/ComponentOfForm'
const AdditionalInformation = ({ typeCustomer }) => {
  const data = [
    { code: 'HT-0001', date: '23-11-2023', status: 'Đã gửi' },
    { code: 'HT-0001', date: '23-11-2023', status: 'Đã gửi' }
  ]
  const columns1 = [
    {
      title: 'Mã Nhân viên',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: 'Tên nhân viên chăm sóc',
      dataIndex: 'date',
      key: 'date'
    },

    {
      title: 'THAO TÁC',
      dataIndex: '',
      key: 'x',
      width: '7%',
      render: () => (
        <div style={{ gap: '15px', display: 'flex' }}>
          <HiOutlineTrash size={24} />
          <HiInformationCircle size={24} />
        </div>
      )
    }
  ]
  // const columns2 = [
  //   {
  //     title: 'Mã hóa đơn',
  //     dataIndex: 'code',
  //     key: 'code'
  //   },
  //   {
  //     title: 'Ngày tạo',
  //     dataIndex: 'date',
  //     key: 'date'
  //   },
  //   {
  //     title: 'Trạng thái',
  //     dataIndex: 'status',
  //     key: 'address'
  //   },
  //   {
  //     title: 'THAO TÁC',
  //     dataIndex: '',
  //     key: 'x',
  //     width: '7%',
  //     render: () => (
  //       <div style={{ gap: '15px', display: 'flex' }}>
  //         <HiOutlineTrash size={24} />
  //         <HiInformationCircle size={24} />
  //         <FiShare2 size={24} />
  //       </div>
  //     )
  //   }
  // ]
  const { Title } = Typography
  return (
    <>
      <Form layout='vertical'>
        {typeCustomer === 1 && (
          <div>
            <Row gutter={16}>
              <Col span={12} xl={18}>
                <Title level={4}>Thông tin Người đại diện doanh nghiệp</Title>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label={'Tên người đại diện'}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={'Giới tính'}>
                  <StyledSelect />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={'Ngày sinh'}>
                  <StyledDatepicker />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <Form.Item label={'CCCD'}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={'Quốc tịch'}>
                  <StyledSelect />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={'Chức vụ'}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8} xl={8}>
                <Form.Item label={'Số điện thoại'}>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8} xl={8}>
                <Form.Item label={'Email'}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </div>
        )}

        <Title level={4}>Thông tin nhân viên</Title>

        <Row gutter={16}>
          <Col span={24}>
            <Table columns={columns1} dataSource={data} />
          </Col>
        </Row>
      </Form>
    </>
  )
}
export default AdditionalInformation
