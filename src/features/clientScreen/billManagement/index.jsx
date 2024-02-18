import { Button, Card, Col, Flex, Row } from 'antd'
import React, { useState } from 'react'

// Images
import { Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ButtonOk } from '../../../assets/styles/button.style'
import AgGridCustomSetFilter from '../../../components/aggrid/AgGridCustomSetFilter'
import AgGridCustomTextFilter from '../../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../../components/aggrid/AgGridTable'
import { PATH } from '../../../contants/common'

const ClientBillManagement = () => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const navigate = useNavigate()
  const { Title } = Typography
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const ActionComponent = (data) => {
    return (
      <div style={{ gap: '15px', display: 'flex' }}>
        <ButtonOk type='primary'>Chi tiết</ButtonOk>
      </div>
    )
  }

  const data = [
    {
      code: 'HD001',
      customerName: 'Nguyễn Văn A',
      number: '0123456789',
      orderDate: '20/10/2021',

      status: 'Đã thanh toán',
      price: '100.000'
    },
    {
      code: 'HD002',
      customerName: 'Nguyễn Văn B',
      number: '0123456789',
      orderDate: '20/10/2021',
      status: 'Đã thanh toán',
      price: '100.000'
    },
    {
      code: 'HD003',
      customerName: 'Nguyễn Văn C',
      number: '0123456789',
      orderDate: '20/10/2021',
      status: 'Đã thanh toán',
      price: '100.000'
    },
    {
      code: 'HD004',
      customerName: 'Nguyễn Văn D',
      number: '0123456789',
      orderDate: '20/10/2021',
      status: 'Đã thanh toán',
      price: '100.000'
    },
    {
      code: 'HD005',
      customerName: 'Nguyễn Văn E',
      number: '0123456789',
      orderDate: '20/10/2021',
      status: 'Đã thanh toán',
      price: '100.000'
    },
    {
      code: 'HD006',
      customerName: 'Nguyễn Văn F',
      number: '0123456789',
      orderDate: '20/10/2021',
      status: 'Đã thanh toán',
      price: '100.000'
    },
    {
      code: 'HD007',
      customerName: 'Nguyễn Văn G',
      number: '0123456789',
      orderDate: '20/10/2021',
      status: 'Đã thanh toán',
      price: '100.000'
    },
    {
      code: 'HD008',
      customerName: 'Nguyễn Văn H',
      number: '0123456789',
      orderDate: '20/10/2021',
      status: 'Đã thanh toán',
      price: '100.000'
    },
    {
      code: 'HD009',
      customerName: 'Nguyễn Văn I',
      number: '0123456789',
      orderDate: '20/10/2021',
      status: 'Chưa thanh toán',
      price: '100.000'
    },
    {
      code: 'HD010',
      customerName: 'Nguyễn Văn K',
      number: '0123456789',
      orderDate: '20/10/2021',
      status: 'Chưa thanh toán',
      price: '100.000'
    }
  ]
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
      headerName: 'MÃ HÓA ĐƠN',
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
      field: 'customerName',
      minWidth: 300,
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
      minWidth: 200,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'NGAY ĐẶT',
      field: 'orderDate',
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
      headerName: 'TRẠNG THÁI',
      field: 'status',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 250,
      filter: AgGridCustomSetFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'ĐƠN GIÁ',
      field: 'price',
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
              Hóa đơn của tôi
            </Title>
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
                  rowData={data}
                  skip={skip}
                  take={take}
                  setTake={setTake}
                  selectedRow={(rows) => setSelectedRowKeys(rows)}
                  onDoubleClicked={(rows) =>
                    navigate(`${PATH.CUSTOME_URL.BILL}/1`, { state: rows })
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
export default ClientBillManagement
