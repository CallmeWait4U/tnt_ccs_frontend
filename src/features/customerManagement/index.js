import { Avatar, Button, Card, Col, Flex, Row, Typography } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'

import 'ag-grid-community/styles/ag-grid.css' // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css' // Theme
import face2 from '../../assets/images/face-2.jpg'

import { AiFillFilter } from 'react-icons/ai'
import { FiInfo, FiPlus, FiTrash } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { ButtonOk } from '../../assets/styles/button.style'
import FilterColumn from '../../components/filterColumn/FilterColumn'
import CustomToggleButton from '../component/CustomToggleButton'

const CustomerManagement = () => {
  const dataCustomer = [
    {
      id: '1',
      avatar: face2,
      code: '#1234',
      name: 'Nguyễn Hà Yến Nhi',
      email: 'ny@thinhpham.com',
      number: '0122323233',
      employee: 'Phạm Nhật Thịnh',
      source: 'Landing Page',
      phase: 'Tiềm năng'
    },
    {
      id: '1',
      avatar: face2,
      code: '#1234',
      name: 'Nguyễn Hà Yến Nhi',
      email: 'ny@thinhpham.com',
      number: '0122323233',
      employee: 'Phạm Nhật Thịnh',
      source: 'Landing Page',
      phase: 'Tiềm năng'
    },
    {
      id: '1',
      avatar: face2,
      code: '#1234',
      name: 'Nguyễn Hà Yến Nhi',
      email: 'ny@thinhpham.com',
      number: '0122323233',
      employee: 'Phạm Nhật Thịnh',
      source: 'Landing Page',
      phase: 'Tiềm năng'
    },
    {
      id: '1',
      avatar: face2,
      code: '#1234',
      name: 'Nguyễn Hà Yến Nhi',
      email: 'ny@thinhpham.com',
      number: '0122323233',
      employee: 'Phạm Nhật Thịnh',
      source: 'Landing Page',
      phase: 'Tiềm năng'
    },
    {
      id: '1',
      avatar: face2,
      code: '#1234',
      name: 'Nguyễn Hà Yến Nhi',
      email: 'ny@thinhpham.com',
      number: '0122323233',
      employee: 'Phạm Nhật Thịnh',
      source: 'Landing Page',
      phase: 'Tiềm năng'
    },
    {
      id: '1',
      avatar: face2,
      code: '#1234',
      name: 'Nguyễn Hà Yến Nhi',
      email: 'ny@thinhpham.com',
      number: '0122323233',
      employee: 'Phạm Nhật Thịnh',
      source: 'Landing Page',
      phase: 'Tiềm năng'
    },
    {
      id: '1',
      avatar: face2,
      code: '#1234',
      name: 'Nguyễn Hà Yến Nhi',
      email: 'ny@thinhpham.com',
      number: '0122323233',
      employee: 'Phạm Nhật Thịnh',
      source: 'Landing Page',
      phase: 'Tiềm năng'
    },
    {
      id: '1',
      avatar: face2,
      code: '#1234',
      name: 'Nguyễn Hà Yến Nhi',
      email: 'ny@thinhpham.com',
      number: '0122323233',
      employee: 'Phạm Nhật Thịnh',
      source: 'Landing Page',
      phase: 'Tiềm năng'
    },
    {
      id: '1',
      avatar: face2,
      code: '#1234',
      name: 'Nguyễn Hà Yến Nhi',
      email: 'ny@thinhpham.com',
      number: '0122323233',
      employee: 'Phạm Nhật Thịnh',
      source: 'Landing Page',
      phase: 'Tiềm năng'
    },
    {
      id: '1',
      avatar: face2,
      code: '#1234',
      name: 'Nguyễn Hà Yến Nhi',
      email: 'ny@thinhpham.com',
      number: '0122323233',
      employee: 'Phạm Nhật Thịnh',
      source: 'Landing Page',
      phase: 'Tiềm năng'
    },
    {
      id: '1',
      avatar: face2,
      code: '#1234',
      name: 'Nguyễn Hà Yến Nhi',
      email: 'ny@thinhpham.com',
      number: '0122323233',
      employee: 'Phạm Nhật Thịnh',
      source: 'Landing Page',
      phase: 'Tiềm năng'
    },
    {
      id: '1',
      avatar: face2,
      code: '#1234',
      name: 'Nguyễn Hà Yến Nhi',
      email: 'ny@thinhpham.com',
      number: '0122323233',
      employee: 'Phạm Nhật Thịnh',
      source: 'Landing Page',
      phase: 'Tiềm năng'
    },
    {
      id: '1',
      avatar: face2,
      code: '#1234',
      name: 'Nguyễn Hà Yến Nhi',
      email: 'ny@thinhpham.com',
      number: '0122323233',
      employee: 'Phạm Nhật Thịnh',
      source: 'Landing Page',
      phase: 'Tiềm năng'
    },
    {
      id: '1',
      avatar: face2,
      code: '#1234',
      name: 'Nguyễn Hà Yến Nhi',
      email: 'ny@thinhpham.com',
      number: '0122323233',
      employee: 'Phạm Nhật Thịnh',
      source: 'Landing Page',
      phase: 'Tiềm năng'
    }
  ]

  const [dataFilter, setDataFilter] = useState([])
  useEffect(() => {
    setDataFilter(dataCustomer)
  }, [])
  const ActionRenderer = ({ value }) => (
    <div style={{ gap: '15px', display: 'flex' }}>
      <FiTrash
        size={24}
        onClick={() => console.log(value)} // Thay handleDelete bằng hàm xử lý xóa phù hợp
      />
      <FiInfo
        size={24}
        onClick={() => console.log(value)} // Thay handleInfo bằng hàm xử lý thông tin phù hợp
      />
    </div>
  )
  const columns = [
    {
      field: '',
      headerCheckboxSelection: true,
      checkboxSelection: true,
      filter: false,
      sort: false,
      width: 50,
      pinned: 'left'
    },
    {
      headerName: 'MÃ KHÁCH HÀNG',
      dataIndex: 'code',
      field: 'code',
      width: 100,
      render: (code) => (
        <Avatar.Group>
          <Avatar className='shape-avatar' size={40} src={face2}></Avatar>
          <div className='avatar-info' style={{ color: '#726BEA' }}>
            {code}
          </div>
        </Avatar.Group>
      )
    },
    {
      headerName: 'TÊN KHÁCH HÀNG',
      dataIndex: 'name',
      field: 'name',
      width: 200,
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
          confirm={() => {}}
          clearFilters={clearFilters}
        />
      ),
      filterIcon: (filtered) => (
        <AiFillFilter style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
      render: (name) => <div className='avatar-info'>{name}</div>
    },

    {
      headerName: 'EMAIL',
      field: 'email',
      dataIndex: 'email',
      render: (email) => <div className='avatar-info'>{email}</div>
    },
    {
      headerName: 'SỐ ĐIỆN THOẠI',
      field: 'number',
      dataIndex: 'number',
      render: (number) => <div className='avatar-info'>{number}</div>
    },
    {
      headerName: 'NHÂN VIÊN CHĂM SÓC',
      field: 'employee',
      dataIndex: 'employee',
      render: (employee) => <div className='avatar-info'>{employee}</div>
    },
    {
      headerName: 'NGUỒN',
      field: 'source',
      dataIndex: 'source',
      render: (source) => <div className='avatar-info'>{source}</div>
    },
    {
      headerName: 'GIAI ĐOẠN',
      field: 'phase',
      dataIndex: 'phase',
      render: (phase) => <div className='avatar-info'>{phase}</div>
    },
    {
      headerName: 'THAO TÁC',
      field: 'x',
      pinned: 'right',
      width: 100,
      filter: false,
      sort: false,
      cellRenderer: ActionRenderer
    }
  ]

  const MissionResultRenderer = ({ value }) => (
    <span
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center'
      }}
    >
      {
        <img
          alt={`${value}`}
          src={`https://www.ag-grid.com/example-assets/icons/${
            value ? 'tick-in-circle' : 'cross-in-circle'
          }.png`}
          style={{ width: 'auto', height: 'auto' }}
        />
      }
    </span>
  )

  /* Format Date Cells */
  const dateFormatter = (params) => {
    return new Date(params.value).toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
  const [rowData, setRowData] = useState([])
  const [colDefs] = useState([
    {
      field: 'mission',
      width: 150,
      checkboxSelection: true
    },
    {
      field: 'company',
      width: 130,
      cellRenderer: ActionRenderer
    },
    {
      field: 'location',
      width: 225
    },
    {
      field: 'date',
      valueFormatter: dateFormatter
    },
    {
      field: 'price',
      width: 130,
      valueFormatter: (params) => {
        return '£' + params.value.toLocaleString()
      }
    },
    {
      field: 'successful',
      width: 120,
      cellRenderer: MissionResultRenderer
    },
    { field: 'rocket' }
  ])

  // Fetch data & update rowData state
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData))
  }, [])

  // Apply settings across all columns
  const defaultColDef = useMemo(() => ({
    filter: true,
    editable: true
  }))
  const { Title } = Typography
  const navigate = useNavigate()
  return (
    <div className='tabled'>
      <Row gutter={[24, 0]} style={{ marginBottom: '5px' }}>
        <Col md={20}>
          <Title level={4}> Danh sách khách hàng</Title>
        </Col>
        <Col md={4} style={{ display: 'flex', justifyContent: 'right' }}>
          <ButtonOk type='primary' icon={<FiPlus />}>
            Thêm mới
          </ButtonOk>
        </Col>
      </Row>
      <Row gutter={[24, 0]}>
        <Col xs='24' xl={24}>
          <Card
            bordered={false}
            className='criclebox tablespace mb-24'
            title={<CustomToggleButton />}
            extra={
              <>
                <Flex wrap='wrap' gap='small'>
                  <Button type='primary' danger>
                    Xóa
                  </Button>
                </Flex>
              </>
            }
          >
            <div className='table-responsive'>
              <BaseTable
                columns={columns}
                data={data}
                rowKey={(record) => record.id}
                onRow={(record, rowIndex) => {
                  return {
                    onClick: () => {
                      console.log('bam')
                      navigate('/customers/1', {
                        state: { page: 'detail' },
                        replace: true
                      })
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
  )
}
export default CustomerManagement
