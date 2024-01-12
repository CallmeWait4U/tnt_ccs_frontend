import { Button, Card, Col, Flex, Row } from 'antd'
import React, { useState } from 'react'

// Images
import { Typography } from 'antd'
import { FiPlus } from 'react-icons/fi'
import { RiInformationFill } from 'react-icons/ri'
import { TbTrashFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { ButtonOk } from '../../assets/styles/button.style'
import AgGridCustomDateFilter from '../../components/aggrid/AgGridCustomDateFilter'
import AgGridCustomSetFilter from '../../components/aggrid/AgGridCustomSetFilter'
import AgGridCustomTextFilter from '../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../components/aggrid/AgGridTable'
import { PATH } from '../../contants/common'
import { dataEmployee } from '../../dataMock/DataEmployee'

const EmployeeManagement = () => {
  // const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const navigate = useNavigate()
  const { Title } = Typography
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const ActionComponent = () => {
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
            onClick={() => navigate(`${PATH.EMPLOYEE}/1`)}
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
      headerName: 'MÃ NHÂN VIÊN',
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
      headerName: 'TÊN NHÂN VIÊN',
      field: 'name',
      minWidth: 300,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'GIỚI TÍNH',
      field: 'gender',
      minWidth: 100,
      valueGetter: (p) => (p.data.gender == 0 ? 'Nam' : 'Nữ'),
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomSetFilter,
      filterParams: {
        itemList: [
          {
            id: '1',
            value: 0,
            label: 'Nam'
          },
          {
            id: '2',
            value: 1,
            label: 'Nữ'
          }
        ]
      }
    },
    {
      headerName: 'VỊ TRÍ',
      field: 'position',
      minWidth: 250,
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
      headerName: 'NGÀY SINH',
      field: 'dayOfBirth',
      minWidth: 200,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomDateFilter
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
      field: 'phoneNumber',
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
      headerName: 'THAO TÁC',
      field: 'action',
      cellRenderer: ActionComponent,
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
              {' '}
              Danh sách nhân viên
            </Title>
          </Col>
          <Col md={4} style={{ display: 'flex', justifyContent: 'right' }}>
            <ButtonOk
              type='primary'
              icon={<FiPlus />}
              onClick={() => navigate(`${PATH.NEWEMPLOYEE}`)}
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
                  rowData={dataEmployee}
                  skip={skip}
                  take={take}
                  setTake={setTake}
                  selectedRow={(rows) => setSelectedRowKeys(rows)}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default EmployeeManagement
