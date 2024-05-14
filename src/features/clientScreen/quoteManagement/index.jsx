import { Button, Card, Col, Row, Table } from 'antd'
import React, { useState } from 'react'

// Images
import { Form, Input, Typography } from 'antd'
import moment from 'moment'
import { RiInformationFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import {
  useListPriceQuote,
  useListPriceQuoteRequest
} from '../../../api/Customer/priceQuote'
import { ButtonOk } from '../../../assets/styles/button.style'
import AgGridCustomDateFilter from '../../../components/aggrid/AgGridCustomDateFilter'
import AgGridCustomSetFilter from '../../../components/aggrid/AgGridCustomSetFilter'
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
  const domain = '/' + window.location.pathname.split('/')[1]
  const { Title } = Typography
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [tag, setTag] = useState('Báo giá')
  const optionTags = ['Báo giá', 'Yêu cầu báo giá']
  const { data: priceQuoteData, refetch } = useListPriceQuote(skip, take)
  const { data: priceQuoteRequestData, refetch: refetchPriceQuote } =
    useListPriceQuoteRequest(skip, take)
  const [isOpen, setIsOpen] = useState(false)

  const navigateDetail = (data, type) => {
    if (type === 'quote') {
      navigate(`${domain + PATH.CUSTOME_URL.QUOTE}/${data.uuid}`, {
        state: data.uuid
      })
    }
    if (type === 'quoteRequest') {
      navigate(`${domain + PATH.CUSTOME_URL.QUOTEREQUEST}/${data.uuid}`, {
        state: data.uuid
      })
    }
  }

  const ActionComponent = (data, type) => {
    return (
      <div style={{ gap: '15px', display: 'flex' }}>
        <Button
          type='primary'
          shape='circle'
          style={{ backgroundColor: 'rgb(220,245,255)' }}
        >
          <RiInformationFill
            color='00AEEF'
            size={24}
            onClick={() => {
              navigateDetail(data, type)
            }}
          />
        </Button>
      </div>
    )
  }
  const status = {
    UNSENT: 'Chưa gửi',
    SENT: 'Đã gửi',
    CANCELED: 'Đã hủy'
  }
  const colQuoteDefs = [
    {
      headerName: 'STT',
      valueGetter: (p) => Number(p.node?.rowIndex) + skip + 1,
      minWidth: 120,
      width: 150,
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
      minWidth: 400,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'NGÀY TẠO',
      field: 'createdDate',
      minWidth: 450,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomDateFilter,
      filterParams: {
        type: 'date'
      },
      valueFormatter: ({ value }) => {
        return moment(value).format('DD-MM-YYYY')
      }
    },
    {
      headerName: 'NGÀY GỬI',
      field: 'sentDate',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 450,
      filter: AgGridCustomDateFilter,
      filterParams: {
        type: 'date'
      },
      valueFormatter: ({ value }) => {
        return moment(value).format('DD-MM-YYYY')
      }
    },
    // {
    //   headerName: 'TRẠNG THÁI',
    //   field: 'status',
    //   cellStyle: {
    //     display: 'flex',
    //     justifyContent: 'center'
    //   },
    //   minWidth: 300,
    //   filter: AgGridCustomSetFilter,
    // filterParams: {
    //   type: 'text'
    // },
    // valueFormatter: ({ value }) => {
    //   return (value = status[value])
    // }
    // },
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
      headerName: 'MÃ YÊU CẦU BÁO GIÁ',
      field: 'code',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 300,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'NGÀY TẠO',
      field: 'createdDate',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 300,
      filter: AgGridCustomDateFilter,
      filterParams: {
        type: 'date'
      },
      valueFormatter: ({ value }) => {
        return moment(value).format('DD-MM-YYYY')
      }
    },
    {
      headerName: 'NGÀY GỬI',
      field: 'sentDate',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 400,
      filter: AgGridCustomDateFilter,
      filterParams: {
        type: 'date'
      },
      valueFormatter: ({ value }) => {
        return moment(value).format('DD-MM-YYYY')
      }
    },
    {
      headerName: 'TRẠNG THÁI',
      field: 'status',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 300,
      filter: AgGridCustomSetFilter,
      filterParams: {
        type: 'text'
      },
      valueFormatter: ({ value }) => {
        return (value = status[value])
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
                  onChange={(tag) => {
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
                    setSkip={setSkip}
                    selectedRow={(rows) => setSelectedRowKeys(rows)}
                    refetchData={refetch}
                    onDoubleClicked={(rows) =>
                      navigate(`${domain + PATH.CUSTOME_URL.QUOTE}/1`, {
                        state: rows
                      })
                    }
                  />
                )}
                {tag === optionTags[1] && (
                  <AgGridTable
                    colDefs={colQuoteRequestDefs}
                    rowData={priceQuoteRequestData?.items || []}
                    skip={skip}
                    take={take}
                    setTake={setTake}
                    setSkip={setSkip}
                    refetchData={refetchPriceQuote}
                    selectedRow={(rows) => setSelectedRowKeys(rows)}
                    onDoubleClicked={(rows) =>
                      navigate(`${domain + PATH.CUSTOME_URL.QUOTE}/1`, {
                        state: rows
                      })
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
