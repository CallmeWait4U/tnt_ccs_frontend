import { Button, Card, Col, Row, Table } from 'antd'
import React, { useState } from 'react'

// Images
import { useMutation } from '@tanstack/react-query'
import { Form, InputNumber, Typography, message } from 'antd'
import moment from 'moment'
import { RiInformationFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import {
  useCreatePriceQuoteRequest,
  useGetProductList,
  useListPriceQuote,
  useListPriceQuoteRequest
} from '../../../api/Customer/priceQuote'
import { ButtonOk } from '../../../assets/styles/button.style'
import AgGridCustomDateFilter from '../../../components/aggrid/AgGridCustomDateFilter'
import AgGridCustomSetFilter from '../../../components/aggrid/AgGridCustomSetFilter'
import AgGridCustomTextFilter from '../../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../../components/aggrid/AgGridTable'
import { PATH } from '../../../contants/common'
import { StyledModal } from '../../component/ComponentOfForm'
import CustomToggleButton from '../../component/CustomToggleButton'
import './quoteManagement.css'

const ClientQuoteManagement = () => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const [selectedProducts, setSelectedProducts] = useState([])
  const navigate = useNavigate()
  const domain = '/' + window.location.pathname.split('/')[1]
  const { Title } = Typography
  // eslint-disable-next-line no-unused-vars
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [tag, setTag] = useState('Báo giá')
  const optionTags = ['Báo giá', 'Yêu cầu báo giá']
  const { data: priceQuoteData, refetch } = useListPriceQuote(skip, take)
  const { data: priceQuoteRequestData, refetch: refetchPriceQuote } =
    useListPriceQuoteRequest(skip, take)
  const { data: productList } = useGetProductList()
  const [isOpen, setIsOpen] = useState(false)
  const { mutate: createPriceQuoteRequest } = useMutation({
    mutationFn: useCreatePriceQuoteRequest,
    onSuccess: () => {
      refetchPriceQuote()
      message.success('Tạo yêu cầu báo giá thành công')
    }
  })
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
      minWidth: 200,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'NGÀY TẠO',
      field: 'createdDate',
      minWidth: 250,
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
      minWidth: 250,
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
  const handleQuantityChange = (uuid, quantity) => {
    setSelectedProducts((prevSelectedProducts) => {
      const updatedProducts = prevSelectedProducts.filter(
        (product) => product.uuid !== uuid
      )
      if (quantity > 0) {
        updatedProducts.push({ uuid, quantity })
      }
      return updatedProducts
    })
  }
  const columnsModal = [
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (_, record) => (
        <InputNumber
          min={1}
          defaultValue={0}
          onChange={(value) => handleQuantityChange(record.uuid, value)}
        />
      )
    }
  ]

  const handleSubmit1 = () => {
    const productList = {
      createdDate: new Date().toISOString(),
      status: 'UNSENT',
      sentDate: new Date().toISOString(),
      products: selectedProducts
    }
    createPriceQuoteRequest(productList)
    setIsOpen(false)
  }
  const handleSubmit2 = () => {
    const productList = {
      createdDate: new Date().toISOString(),
      status: 'SENT',
      sentDate: new Date().toISOString(),
      products: selectedProducts
    }
    createPriceQuoteRequest(productList)
    setIsOpen(false)
  }
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
                  alignContent: 'space-between',
                  maxHeight: '70vh'
                }}
              >
                <div style={{ width: '90%' }}>
                  <h2>Tạo yêu cầu báo giá</h2>
                </div>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <Button onClick={() => setIsOpen(false)}>Hủy </Button>

                  <Button
                    onClick={handleSubmit1}
                    style={{ background: '#F58220' }}
                  >
                    Tạo
                  </Button>
                  <Button
                    onClick={handleSubmit2}
                    style={{ background: '#F58220' }}
                  >
                    Tạo và gửi
                  </Button>
                </div>
              </div>
            }
            closeIcon={null}
            open={isOpen}
            footer={null}
          >
            {' '}
            <Form layout='vertical'>
              <Row>
                <Col span={24}>
                  <Table
                    columns={columnsModal}
                    dataSource={productList?.items || []}
                    rowKey='uuid'
                    style={{ overflow: 'auto' }}
                  />
                </Col>
              </Row>
            </Form>
          </StyledModal>
        )}
      </div>
    </>
  )
}
export default ClientQuoteManagement
