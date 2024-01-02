import { Button, Card, Col, Flex, Form, Input, Row } from 'antd'
import { HiInformationCircle, HiOutlineTrash } from 'react-icons/hi'

// Images

import { AiFillFilter } from 'react-icons/ai'

import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import FilterColumn from '../../../components/filterColumn/FilterColumn'
import BaseTable from '../../../components/table/BaseTable'
import CustomToggleButton from '../../component/CustomToggleButton'
import ActivityDetailForm from '../form/ActivityDetailForm'

const columns = [
  {
    title: 'NGÀY TẠO',
    dataIndex: 'createdAt',
    key: 'createdAt'
  },
  {
    title: 'KHÁCH HÀNG CHĂM SÓC',
    dataIndex: 'name',
    key: 'name',
    width: '25%',
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <FilterColumn
        selectedKeys={selectedKeys}
        setSelectedKeys={setSelectedKeys}
        confirm={confirm}
        clearFilters={clearFilters}
      />
    ),
    filterIcon: (filtered) => (
      <AiFillFilter style={{ color: filtered ? '#1890ff' : undefined }} />
    )
  },

  {
    title: 'NHÂN VIÊN PHỤ TRÁCH',
    key: 'employee',
    dataIndex: 'employee'
  },
  {
    title: 'NGÀY BẮT ĐẦU',
    key: 'startAt',
    dataIndex: 'startAt'
  },
  {
    title: 'NGÀY KẾT THÚC',
    key: 'finishAt',
    dataIndex: 'finishAt'
  },
  {
    title: 'TRẠNG THÁI',
    key: 'status',
    dataIndex: 'status'
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
const dataCustomer = [
  {
    id: '1',
    createdAt: '20/11/2022',
    name: 'Lê Huy Ngọ',
    employee: 'Phạm Nhật Thịnh',
    startAt: '21/11/2022',
    finishAt: '30/11/2022',
    status: 'Cần làm'
  },
  {
    id: '1',
    createdAt: '20/11/2022',
    name: 'Lê Huy Ngọ',
    employee: 'Phạm Nhật Thịnh',
    startAt: '21/11/2022',
    finishAt: '30/11/2022',
    status: 'Cần làm'
  },
  {
    id: '1',
    createdAt: '20/11/2022',
    name: 'Lê Huy Ngọ',
    employee: 'Phạm Nhật Thịnh',
    startAt: '21/11/2022',
    finishAt: '30/11/2022',
    status: 'Cần làm'
  },
  {
    id: '1',
    createdAt: '20/11/2022',
    name: 'Lê Huy Ngọ',
    employee: 'Phạm Nhật Thịnh',
    startAt: '21/11/2022',
    finishAt: '30/11/2022',
    status: 'Cần làm'
  },
  {
    id: '1',
    createdAt: '20/11/2022',
    name: 'Lê Huy Ngọ',
    employee: 'Phạm Nhật Thịnh',
    startAt: '21/11/2022',
    finishAt: '30/11/2022',
    status: 'Cần làm'
  },
  {
    id: '1',
    createdAt: '20/11/2022',
    name: 'Lê Huy Ngọ',
    employee: 'Phạm Nhật Thịnh',
    startAt: '21/11/2022',
    finishAt: '30/11/2022',
    status: 'Cần làm'
  },

  {
    id: '1',
    createdAt: '20/11/2022',
    name: 'Lê Huy Ngọ',
    employee: 'Phạm Nhật Thịnh',
    startAt: '21/11/2022',
    finishAt: '30/11/2022',
    status: 'Cần làm'
  }
]

// const data = dataCustomer.map((item) => {
//   return {
//     key: "1",
//     code: (
//       <>
//         <Avatar.Group>
//           <div className="avatar-info" avatar-info style={{ color: "#726BEA" }}>
//             {item.code}
//           </div>
//         </Avatar.Group>
//       </>
//     ),
//     name: (
//       <>
//         <div className="avatar-info">{item.name}</div>
//       </>
//     ),

//     email: (
//       <>
//         <div className="avatar-info">{item.email}</div>
//       </>
//     ),
//     number: (
//       <>
//         <div className="avatar-info">{item.number}</div>
//       </>
//     ),
//     employee: (
//       <>
//         <div className="avatar-info">{item.employee}</div>
//       </>
//     ),
//     source: (
//       <>
//         <div className="avatar-info">{item.source}</div>
//       </>
//     ),
//     phase: (
//       <>
//         <div className="avatar-info">{item.phase}</div>
//       </>
//     ),
//   };
// });

const ActivityDetail = () => {
  const [isShowFormDetail, setIsShowFormDetail] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      <div className='tabled'>
        <Form layout='vertical'>
          {' '}
          <Row gutter={[24, 0]}>
            {' '}
            <Col span={8}>
              <Form.Item label='Tên hoạt động'>
                <Input />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item label='Mô tả hoạt động'>
                <Input.TextArea style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <Row gutter={[24, 0]}>
          <Col xs='24' xl={24}>
            <Card
              bordered={false}
              className='criclebox tablespace mb-24'
              title={<CustomToggleButton />}
              extra={
                <>
                  <Flex wrap='wrap' gap='small'>
                    <Button type='primary' danger style={{ height: '40px' }}>
                      Xóa
                    </Button>
                    <Button
                      type='primary'
                      style={{ height: '40px', background: 'blue' }}
                      onClick={() => navigate('/new-customer')}
                    >
                      Tạo mới
                    </Button>
                  </Flex>
                </>
              }
            >
              <div className='table-responsive'>
                <BaseTable
                  columns={columns}
                  data={dataCustomer}
                  rowKey={(record) => record.id}
                  onRow={(record, rowIndex) => {
                    return {
                      onClick: () => {
                        setIsShowFormDetail(true)
                      }
                    }
                  }}
                  className='ant-border-space'
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <ActivityDetailForm
        visible={isShowFormDetail}
        setVisible={setIsShowFormDetail}
      />
    </>
  )
}
export default ActivityDetail
