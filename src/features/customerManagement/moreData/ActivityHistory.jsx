import { CheckOutlined } from '@ant-design/icons'
import { Button, Col, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { RiInformationFill } from 'react-icons/ri'
import { TbTrashFilled } from 'react-icons/tb'
import AgGridTable from '../../../components/aggrid/AgGridTable'
import './activityHistory.css'

const ActivityHistory = ({ setIsShowActivityForm }) => {
  const [take, setTake] = useState(100)
  const { Title } = Typography

  const CustomHeader = () => {
    return (
      <div style={{ fontWeight: 650 }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          NHÂN VIÊN
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          PHỤ TRÁCH
        </div>
      </div>
    )
  }

  const ActionComponent = (data) => {
    return (
      <div style={{ gap: '15px', display: 'flex' }}>
        <Button
          type='primary'
          shape='circle'
          style={{ backgroundColor: 'rgba(253,238,200, 0.4)' }}
        >
          <CheckOutlined
            style={{
              color: 'rgb(235, 180, 37)',
              fontSize: 'large',
              fontWeight: '1000'
            }}
            onClick={() => {
              //
            }}
          />
        </Button>
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
              //
            }}
          />
        </Button>
      </div>
    )
  }

  const dataActivities = [
    {
      nameActivity: 'Cuộc họp',
      endDate: '23-11-2023',
      nameEmployees: ['Lê Huy Ngọ', 'Phạm Hồng Thịnh'],
      status: 'Đã gửi'
    },
    {
      nameActivity: 'Gọi điện',
      endDate: '23-11-2023',
      nameEmployees: ['Lê Huy Ngọ'],
      status: 'Đã gửi'
    }
  ]

  const colDefsActivities = [
    {
      headerName: 'HOẠT ĐỘNG',
      field: 'nameActivity',
      minWidth: 130,
      width: 130,
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
      }
    },
    {
      headerName: 'NHÂN VIÊN PHỤ TRÁCH',
      headerComponent: CustomHeader,
      field: 'nameEmployees',
      autoHeight: true,
      cellRenderer: (p) =>
        p.data.nameEmployees.map((item, index) => (
          <div
            key={`employeeName${index}`}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            {' '}
            {item}{' '}
          </div>
        )),
      minWidth: 150,
      width: 150,
      suppressMovable: true,
      resizable: false,
      sortable: false
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

  const dataHistoryActivities = [
    {
      doneDate: '23-11-2023',
      nameEmployees: ['Lê Huy Ngọ', 'Phạm Hồng Thịnh'],
      nameActivity: 'Thay đổi giai đoạn',
      note: 'Đã báo giá chuyển sang Tiềm năng'
    },
    {
      doneDate: '23-11-2023',
      nameEmployees: ['Lê Huy Ngọ'],
      nameActivity: 'Cuộc họp',
      note: 'Hoàn thành'
    },
    {
      doneDate: '23-11-2023',
      nameEmployees: ['Lê Huy Ngọ'],
      nameActivity: 'Gọi điện',
      note: 'Hoàn thành'
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
          {p.data.nameEmployees.map((item, index) => (
            <div
              key={`nameEmployee${index}`}
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              height: '35px'
            }}
          >
            {p.data.nameActivity}
          </div>
        </>
      ),
      resizable: false,
      suppressMovable: true,
      sortable: false
    },
    {
      headerName: '',
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
    }
  ]

  return (
    <>
      <Row gutter={12} style={{ marginBottom: '16px' }}>
        <Col span={19}>
          <Title level={3}>Hoạt động sắp tới</Title>
        </Col>
        <Col span={5} style={{ display: 'flex', justifyContent: 'right' }}>
          <Button
            className='activityCurrent'
            icon={<FiPlus />}
            onClick={() => setIsShowActivityForm(true)}
          >
            Thêm hoạt động
          </Button>
        </Col>
      </Row>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AgGridTable
          colDefs={colDefsActivities}
          rowData={dataActivities}
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
          rowData={dataHistoryActivities}
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
