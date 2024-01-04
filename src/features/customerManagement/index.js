import { SearchOutlined } from '@ant-design/icons'
import { Button, Card, Col, Flex, Row } from 'antd'
import React, { useRef, useState } from 'react'

import { Input, Space } from 'antd'
import Highlighter from 'react-highlight-words'
// Images
import { FiFilter, FiInfo, FiPlus, FiTrash } from 'react-icons/fi'
import face2 from '../../assets/images/face-2.jpg'

import { Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ButtonOk } from '../../assets/styles/button.style'
import BaseTable from '../../components/table/BaseTable'
import CustomToggleButton from '../component/CustomToggleButton'

const CustomerManagement = () => {
  // const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef(null)
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }
  const handleReset = (clearFilters) => {
    clearFilters()
    setSearchText('')
  }
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close
    }) => (
      <div
        style={{
          padding: 8
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block'
          }}
        />
        <Space>
          <ButtonOk
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{
              width: 90
            }}
          >
            Search
          </ButtonOk>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size='small'
            style={{
              width: 90
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <FiFilter
        style={{
          color: filtered ? '#1677ff' : undefined
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100)
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      )
  })
  const navigate = useNavigate()
  const { Title } = Typography
  const columns = [
    {
      title: 'MÃ KHÁCH HÀNG',
      dataIndex: 'code',
      key: 'code'
    },
    {
      title: 'TÊN KHÁCH HÀNG',
      dataIndex: 'name',
      key: 'name',
      width: '25%',
      ...getColumnSearchProps('name')
    },

    {
      title: 'EMAIL',
      key: 'email',
      dataIndex: 'email',
      ...getColumnSearchProps('email')
    },
    {
      title: 'SỐ ĐIỆN THOẠI',
      key: 'number',
      dataIndex: 'number',
      ...getColumnSearchProps('employee')
    },
    {
      title: 'NHÂN VIÊN CHĂM SÓC',
      key: 'employee',
      dataIndex: 'employee',
      ...getColumnSearchProps('employee')
    },
    {
      title: 'NGUỒN',
      key: 'source',
      dataIndex: 'source',
      ...getColumnSearchProps('employee')
    },
    {
      title: 'GIAI ĐOẠN',
      key: 'phase',
      dataIndex: 'phase',
      ...getColumnSearchProps('employee')
    },
    {
      title: 'THAO TÁC',
      dataIndex: '',
      key: 'x',
      width: '7%',
      fixed: 'right',
      render: () => (
        <div style={{ gap: '15px', display: 'flex' }}>
          <FiTrash
            color='red'
            backgroundColor='red'
            size={24}
            onClick={() => console.log('trash')}
          />
          <FiInfo color='blue' size={24} onClick={() => console.log('info')} />
        </div>
      )
    }
  ]
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
      name: 'Lê huy ngọ',
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
      name: 'Lê huy ngọ',
      email: 'ny@thinhpham.com',
      number: '0122323233',
      employee: 'Phạm Nhật',
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
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [loading, setLoading] = useState(false)
  const start = () => {
    setLoading(true)
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([])
      setLoading(false)
    }, 1000)
  }
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }
  const hasSelected = selectedRowKeys.length > 0
  return (
    <>
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
                  <Button type='primary' danger>
                    <Flex wrap='wrap' gap='small'>
                      {selectedRowKeys.length}
                      Xóa
                    </Flex>
                  </Button>
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
    </>
  )
}
export default CustomerManagement
