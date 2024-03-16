import { Button, Card, Col, Row, Table } from 'antd'
import React, { useState } from 'react'

// Images
import { Form, Input, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useListPriceQuote } from '../../../api/Customer/priceQuote'
import { ButtonOk } from '../../../assets/styles/button.style'
import AgGridCustomTextFilter from '../../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../../components/aggrid/AgGridTable'
import { PATH } from '../../../contants/common'
import {
  StyledDatepicker,
  StyledModal,
  StyledSelect
} from '../../component/ComponentOfForm'
import CustomToggleButton from '../../component/CustomToggleButton'
import './quoteManagement.css'

const ClientQuoteManagement = () => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const navigate = useNavigate()
  const { Title } = Typography
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [tag, setTag] = useState('Báo giá')
  const optionTags = ['Báo giá', 'Yêu cầu báo giá']
  const { data: priceQuoteData } = useListPriceQuote(skip, take)
  const [isOpen, setIsOpen] = useState(false)

  const navigateDetail = (data, type) => {
    if (type === 'quote') {
      navigate(`${PATH.CUSTOME_URL.QUOTE}/1`, { state: data })
    }
    if (type === 'quoteRequest') {
      navigate(`${PATH.CUSTOME_URL.QUOTEREQUEST}/1`, { state: data })
    }
  }

  const ActionComponent = (data, type) => {
    return (
      <div style={{ gap: '15px', display: 'flex' }}>
        <ButtonOk type='primary' onClick={() => navigateDetail(data, type)}>
          Chi tiết
        </ButtonOk>
      </div>
    )
  }

  const data = [
    {
      code: 'HD001',
      customerName: 'Nguyễn Văn A',
      number: '0123456789',
      sendDate: '20/10/2021',

      status: 'Đã thanh toán',
      price: '100.000'
    },
    {
      code: 'HD002',
      customerName: 'Nguyễn Văn B',
      number: '0123456789',
      sendDate: '20/10/2021',
      status: 'Đã thanh toán',
      price: '100.000'
    },
    {
      code: 'HD003',
      customerName: 'Nguyễn Văn C',
      number: '0123456789',
      sendDate: '20/10/2021',
      status: 'Đã thanh toán',
      price: '100.000'
    },
    {
      code: 'HD004',
      customerName: 'Nguyễn Văn D',
      number: '0123456789',
      sendDate: '20/10/2021',
      status: 'Đã thanh toán',
      price: '100.000'
    },
    {
      code: 'HD005',
      customerName: 'Nguyễn Văn E',
      number: '0123456789',
      sendDate: '20/10/2021',
      status: 'Đã thanh toán',
      price: '100.000'
    },
    {
      code: 'HD006',
      customerName: 'Nguyễn Văn F',
      number: '0123456789',
      sendDate: '20/10/2021',
      status: 'Đã thanh toán',
      price: '100.000'
    },
    {
      code: 'HD007',
      customerName: 'Nguyễn Văn G',
      number: '0123456789',
      sendDate: '20/10/2021',
      status: 'Đã thanh toán',
      price: '100.000'
    },
    {
      code: 'HD008',
      customerName: 'Nguyễn Văn H',
      number: '0123456789',
      sendDate: '20/10/2021',
      status: 'Đã thanh toán',
      price: '100.000'
    },
    {
      code: 'HD009',
      customerName: 'Nguyễn Văn I',
      number: '0123456789',
      sendDate: '20/10/2021',
      status: 'Chưa thanh toán',
      price: '100.000'
    },
    {
      code: 'HD010',
      customerName: 'Nguyễn Văn K',
      number: '0123456789',
      sendDate: '20/10/2021',
      status: 'Chưa thanh toán',
      price: '100.000'
    }
  ]
  const colQuoteDefs = [
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
      headerName: 'MÃ BÁO GIÁ',
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
      headerName: 'TÊN NHÂN VIÊN TẠO',
      field: 'employeeName',
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
      headerName: 'NGÀY GỬI',
      field: 'sendDate',
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
      headerName: 'ĐƠN GIÁ',
      minWidth: 200,
      field: 'price',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
    },
    {
      field: 'action',
      cellRenderer: (p) => ActionComponent(p.data, 'quote'),
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

  const colQuoteRequestDefs = [
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
      headerName: 'MÃ BÁO GIÁ',
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
      headerName: 'TÊN NGƯỜI GỬI',
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
      headerName: 'NGÀY GỬI',
      field: 'sendDate',
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
      headerName: 'ĐƠN GIÁ',
      minWidth: 200,
      field: 'price',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
    },
    {
      field: 'action',
      cellRenderer: (p) => ActionComponent(p.data, 'quoteRequest'),
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

  const columnsModal = [
    {
      key: 'name',
      title: 'Tên sản phẩm',
      render: (text) => <StyledSelect />
    },
    {
      key: 'code',
      title: 'Mã sản phẩm',
      render: (text) => <Input />
    },
    {
      key: 'amount',
      title: 'Số lượng',
      render: (text) => <Input />
    },
    {
      key: 'price',
      title: 'Giá tiền',
      render: (text) => <Input />
    }
  ]

  const dataModal = [
    {
      key: '1',
      name: 'John Brown',
      code: 32,
      amount: 'New York No. 1 Lake Park',
      price: '100.000'
    },
    {
      key: '2',
      name: 'Jim Green',
      code: 42,
      amount: 'London No. 1 Lake Park',
      price: '100.000'
    },
    {
      key: '3',
      name: 'Joe Black',
      code: 32,
      amount: 'Sidney No. 1 Lake Park',
      price: '100.000'
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
              Báo giá của tôi
            </Title>
          </Col>

          <Col md={4} style={{ display: 'flex', justifyContent: 'right' }}>
            {tag === optionTags[1] && (
              <ButtonOk
                className='addBtn'
                onClick={() => setIsOpen(true)}
                style={{ fontSize: '14px', height: '42px' }}
              >
                Tạo yêu cầu báo giá
              </ButtonOk>
            )}
          </Col>
        </Row>
        <Row gutter={[24, 0]} style={{ height: '650px' }}>
          <Col xs='24' xl={24} style={{ height: '650px' }}>
            <Card
              title={
                <CustomToggleButton
                  options={optionTags}
                  chosenTag={(tag) => {
                    setTag(tag)
                    console.log(tag)
                  }}
                />
              }
              bordered={false}
              className='criclebox tablespace mb-24'
            >
              <div className='table-responsive'>
                {tag === optionTags[0] && (
                  <AgGridTable
                    colDefs={colQuoteDefs}
                    rowData={priceQuoteData?.items || []}
                    skip={skip}
                    take={take}
                    setTake={setTake}
                    selectedRow={(rows) => setSelectedRowKeys(rows)}
                    onDoubleClicked={(rows) =>
                      navigate(`${PATH.CUSTOME_URL.QUOTE}/1`, { state: rows })
                    }
                  />
                )}
                {tag === optionTags[1] && (
                  <AgGridTable
                    colDefs={colQuoteRequestDefs}
                    rowData={data}
                    skip={skip}
                    take={take}
                    setTake={setTake}
                    selectedRow={(rows) => setSelectedRowKeys(rows)}
                    onDoubleClicked={(rows) =>
                      navigate(`${PATH.CUSTOME_URL.QUOTE}/1`, { state: rows })
                    }
                  />
                )}
              </div>
            </Card>
          </Col>
        </Row>
        {isOpen && (
          <StyledModal
            title={
              <div
                style={{
                  display: 'flex',
                  gap: '5px',
                  alignContent: 'space-between'
                }}
              >
                <div style={{ width: '90%' }}>
                  <h2>Tạo yêu cầu báo giá</h2>
                </div>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <Button onClick={() => setIsOpen(false)}>Hủy </Button>

                  <Button style={{ background: '#F58220' }}>Tạo</Button>
                </div>
              </div>
            }
            closeIcon={null}
            open={isOpen}
            footer={null}
          >
            {' '}
            <Form layout='vertical'>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item label='Mã Yêu cầu báo giá'>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label='Người tạo '>
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label='Ngày tạo'>
                    <StyledDatepicker />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
            <Row>
              <Col span={24}>
                <Table columns={columnsModal} dataSource={dataModal} />
              </Col>
            </Row>
          </StyledModal>
        )}
      </div>
    </>
  )
}
export default ClientQuoteManagement
