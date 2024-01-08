import { Col, Row, Table, Typography } from 'antd'
import { data } from 'autoprefixer'
import { FiPlus } from 'react-icons/fi'
import { HiInformationCircle, HiOutlineTrash } from 'react-icons/hi'
import { ButtonOk } from '../../../assets/styles/button.style'

const CustomerQuoteBill = ({ setIsShowQuoteForm, setIsShowBillForm }) => {
  const columnsQuoteRequest = [
    {
      label: 'Mã Yêu cầu báo giá',
      dataIndex: 'code',
      key: 'code'
    },
    {
      label: 'Ngày tạo',
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
  const columnsQuote = [
    {
      label: 'Mã Yêu cầu báo giá',
      dataIndex: 'code',
      key: 'code'
    },
    {
      label: 'Ngày tạo',
      dataIndex: 'date',
      key: 'date'
    },
    {
      label: 'Trạng thái',
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
          <HiOutlineTrash size={24} />
          <HiInformationCircle size={24} />
        </div>
      )
    }
  ]
  const columnsBill = [
    {
      label: 'Mã Yêu cầu báo giá',
      dataIndex: 'code',
      key: 'code'
    },
    {
      label: 'Ngày tạo',
      dataIndex: 'date',
      key: 'date'
    },
    {
      label: 'Trạng thái',
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
          <HiOutlineTrash size={24} />
          <HiInformationCircle size={24} />
        </div>
      )
    }
  ]
  data = [
    {
      key: '23333',
      code: '001',
      date: '01/01/2021',
      status: 'Đã duyệt'
    },
    {
      key: '23334',
      code: '002',
      date: '02/01/2021',
      status: 'Đã duyệt'
    }
  ]
  const { Title } = Typography
  return (
    <div>
      <Row gutter={12} style={{ marginBottom: '16px' }}>
        <Col span={19}>
          <Title level={3}>Danh sách Yêu cầu báo giá</Title>
        </Col>
        <Col span={5} style={{ display: 'flex', justifyContent: 'right' }}>
          <ButtonOk icon={<FiPlus />} onClick={() => setIsShowQuoteForm(true)}>
            Thêm mới
          </ButtonOk>
        </Col>
      </Row>
      <Table columns={columnsQuoteRequest} dataSource={data} />
      <Row gutter={12} style={{ marginBottom: '16px' }}>
        <Col span={19}>
          <Title level={3}>Danh sách Báo giá</Title>
        </Col>
        <Col span={5} style={{ display: 'flex', justifyContent: 'right' }}>
          <ButtonOk icon={<FiPlus />} onClick={() => setIsShowBillForm(true)}>
            Thêm mới
          </ButtonOk>
        </Col>
      </Row>
      <Table columns={columnsQuote} dataSource={data} />
      <Row gutter={12} style={{ marginBottom: '16px' }}>
        <Col span={19}>
          <Title level={3}>Danh sách Hóa đơn</Title>
        </Col>
        <Col span={5} style={{ display: 'flex', justifyContent: 'right' }}>
          <ButtonOk icon={<FiPlus />} onClick={() => setIsShowBillForm(true)}>
            Thêm mới
          </ButtonOk>
        </Col>
      </Row>
      <Table columns={columnsBill} dataSource={data} />
    </div>
  )
}
export default CustomerQuoteBill
