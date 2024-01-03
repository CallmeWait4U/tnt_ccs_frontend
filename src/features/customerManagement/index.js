import {
  Avatar,
  Breadcrumb,
  Button,
  Card,
  Col,
  Flex,
  Row,
  Typography
} from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import { HiInformationCircle, HiOutlineTrash } from 'react-icons/hi'

import 'ag-grid-community/styles/ag-grid.css' // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css' // Theme
import { AgGridReact } from 'ag-grid-react' // React Grid Logic
import face2 from '../../assets/images/face-2.jpg'

import { AiFillFilter } from 'react-icons/ai'
import { FiPlus } from 'react-icons/fi'
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
  const columns = [
    {
      title: 'MÃ KHÁCH HÀNG',
      dataIndex: 'code',
      key: 'code',
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
      title: 'TÊN KHÁCH HÀNG',
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
      title: 'EMAIL',
      key: 'email',
      dataIndex: 'email',
      render: (email) => <div className='avatar-info'>{email}</div>
    },
    {
      title: 'SỐ ĐIỆN THOẠI',
      key: 'number',
      dataIndex: 'number',
      render: (number) => <div className='avatar-info'>{number}</div>
    },
    {
      title: 'NHÂN VIÊN CHĂM SÓC',
      key: 'employee',
      dataIndex: 'employee',
      render: (employee) => <div className='avatar-info'>{employee}</div>
    },
    {
      title: 'NGUỒN',
      key: 'source',
      dataIndex: 'source',
      render: (source) => <div className='avatar-info'>{source}</div>
    },
    {
      title: 'GIAI ĐOẠN',
      key: 'phase',
      dataIndex: 'phase',
      render: (phase) => <div className='avatar-info'>{phase}</div>
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
  const CompanyLogoRenderer = ({ value }) => (
    <span
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center'
      }}
    >
      {value && (
        <img
          alt={`${value} Flag`}
          src={`https://www.ag-grid.com/example-assets/space-company-logos/${value.toLowerCase()}.png`}
          style={{
            display: 'block',
            width: '25px',
            height: 'auto',
            maxHeight: '50%',
            marginRight: '12px',
            filter: 'brightness(1.1)'
          }}
        />
      )}
      <p
        style={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap'
        }}
      >
        {value}
      </p>
    </span>
  )

  /* Custom Cell Renderer (Display tick / cross in 'Successful' column) */
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

  // Create new GridExample component

  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([])

  // Column Definitions: Defines & controls grid columns.
  const [colDefs] = useState([
    {
      field: 'mission',
      width: 150,
      checkboxSelection: true
    },
    {
      field: 'company',
      width: 130,
      cellRenderer: CompanyLogoRenderer
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
      <Row gutter={[24, 0]}>
        <Breadcrumb
          style={{ margin: '5px 0px 5px 24px ' }}
          separator='>'
          items={[
            {
              title: 'Home'
            },
            {
              title: 'Quản lý khách hàng',
              href: ''
            }
          ]}
        />
      </Row>
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
            {/* <div className='table-responsive'>
                {/* <AgGridReact
                  columns={columns}
                  data={dataCustomer}
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
                /> */}
            {/* <AgGridReact
                  rowData={rowData}
                  columnDefs={colDefs}
                  defaultColDef={defaultColDef}
                  pagination={true}
                  rowSelection='multiple'
                  onSelectionChanged={(event) => console.log('Row Selected!')}
                  onCellValueChanged={(event) =>
                    console.log(`New Cell Value: ${event.value}`)
                  }
                /> */}
            <div
              className={'ag-theme-quartz'}
              style={{ width: '100%', height: '70vh' }}
            >
              <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                defaultColDef={defaultColDef}
                pagination={true}
                rowSelection='multiple'
                onSelectionChanged={(event) => console.log('Row Selected!')}
                onCellValueChanged={(event) =>
                  console.log(`New Cell Value: ${event.value}`)
                }
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
export default CustomerManagement
