import { Col, Row, Table, Typography } from 'antd'
import { FiInfo } from 'react-icons/fi'

const CustomerComplaint = () => {
  const { Title } = Typography
  const columns = [
    {
      title: 'Mã khiếu nại',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: 'LOẠI KHIẾU NẠI',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Ngày gửi',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: 'THAO TÁC',
      dataIndex: '',
      key: 'x',
      width: '7%',
      render: () => (
        <div style={{ gap: '15px', display: 'flex' }}>
          <FiInfo size={24} />
        </div>
      )
    }
  ]
  const data = [
    {
      code: 'KN001',
      type: 'Khiếu nại sản phẩm',
      date: '20/10/2021',
      status: 'Đang xử lý'
    },
    {
      code: 'KN002',
      type: 'Khiếu nại sản phẩm',
      date: '20/10/2021',
      status: 'Đang xử lý'
    }
  ]
  return (
    <div>
      <Row gutter={12} style={{ marginBottom: '16px' }}>
        <Col span={19}>
          <Title level={3}>Danh sách Yêu cầu báo giá</Title>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}
export default CustomerComplaint
