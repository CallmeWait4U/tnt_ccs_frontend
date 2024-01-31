import { SendOutlined } from '@ant-design/icons'
import { Button, Col, Row, Typography } from 'antd'
import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { RiInformationFill } from 'react-icons/ri'
import { TbTrashFilled } from 'react-icons/tb'
import { ButtonOk } from '../../../assets/styles/button.style'
import AgGridTable from '../../../components/aggrid/AgGridTable'
import './quoteBill.css'

const CustomerQuoteBill = ({ setIsShowQuoteForm, setIsShowBillForm }) => {
  const [take, setTake] = useState(100)
  const { Title } = Typography

  const ActionComponent = (type) => {
    return (
      <div style={{ gap: '15px', display: 'flex' }}>
        <Button
          type='primary'
          shape='circle'
          className={type === 'Bill' ? 'hideButton' : ''}
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
        <Button
          type='primary'
          shape='circle'
          className={type === 'PriceQuoteRequest' ? 'hideButton' : ''}
          style={{ backgroundColor: 'rgba(253,238,200, 0.4)' }}
        >
          <SendOutlined
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
      </div>
    )
  }

  const dataPriceQuoteRequest = [
    {
      id: '1',
      priceQuoteRequestCode: 'YCBG-00001',
      receivedDate: '23-11-2023'
    },
    {
      id: '2',
      priceQuoteRequestCode: 'YCBG-00002',
      receivedDate: '23-11-2023'
    }
  ]

  const colPriceQuoteRequest = [
    {
      headerName: 'MÃ YÊU CẦU BÁO GIÁ',
      field: 'priceQuoteRequestCode',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 200,
      suppressMovable: true,
      resizable: false
    },
    {
      headerName: 'NGÀY NHẬN',
      field: 'receivedDate',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 200,
      suppressMovable: true,
      resizable: false
    },
    {
      headerName: 'THAO TÁC',
      field: 'action',
      cellRenderer: () => ActionComponent('PriceQuoteRequest'),
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

  const dataPriceQuote = [
    {
      id: '1',
      priceQuoteCode: 'BG-00001',
      createdDate: '23-11-2023',
      status: 'Đã gửi'
    },
    {
      id: '2',
      priceQuoteCode: 'BG-00002',
      createdDate: '23-11-2023',
      status: 'Đã hủy'
    }
  ]

  const colPriceQuote = [
    {
      headerName: 'MÃ BÁO GIÁ',
      field: 'priceQuoteCode',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 200,
      suppressMovable: true,
      resizable: false
    },
    {
      headerName: 'NGÀY TẠO',
      field: 'createdDate',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 200,
      suppressMovable: true,
      resizable: false
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
      cellRenderer: () => ActionComponent('PriceQuote'),
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

  const dataBill = [
    {
      id: '1',
      billCode: 'HD-00001',
      createdDate: '23-11-2023',
      status: 'Chưa thanh toán'
    },
    {
      id: '2',
      billCode: 'HD-00002',
      createdDate: '23-11-2023',
      status: 'Đã thanh toán'
    }
  ]

  const colBill = [
    {
      headerName: 'MÃ HÓA ĐƠN',
      field: 'billCode',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 200,
      suppressMovable: true,
      resizable: false
    },
    {
      headerName: 'NGÀY NHẬN',
      field: 'createdDate',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 200,
      suppressMovable: true,
      resizable: false
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
      cellRenderer: () => ActionComponent('Bill'),
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

  return (
    <div>
      <Row gutter={12} style={{ marginBottom: '12px' }}>
        <Col span={19}>
          <Title level={3}>Danh sách Yêu cầu báo giá</Title>
        </Col>
      </Row>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AgGridTable
          colDefs={colPriceQuoteRequest}
          rowData={dataPriceQuoteRequest}
          take={take}
          setTake={setTake}
          selectedRow={(rows) => {
            console.log(rows)
          }}
          onDoubleClicked={(params) => {
            console.log(params)
          }}
          showPagination={false}
          width='570px'
          height='100%'
          autoHeight={true}
          customCustomer='customCustomer'
          rowStyle={{ borderWidth: '1px 0px 0px 0px', borderColor: '#E2E8F0' }}
        />
      </div>

      <Row gutter={12} style={{ marginBottom: '12px', paddingTop: '12px' }}>
        <Col span={19}>
          <Title level={3}>Danh sách Báo giá</Title>
        </Col>
        <Col span={5} style={{ display: 'flex', justifyContent: 'right' }}>
          <ButtonOk
            className='buttonAdd'
            icon={<FiPlus />}
            onClick={() => setIsShowQuoteForm(true)}
          >
            Thêm báo giá
          </ButtonOk>
        </Col>
      </Row>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AgGridTable
          colDefs={colPriceQuote}
          rowData={dataPriceQuote}
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

      <Row gutter={12} style={{ marginBottom: '12px', paddingTop: '12px' }}>
        <Col span={19}>
          <Title level={3}>Danh sách Hóa đơn</Title>
        </Col>
        <Col span={5} style={{ display: 'flex', justifyContent: 'right' }}>
          <ButtonOk
            className='buttonAdd'
            icon={<FiPlus />}
            onClick={() => setIsShowBillForm(true)}
          >
            Thêm hóa đơn
          </ButtonOk>
        </Col>
      </Row>
      {/* <Table columns={columnsBill} dataSource={data} /> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '12px'
        }}
      >
        <AgGridTable
          colDefs={colBill}
          rowData={dataBill}
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
    </div>
  )
}
export default CustomerQuoteBill
