import { Button, Card, Col, Flex, Row } from 'antd'
import React, { useState } from 'react'

// Images
import { Typography } from 'antd'
import { FiPlus } from 'react-icons/fi'
import { RiInformationFill } from 'react-icons/ri'
import { TbTrashFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { ButtonOk } from '../../assets/styles/button.style'
import AgGridCustomSetFilter from '../../components/aggrid/AgGridCustomSetFilter'
import AgGridCustomTextFilter from '../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../components/aggrid/AgGridTable'
import { PATH } from '../../contants/common'
import { dataCustomer } from '../../dataMock/DataCustomer'
import CustomToggleButton from '../component/CustomToggleButton'

const CustomerManagement = () => {
  // const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const navigate = useNavigate()
  const { Title } = Typography
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
            onClick={() => navigate(`${PATH.CUSTOMER}/${data.code}`)}
          />
        </Button>
      </div>
    )
  }

  const colDefs = [
    {
      headerName: 'STT',
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
      headerName: 'MÃ KHÁCH HÀNG',
      field: 'code',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 200,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'TÊN KHÁCH HÀNG',
      field: 'name',
      minWidth: 300,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'EMAIL',
      field: 'email',
      minWidth: 250,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'SỐ ĐIỆN THOẠI',
      field: 'number',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'NHÂN VIÊN CHĂM SÓC',
      field: 'employee',
      minWidth: 300,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'NGUỒN',
      field: 'source',
      minWidth: 150,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomSetFilter,
      filterParams: {
        itemList: [
          {
            id: '1',
            label: 'Landing Page',
            value: 'Landing Page'
          },
          {
            id: '2',
            label: 'Tự khai thác',
            value: 'Tự khai thác'
          },
          {
            id: '3',
            label: 'Khác',
            value: 'Khác'
          }
        ]
      }
    },
    {
      headerName: 'GIAI ĐOẠN',
      field: 'phase',
      minWidth: 150,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomSetFilter,
      filterParams: {
        itemList: [
          {
            id: '1',
            label: 'Tiềm năng',
            value: 'Tiềm năng'
          },
          {
            id: '2',
            label: 'Đang liên hệ',
            value: 'Đang liên hệ'
          },
          {
            id: '3',
            label: 'Đã báo giá',
            value: 'Đã báo giá'
          },
          {
            id: '4',
            label: 'Chính thức',
            value: 'Chính thức'
          },
          {
            id: '5',
            label: 'Thân thiết',
            value: 'Thân thiết'
          }
        ]
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
      <div className='tabled'>
        <Row gutter={[24, 0]} style={{ marginBottom: '14px' }}>
          <Col md={20}>
            <Title
              level={4}
              style={{
                marginLeft: '10px',
                marginTop: '4px',
                fontWeight: '700'
              }}
            >
              Danh sách khách hàng
            </Title>
          </Col>
          <Col md={4} style={{ display: 'flex', justifyContent: 'right' }}>
            <ButtonOk
              type='primary'
              icon={<FiPlus />}
              onClick={() => navigate(`${PATH.NEWCUSTOMER}`)}
              style={{ fontSize: '14px', width: '120px', height: '42px' }}
            >
              Thêm mới
            </ButtonOk>
          </Col>
        </Row>
        <Row gutter={[24, 0]} style={{ height: '650px' }}>
          <Col xs='24' xl={24} style={{ height: '650px' }}>
            <Card
              bordered={false}
              className='criclebox tablespace mb-24'
              title={
                <CustomToggleButton
                  options={['Tất cả', 'Khách hàng của tôi']}
                />
              }
              extra={
                <>
                  <Button type='primary' danger className='customDeleteButton'>
                    <Flex wrap='wrap' gap={3}>
                      Xóa
                      {selectedRowKeys.length > 0 ? (
                        <span>({selectedRowKeys.length})</span>
                      ) : (
                        ''
                      )}
                    </Flex>
                  </Button>
                </>
              }
            >
              <div className='table-responsive'>
                <AgGridTable
                  colDefs={colDefs}
                  rowData={dataCustomer}
                  skip={skip}
                  take={take}
                  setTake={setTake}
                  selectedRow={(rows) => navigate(`${PATH.CUSTOMER}/1`)}
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
