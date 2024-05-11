import {
  FileOutlined,
  InfoCircleOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Button, Card, Col, Row, Typography } from 'antd'
import moment from 'moment'
import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { RiInformationFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { useGetAllTasks } from '../../api/Admin/activity'
import { useListMyCustomer } from '../../api/Admin/customer'
import AgGridCustomDateFilter from '../../components/aggrid/AgGridCustomDateFilter'
import AgGridCustomSetFilter from '../../components/aggrid/AgGridCustomSetFilter'
import AgGridCustomTextFilter from '../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../components/aggrid/AgGridTable'
import { PATH } from '../../contants/common'

const CompanyHome = () => {
  const { data: MyCustomer } = useListMyCustomer(0, 1)
  const { Title } = Typography
  const navigate = useNavigate()
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const { data: tasks } = useGetAllTasks(
    skip,
    take,
    'cf3ce732-a95f-484e-baa7-ccb672374e21'
  )

  const ActionComponent = (data) => {
    return (
      <div style={{ gap: '15px', display: 'flex' }}>
        <Button
          type='primary'
          shape='circle'
          style={{ backgroundColor: 'rgb(220,245,255)' }}
        >
          <RiInformationFill
            color='#00AEEF'
            size={24}
            onClick={() =>
              navigate(
                `${PATH.ACTIVITY}/'cf3ce732-a95f-484e-baa7-ccb672374e21'/task/${data.uuid}`
              )
            }
          />
        </Button>
        <Button
          type='primary'
          shape='circle'
          style={{ backgroundColor: '#FEF3E9' }}
        >
          <AiOutlineCheck color='#EBB425' size={24} />
        </Button>
      </div>
    )
  }
  const status = {
    OVERDUE: 'Đã trễ',
    INPROGRESS: 'Đang diễn ra',
    COMPLETED: 'Hoàn thành'
  }
  const colDefs = [
    {
      headerName: 'STT',
      field: 'index',
      valueGetter: (p) => Number(p.node?.rowIndex) + skip + 1,
      minWidth: 120,
      width: 120,
      sortable: false,
      filter: false,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      pinned: 'left',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
    },
    {
      headerName: 'NGÀY TẠO',
      field: 'createDate',
      minWidth: 200,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomDateFilter,
      filterParams: {
        type: 'date'
      },
      valueFormatter: ({ value }) => {
        return moment(value).format('DD-MM-YYYY')
      }
    },
    {
      headerName: 'KHÁCH HÀNG CHĂM SÓC',
      field: 'customerName',
      minWidth: 200,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'NHÂN VIÊN PHỤ TRÁCH',
      field: 'employeeName',
      minWidth: 200,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'NGÀY BẮT ĐẦU',
      field: 'startDate',
      minWidth: 200,
      filter: AgGridCustomDateFilter,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filterParams: {
        type: 'date'
      },
      valueFormatter: ({ value }) => {
        return moment(value).format('DD-MM-YYYY')
      }
    },
    {
      headerName: 'NGÀY KẾT THÚC',
      field: 'endDate',
      minWidth: 200,
      filter: AgGridCustomDateFilter,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filterParams: {
        type: 'date'
      },
      valueFormatter: ({ value }) => {
        return moment(value).format('DD-MM-YYYY')
      }
    },
    {
      headerName: 'TRẠNG THÁI',
      field: 'status',
      minWidth: 200,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomSetFilter,
      filterParams: {
        type: 'text'
      },
      valueFormatter: ({ value }) => {
        return (value = status[value])
      }
    },
    {
      headerName: 'THAO TÁC',
      field: 'action',
      cellRenderer: (p) => ActionComponent(p.data),
      minWidth: 150,
      width: 150,
      pinned: 'right',
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }
  ]
  return (
    <>
      <Row>
        <Col md={20}>
          <Title
            level={4}
            style={{
              marginLeft: '10px',
              marginTop: '4px',
              paddingBottom: '12px',
              fontWeight: '700'
            }}
          >
            {' '}
            Xin chào, Xuân Lâm Trần!
          </Title>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={6}>
          <Card bordered={false} className='criclebox '>
            <div className='number'>
              <Row align='middle' gutter={[24, 0]}>
                <Col xs={18}>
                  <span>Khách hàng của tôi</span>
                  <Title level={3}>{MyCustomer?.total}</Title>
                </Col>
                <Col xs={6}>
                  <div className='icon-box'>
                    <UserOutlined />
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false} className='criclebox '>
            <div className='number'>
              <Row align='middle' gutter={[24, 0]}>
                <Col xs={18}>
                  <span>Báo giá đã tạo</span>
                  <Title level={3}>15</Title>
                </Col>
                <Col xs={6}>
                  <div className='icon-box'>
                    <FileOutlined />
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={false} className='criclebox '>
            <div className='number'>
              <Row align='middle' gutter={[24, 0]}>
                <Col xs={18}>
                  <span>Số lượng khiếu nại</span>
                  <Title level={3}>15</Title>
                </Col>
                <Col xs={6}>
                  <div className='icon-box' style={{ backgroundColor: 'red' }}>
                    <InfoCircleOutlined />
                  </div>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
      <Card className='mt-8'>
        <Title level={3}>Nhiệm vụ sắp tới</Title>
        <Row gutter={[24, 0]}>
          <Col xs='24' xl={24}>
            <div className='table-responsive'>
              <AgGridTable
                colDefs={colDefs}
                rowData={tasks?.items || []}
                skip={skip}
                take={take}
                setTake={setTake}
                setSkip={setSkip}
                selectedRow={(rows) => setSelectedRowKeys(rows)}
                totalItem={tasks?.total || 0}
                //   onDoubleClicked={(params) => {
                //     setIsShowFormDetail(true)
                //     setTypeForm('Chi tiết')
                //   }}
                height='415px'
              />
            </div>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default CompanyHome
