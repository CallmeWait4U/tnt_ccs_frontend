import { Button, Col, Row, Table, Tag, Typography } from 'antd'

import { FiInfo, FiPlus, FiTrash2 } from 'react-icons/fi'

const ActivityHistory = ({ setIsShowActivityForm }) => {
  const data = [
    {
      name: 'HT-0001',
      deadLine: '23-11-2023',
      employee: ['Lê Huy Ngọ', 'Phạm Hồng Thịnh'],
      status: 'Đã gửi'
    },
    {
      name: 'HT-0001',
      deadLine: '23-11-2023',
      employee: ['Lê Huy Ngọ'],
      status: 'Đã gửi'
    }
  ]
  const columns1 = [
    {
      title: 'Hoạt động',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Ngày kết thúc',
      dataIndex: 'deadLine',
      key: 'deadLine'
    },
    {
      title: 'Nhân viên phụ trách',
      dataIndex: 'employee',
      key: 'employee',
      render: (item) => (
        <>
          {item.map((employeeItem, index) => (
            <div key={index}>
              <h5>{employeeItem}</h5>
            </div>
          ))}
        </>
      )
    },

    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (item) => <Tag>{item}</Tag>
    },
    {
      title: 'THAO TÁC',
      dataIndex: '',
      key: 'x',
      width: '7%',
      render: () => (
        <div style={{ gap: '15px', display: 'flex' }}>
          <FiTrash2 size={24} />
          <FiInfo size={24} />
        </div>
      )
    }
  ]
  const { Title } = Typography
  return (
    <>
      <Row gutter={12} style={{ marginBottom: '16px' }}>
        <Col span={19}>
          <Title level={3}>Hoạt động sắp tới</Title>
        </Col>
        <Col span={5} style={{ display: 'flex', justifyContent: 'right' }}>
          <Button icon={<FiPlus />} onClick={() => setIsShowActivityForm(true)}>
            Thêm mới
          </Button>
        </Col>
      </Row>
      <Table columns={columns1} dataSource={data} />
      <Row gutter={12} style={{ marginBottom: '16px' }}>
        <Col span={19}>
          <h1>Lịch sử hoạt động</h1>
        </Col>
        <Col span={5}></Col>
      </Row>
      <Table columns={columns1} dataSource={data} />
    </>
  )
}
export default ActivityHistory
