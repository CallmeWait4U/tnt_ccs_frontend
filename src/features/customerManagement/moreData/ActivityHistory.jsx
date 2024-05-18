import { Button, Col, Row, Typography } from 'antd'
import moment from 'moment'
import React, { useState } from 'react'
import { RiInformationFill } from 'react-icons/ri'
import { TbTrashFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { useGetTask } from '../../../api/Admin/customer'
import AgGridTable from '../../../components/aggrid/AgGridTable'
import { PATH } from '../../../contants/common'
import './activityHistory.css'

const ActivityHistory = ({ uuid }) => {
  const [take, setTake] = useState(100)
  const { Title } = Typography
  const { data: allTasks } = useGetTask(uuid, 'false')
  const { data: allTasksDone } = useGetTask(uuid, 'true')
  const navigate = useNavigate()
  const domain = '/' + window.location.pathname.split('/')[1]

  const ActionComponent = (data) => {
    return (
      <div style={{ gap: '15px', display: 'flex' }}>
        <Button
          type='primary'
          shape='circle'
          style={{ backgroundColor: 'rgb(255,225,225)' }}
        >
          <TbTrashFilled
            color='red'
            size={18}
            onClick={() => console.log('trash')}
          />
        </Button>
        <Button
          type='primary'
          shape='circle'
          style={{ backgroundColor: 'rgb(220,245,255)' }}
        >
          <RiInformationFill
            color='00AEEF'
            size={24}
            onClick={() => {
              navigate(
                `${domain + PATH.ACTIVITY}/${data.activityUUID}/task/${
                  data.uuid
                }`
              )
            }}
          />
        </Button>
      </div>
    )
  }
  const status = {
    INPROGRESS: 'Đang diễn ra',
    OVERDUE: 'Đã trễ',
    COMPLETED: 'Hoàn thành'
  }

  const colDefsActivities = [
    {
      headerName: 'HOẠT ĐỘNG',
      field: 'title',
      minWidth: 240,
      width: 240,
      suppressMovable: true,
      resizable: false,
      sortable: false,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
    },
    {
      headerName: 'NGÀY KẾT THÚC',
      field: 'endDate',
      minWidth: 140,
      width: 140,
      resizable: false,
      suppressMovable: true,
      sortable: false,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      valueFormatter: ({ value }) => {
        return moment(value).format('DD-MM-YYYY')
      }
    },
    {
      headerName: 'MÔ TẢ',
      field: 'note',
      minWidth: 240,
      width: 240,
      suppressMovable: true,
      resizable: false,
      sortable: false,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
    },
    {
      headerName: 'TRẠNG THÁI',
      field: 'status',
      minWidth: 120,
      width: 120,
      suppressMovable: true,
      resizable: false,
      sortable: false,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
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
      suppressMovable: true,
      resizable: false,
      sortable: false,
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }
  ]

  const colDefsHistoryActivities = [
    {
      headerName: '',
      field: 'doneDate',
      minWidth: 150,
      width: 150,
      suppressMovable: true,
      resizable: false,
      sortable: false,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      valueFormatter: ({ value }) => {
        return moment(value).format('DD-MM-YYYY')
      }
    },
    {
      headerName: 'HOẠT ĐỘNG',
      field: 'title',
      minWidth: 250,
      width: 250,
      suppressMovable: true,
      resizable: false,
      sortable: false,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
    },
    {
      headerName: '',
      field: 'nameActivity',
      minWidth: 180,
      width: 180,
      autoHeight: true,
      cellRenderer: (p) => (
        <>
          {p.data.employeeName.map((item, index) => (
            <div
              key={`employeeName${index}`}
              style={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 600,
                height: '35px'
              }}
            >
              {' '}
              {item}{' '}
            </div>
          ))}
        </>
      ),
      resizable: false,
      suppressMovable: true,
      sortable: false
    },
    {
      headerName: 'MÔ TẢ',
      field: 'note',
      minWidth: 350,
      width: 350,
      suppressMovable: true,
      resizable: false,
      sortable: false,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
    },
    {
      headerName: 'TRẠNG THÁI',
      field: 'status',
      minWidth: 120,
      width: 120,
      suppressMovable: true,
      resizable: false,
      sortable: false,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      valueFormatter: ({ value }) => {
        return (value = status[value])
      }
    }
  ]

  return (
    <>
      <Row gutter={12} style={{ marginBottom: '16px' }}>
        <Col span={19}>
          <Title level={3}>Hoạt động sắp tới</Title>
        </Col>
      </Row>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AgGridTable
          colDefs={colDefsActivities}
          rowData={allTasks?.items || []}
          take={take}
          setTake={setTake}
          selectedRow={(rows) => {
            console.log(rows)
          }}
          onDoubleClicked={(params) => {
            console.log(params)
          }}
          showPagination={false}
          width='700px'
          height='100%'
          autoHeight={true}
          customCustomer='customCustomer'
          rowStyle={{ borderWidth: '1px 0px 0px 0px', borderColor: '#E2E8F0' }}
        />
      </div>
      <div
        style={{
          borderWidth: '1px 0px 0px 0px',
          borderColor: 'rgba(0, 0, 0, 0.3)',
          margin: '12px 0px'
        }}
      ></div>
      <Row gutter={12} style={{ marginBottom: '8px' }}>
        <Col span={19}>
          <Title level={3}>Lịch sử hoạt động</Title>
        </Col>
        <Col span={5}></Col>
      </Row>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AgGridTable
          colDefs={colDefsHistoryActivities}
          rowData={allTasksDone?.items || []}
          take={take}
          setTake={setTake}
          selectedRow={(rows) => {
            console.log(rows)
          }}
          onDoubleClicked={(params) => {
            console.log(params)
          }}
          showPagination={false}
          width='700px'
          height='100%'
          autoHeight={true}
          customCustomer='customCustomer'
          customCustomerAct='customCustomerAct'
        />
      </div>
    </>
  )
}
export default ActivityHistory
