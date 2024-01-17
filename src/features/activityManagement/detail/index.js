import { Button, Card, Col, Flex, Form, Input, Row } from 'antd'

// Images
import { Typography } from 'antd'
import { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { FiPlus } from 'react-icons/fi'
import { RiInformationFill } from 'react-icons/ri'
import { TbTrashFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { ButtonOk } from '../../../assets/styles/button.style'
import AgGridCustomDateFilter from '../../../components/aggrid/AgGridCustomDateFilter'
import AgGridCustomSetFilter from '../../../components/aggrid/AgGridCustomSetFilter'
import AgGridCustomTextFilter from '../../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../../components/aggrid/AgGridTable'
import { dataActivityDetail } from '../../../dataMock/DataActivity'
import ActivityDetailForm from '../form/ActivityDetailForm'

const ActivityDetail = () => {
  const [isShowFormDetail, setIsShowFormDetail] = useState(false)
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
          <RiInformationFill color='#00AEEF' size={24} />
        </Button>
        <Button
          type='primary'
          shape='circle'
          style={{ backgroundColor: '#FEF3E9' }}
        >
          <AiOutlineCheck color='#EBB425' size={24} />
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
      headerName: 'NGÀY TẠO',
      field: 'createdDate',
      minWidth: 200,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomDateFilter
    },
    {
      headerName: 'KHÁCH HÀNG CHĂM SÓC',
      field: 'customerName',
      minWidth: 200,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'NHÂN VIÊN PHỤ TRÁCH',
      field: 'employeeName',
      minWidth: 200,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'NGÀY BẮT ĐẦU',
      field: 'startDate',
      minWidth: 200,
      filter: AgGridCustomDateFilter,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
    },
    {
      headerName: 'NGÀY KẾT THÚC',
      field: 'endDate',
      minWidth: 200,
      filter: AgGridCustomDateFilter,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
    },
    {
      headerName: 'TRẠNG THÁI',
      field: 'status',
      minWidth: 200,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomSetFilter,
      filterParams: {
        itemList: [
          {
            id: '1',
            value: 'Cần làm',
            label: 'Cần làm'
          },
          {
            id: '2',
            value: 'Đang trễ',
            label: 'Đang trễ'
          },
          {
            id: '3',
            value: 'Hoàn thành',
            label: 'Hoàn thành'
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
              {' '}
              Chi tiết loại hoạt động Chiến dịch quảng cáo qua mail
            </Title>
          </Col>
        </Row>
        <Card>
          <Form layout='vertical'>
            <Row gutter={[24, 0]}>
              <Col span={8}>
                <Form.Item label='Tên hoạt động'>
                  <Input />
                </Form.Item>
              </Col>
              <Col span={16}>
                <Form.Item label='Mô tả hoạt động'>
                  <Input.TextArea style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <Row gutter={[24, 0]} style={{ marginBottom: '14px' }}>
            <Col md={20}>
              <Title level={4} style={{ paddingLeft: '20px' }}>
                Danh sách hoạt động
              </Title>
            </Col>
            <Col
              md={4}
              style={{ display: 'flex', justifyContent: 'right', gap: '12px' }}
            >
              <ButtonOk
                type='primary'
                icon={<FiPlus />}
                onClick={() => setIsShowFormDetail(true)}
                style={{ fontSize: '14px', width: '120px', height: '42px' }}
              >
                Thêm mới
              </ButtonOk>
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
            </Col>
          </Row>

          <Row gutter={[24, 0]}>
            <Col xs='24' xl={24}>
              <div className='table-responsive'>
                <AgGridTable
                  colDefs={colDefs}
                  rowData={dataActivityDetail}
                  skip={skip}
                  take={take}
                  setTake={setTake}
                  selectedRow={(rows) => setSelectedRowKeys(rows)}
                  height='415px'
                />
              </div>
            </Col>
          </Row>
        </Card>
      </div>
      <ActivityDetailForm
        visible={isShowFormDetail}
        setVisible={setIsShowFormDetail}
      />
    </>
  )
}
export default ActivityDetail
