import { SearchOutlined } from '@ant-design/icons'
import { Button, Card, Col, Flex, Row } from 'antd'
import React, { useRef, useState } from 'react'

import { Input, Space } from 'antd'
import Highlighter from 'react-highlight-words'
// Images
import { Typography } from 'antd'
import { FiFilter, FiPlus } from 'react-icons/fi'
import { RiInformationFill } from 'react-icons/ri'
import { TbTrashFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { ButtonOk } from '../../assets/styles/button.style'
import BaseTable from '../../components/table/BaseTable'
import { PATH } from '../../contants/common'
import { dataEmployee } from '../../dataMock/DataEmployee'

const ProductManagement = () => {
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
      ...getColumnSearchProps('number')
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
      ...getColumnSearchProps('source')
    },
    {
      title: 'GIAI ĐOẠN',
      key: 'phase',
      dataIndex: 'phase',
      ...getColumnSearchProps('phase')
    },
    {
      title: 'THAO TÁC',
      dataIndex: '',
      key: 'x',
      width: '7%',
      fixed: 'right',
      render: () => (
        <div style={{ gap: '15px', display: 'flex' }}>
          <TbTrashFilled
            color='red'
            backgroundColor='red'
            size={24}
            onClick={() => console.log('trash')}
          />
          <RiInformationFill
            color='blue'
            size={24}
            onClick={() => console.log('info')}
          />
        </div>
      )
    }
  ]

  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const itemsTypeCustomer = [
    {
      key: '1',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={`${PATH.NEWCUSTOMER}`}
        >
          Cá nhân
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={`${PATH.NEWCUSTOMER}`}
        >
          Doanh nghiệp
        </a>
      )
    }
  ]
  return (
    <>
      <div className='tabled'>
        <Row gutter={[24, 0]}>
          <Col xs='24' xl={24}>
            <Card
              bordered={false}
              className='criclebox tablespace mb-24'
              title={<Title level={4}> Danh sách sản phẩm</Title>}
              extra={
                <Flex wrap='wrap' gap='small'>
                  <Button type='primary' danger style={{ height: '35px' }}>
                    {selectedRowKeys.length > 0 ? (
                      <span>({selectedRowKeys.length})</span>
                    ) : (
                      ''
                    )}
                    Xóa
                  </Button>
                  <ButtonOk
                    type='primary'
                    icon={<FiPlus />}
                    onClick={(id) => navigate(`${PATH.NEWEMPLOYEE}`)}
                  >
                    Thêm mới
                  </ButtonOk>
                </Flex>
              }
            >
              <div className='table-responsive'>
                <BaseTable
                  columns={columns}
                  data={dataEmployee}
                  rowKey={(record) => record.id}
                  onRow={(record, rowIndex) => {
                    return {
                      onDoubleClick: (event) => {
                        console.log('bam')
                        navigate(`${PATH.EMPLOYEE}/1`)
                      }
                    }
                  }}
                  selectedRowKeys={selectedRowKeys}
                  setSelectedRowKeys={setSelectedRowKeys}
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
export default ProductManagement
