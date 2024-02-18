import { Button, Card, Col, Flex, Modal, Row } from 'antd'
import React, { useState } from 'react'

// Images
import { Typography } from 'antd'
import { RiInformationFill } from 'react-icons/ri'
import { TbTrashFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { ButtonOk } from '../../assets/styles/button.style'
import AgGridCustomDateFilter from '../../components/aggrid/AgGridCustomDateFilter'
import AgGridCustomSetFilter from '../../components/aggrid/AgGridCustomSetFilter'
import AgGridCustomTextFilter from '../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../components/aggrid/AgGridTable'
import { PATH } from '../../contants/common'
import { dataComplaint } from '../../dataMock/DataComlaint'

const ComplaintManagement = () => {
  // const onChange = (e) => console.log(`radio checked:${e.target.value}`);
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
            onClick={() => navigate(`${PATH.COMPLAINT}/1`, { state: data })}
          />
        </Button>
      </div>
    )
  }
  const handleOpenModal = () => {
    Modal.confirm({
      content: 'Bạn có chắc chắn muốn xóa khiếu nại?',
      centered: true,
      icon: <></>,
      footer: (_) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <ButtonOk
            style={{
              background: '#7364FF'
            }}
          >
            Hủy bỏ
          </ButtonOk>
          <ButtonOk
            style={{
              background: '#F43F5E'
            }}
          >
            Xác nhận
          </ButtonOk>
        </div>
      )
    })
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
      headerName: 'TÊN KHÁCH HÀNG',
      field: 'customerName',
      minWidth: 300,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'MÃ KHÁCH HÀNG',
      field: 'customerCode',
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
      field: 'typeComplaint',
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
      headerName: 'NHÂN VIÊN PHỤ TRÁCH',
      field: 'employeeName',
      minWidth: 300,
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
              Danh sách khiếu nại
            </Title>
          </Col>
          <Col md={4} style={{ display: 'flex', justifyContent: 'right' }}>
            <Button
              type='primary'
              danger
              className='customDeleteButton'
              onClick={() => handleOpenModal()}
            >
              <Flex wrap='wrap' gap={3}>
                Xóa
                {selectedRowKeys.length > 0 ? (
                  <span>({selectedRowKeys.length})</span>
                ) : (
                  ''
                )}
              </Flex>
            </Button>
          </Col>
        </Row>
        <Row gutter={[24, 0]} style={{ height: '650px' }}>
          <Col xs='24' xl={24} style={{ height: '650px' }}>
            <Card bordered={false} className='criclebox tablespace mb-24'>
              <div className='table-responsive'>
                <AgGridTable
                  colDefs={colDefs}
                  rowData={dataComplaint}
                  skip={skip}
                  take={take}
                  setTake={setTake}
                  selectedRow={(rows) => setSelectedRowKeys(rows)}
                  onDoubleClicked={(params) => {
                    navigate(`${PATH.COMPLAINT}/1`, { state: params.data })
                  }}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default ComplaintManagement
