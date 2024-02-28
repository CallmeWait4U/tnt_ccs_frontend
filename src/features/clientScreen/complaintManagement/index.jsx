import { Button, Card, Col, Flex, Row } from 'antd'
import React, { useState } from 'react'

// Images
import { Typography } from 'antd'
import { FiPlus } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { ButtonOk } from '../../../assets/styles/button.style'
import AgGridCustomDateFilter from '../../../components/aggrid/AgGridCustomDateFilter'
import AgGridCustomSetFilter from '../../../components/aggrid/AgGridCustomSetFilter'
import AgGridCustomTextFilter from '../../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../../components/aggrid/AgGridTable'
import { PATH } from '../../../contants/common'
import { dataComplaint } from '../../../dataMock/DataComlaint'

const ClientComplaintManagement = () => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const navigate = useNavigate()
  const { Title } = Typography
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const ActionComponent = (data) => {
    return (
      <div style={{ gap: '15px', display: 'flex' }}>
        <Button
          type='primary'
          style={{ backgroundColor: '#F43F5E' }}
          onClick={() => console.log('trash')}
        >
          Hủy khiếu nại
        </Button>
        <Button
          type='primary'
          style={{ backgroundColor: '#7364FF' }}
          onClick={() =>
            navigate(`${PATH.CUSTOME_URL.COMPLAINT}/1`, { state: data })
          }
        >
          Chi tiết
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
      headerName: 'MÃ KHIẾU NẠI',
      field: 'complaintCode',
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
      headerName: 'LOẠI KHIẾU NẠI',
      field: 'complaintTypeName',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 150,
      filter: AgGridCustomSetFilter,
      filterParams: {
        itemList: [
          {
            id: '1',
            value: 'Sản phẩm',
            label: 'Sản phẩm'
          },
          {
            id: '2',
            value: 'Nhân viên',
            label: 'Nhân viên'
          },
          {
            id: '3',
            value: 'Vận chuyển',
            label: 'Vận chuyển'
          }
        ]
      }
    },
    {
      headerName: 'NGÀY GỬI',
      field: 'sentDate',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 200,
      filter: AgGridCustomDateFilter
    },
    {
      headerName: 'TRẠNG THÁI',
      field: 'status',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 250,
      filter: AgGridCustomSetFilter,
      filterParams: {
        itemList: [
          {
            id: '1',
            value: 'Chưa xử lí',
            label: 'Chưa xử lí'
          },
          {
            id: '2',
            value: 'Đang xử lí',
            label: 'Đang xử lí'
          },
          {
            id: '3',
            value: 'Đã xử lí',
            label: 'Đã xử lí'
          },
          {
            id: '4',
            value: 'Xử lí lại',
            label: 'Xử lí lại'
          }
        ]
      }
    },
    {
      headerName: 'MÔ TẢ',
      field: 'description',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 400,
      filter: AgGridCustomDateFilter
    },
    {
      headerName: 'THAO TÁC',
      field: 'action',
      cellRenderer: (p) => ActionComponent(p.data),
      minWidth: 250,
      width: 250,
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
              Khiếu nại của tôi
            </Title>
          </Col>
          <Col md={4} style={{ display: 'flex', justifyContent: 'right' }}>
            <ButtonOk
              type='primary'
              icon={<FiPlus />}
              onClick={() => navigate(`${PATH.CUSTOME_URL.NEWCOMPLAINT}`)}
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
                  rowData={dataComplaint}
                  skip={skip}
                  take={take}
                  setTake={setTake}
                  selectedRow={(rows) => setSelectedRowKeys(rows)}
                  onDoubleClicked={(rows) =>
                    navigate(`${PATH.CUSTOME_URL.COMPLAINT}/1`, { state: rows })
                  }
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default ClientComplaintManagement
