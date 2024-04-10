import { Button, Card, Col, Flex, Modal, Row } from 'antd'
import React, { useState } from 'react'

import { useMutation } from '@tanstack/react-query'
import { Typography } from 'antd'
import { FiPlus } from 'react-icons/fi'
import { RiInformationFill } from 'react-icons/ri'
import { TbTrashFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import {
  useDeleteCustomer,
  useGetPhaseList,
  useListCustomer,
  useListMyCustomer
} from '../../api/Admin/customer'
import { ButtonOk } from '../../assets/styles/button.style'
import AgGridCustomSetFilter from '../../components/aggrid/AgGridCustomSetFilter'
import AgGridCustomTextFilter from '../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../components/aggrid/AgGridTable'
import { PATH } from '../../contants/common'
import CustomToggleButton from '../component/CustomToggleButton'

const CustomerManagement = () => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const [accountType, setAccountType] = useState('allCustomer')
  const [searchModel, setSearchModel] = useState({})
  const navigate = useNavigate()
  const { Title } = Typography
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const { data: dataCustomer, refetch } = useListCustomer(skip, take)
  const { data: dataMyCustomer, refetch: refetchMyCustomer } =
    useListMyCustomer(skip, take)
  const { data: phaseOptions, refetch: refetchPhaseOptions } = useGetPhaseList()
  console.log(phaseOptions?.items)
  const { mutate: mutateDelete } = useMutation({
    mutationFn: useDeleteCustomer,
    onSuccess: () => {
      console.log('Delete success')
      refetch()
    }
  })

  const refetchData = async () => {
    try {
      await refetch()
    } catch (error) {
      console.error('Error while refetching customer data:', error)
    }
  }
  const refetchMyData = async () => {
    try {
      await refetchMyCustomer()
    } catch (error) {
      console.error('Error while refetching customer data:', error)
    }
  }
  const handleFilterInputChange = (inputValue, field) => {
    const newSearchModel = {
      [field]: {
        isCustom: false,
        value: inputValue,
        valueType: 'text'
      }
    }
    setSearchModel(newSearchModel)
    refetch(skip, take, newSearchModel)
  }
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
            onClick={() => {
              console.log(data)
              mutateDelete(data.uuid)
            }}
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
            onClick={() =>
              navigate(
                `${PATH.CUSTOMER}/${data.isBusiness}&${data.uuid}&${data.code}`
              )
            }
          />
        </Button>
      </div>
    )
  }
  const handleOpenModal = () => {
    Modal.confirm({
      content: 'Bạn có chắc chắn muốn xóa khách hàng đã chọn?',
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
      field: 'index',
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
        type: 'text',
        onInputChange: (inputValue) =>
          handleFilterInputChange(inputValue, 'code')
      }
    },
    {
      headerName: 'TÊN KHÁCH HÀNG',
      field: 'name',
      minWidth: 300,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text',
        onInputChange: (inputValue) =>
          handleFilterInputChange(inputValue, 'name')
      }
    },
    {
      headerName: 'LOẠI KHÁCH HÀNG',
      field: 'isBusiness',
      minWidth: 100,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      cellRenderer: (params) => {
        const isBusiness = params.data.isBusiness
        return isBusiness ? 'Doanh nghiệp' : 'Cá nhân'
      }
    },
    {
      headerName: 'EMAIL',
      field: 'email',
      minWidth: 250,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text',
        onInputChange: (inputValue) =>
          handleFilterInputChange(inputValue, 'email')
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
        type: 'text',
        onInputChange: (inputValue) =>
          handleFilterInputChange(inputValue, 'phoneNumber')
      }
    },
    {
      headerName: 'NHÂN VIÊN CHĂM SÓC',
      field: 'employees',
      minWidth: 300,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text',
        onInputChange: (inputValue) =>
          handleFilterInputChange(inputValue, 'employees')
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
            id: 1,
            label: 'Landing Page',
            value: 'Landing Page'
          },
          {
            id: 2,
            label: 'Tự khai thác',
            value: 'Tự khai thác'
          },
          {
            id: 3,
            label: 'Khác',
            value: 'Khác'
          }
        ]
      },
      cellRenderer: (params) => {
        const sourceValue = params.data.source
        const sourceItem = params.colDef.filterParams.itemList.find(
          (item) => item.id === sourceValue
        )
        return sourceItem ? sourceItem.label : ''
      }
    },
    {
      headerName: 'GIAI ĐOẠN',
      field: 'phaseName',
      minWidth: 150,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomSetFilter,
      filterParams: {
        type: 'text'
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
                  defaultValue='Tất cả'
                  onChange={(value) =>
                    setAccountType(
                      value === 'Tất cả' ? 'allCustomer' : 'myCustomer'
                    )
                  }
                />
              }
              extra={
                <>
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
                </>
              }
            >
              <div className='table-responsive'>
                <AgGridTable
                  totalItem={
                    (accountType === 'allCustomer'
                      ? dataCustomer
                      : dataMyCustomer
                    )?.total || 0
                  }
                  colDefs={colDefs}
                  rowData={
                    (accountType === 'allCustomer'
                      ? dataCustomer
                      : dataMyCustomer
                    )?.items || []
                  }
                  skip={skip}
                  take={take}
                  setTake={setTake}
                  setSkip={setSkip}
                  selectedRow={(rows) => setSelectedRowKeys(rows)}
                  onDoubleClicked={(params) => {
                    navigate(
                      `${PATH.CUSTOMER}/${params.data.isBusiness}&${params.data.uuid}&${params.data.code}`
                    )
                  }}
                  refetchData={
                    accountType === 'allCustomer' ? refetchData : refetchMyData
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
export default CustomerManagement
