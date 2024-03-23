import { Button, Card, Col, Flex, Modal, Row } from 'antd'
import React, { useState } from 'react'

// Images
import { useMutation } from '@tanstack/react-query'
import { Typography } from 'antd'
import { useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'
import { RiCheckFill, RiInformationFill } from 'react-icons/ri'
import { TbTrashFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { useDeleteAccount, useGetAllAccounts } from '../../api/Admin/account'
import { ButtonOk } from '../../assets/styles/button.style'
import AgGridCustomDateFilter from '../../components/aggrid/AgGridCustomDateFilter'
import AgGridCustomSetFilter from '../../components/aggrid/AgGridCustomSetFilter'
import AgGridCustomTextFilter from '../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../components/aggrid/AgGridTable'
import { PATH } from '../../contants/common'
import CustomToggleButton from '../component/CustomToggleButton'

const AccountManagement = () => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const navigate = useNavigate()
  const { Title } = Typography
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [accountType, setAccountType] = useState('EMPLOYEE')
  const { data: dataAccount, refetch: refetchDataAccount } = useGetAllAccounts(
    skip,
    take,
    accountType
  )
  const { mutate: deleteAccount } = useMutation({
    mutationFn: useDeleteAccount
  })
  useEffect(() => {
    refetchDataAccount()
  }, [accountType, refetchDataAccount])

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
              deleteAccount(JSON.stringify(data.uuid))
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
            onClick={() => {
              navigate(`${PATH.ACCOUNT}/${data.uuid}&${data.code}`)
            }}
          />
        </Button>
      </div>
    )
  }
  const ActionComponentCustommer = (data) => {
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
          <RiCheckFill color='00AEEF' size={24} />
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
              navigate(`${PATH.ACCOUNT}/${data.uuid}&${data.code}`)
            }}
          />
        </Button>
      </div>
    )
  }
  const handleOpenModal = () => {
    Modal.confirm({
      content: 'Bạn có chắc chắn muốn xóa các tài khoản đã chọn?',
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
  const colDefsEmployee = [
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
      headerName: 'MÃ CHỦ TÀI KHOẢN',
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
      headerName: 'TÊN CHỦ TÀI KHOẢN',
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
      valueGetter: (p) => (p.data.gender === 0 ? 'Nam' : 'Nữ'),
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

  const colDefsCustomer = [
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
      headerName: 'MÃ KHÁCH HÀNG',
      field: 'code',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 120,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'TÊN KHÁCH HÀNG',
      field: 'name',
      minWidth: 200,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'LOẠI KHÁCH HÀNG',
      field: 'gender',
      minWidth: 150,
      valueGetter: (p) => (p.data.gender === 0 ? 'Doanh nghiệp' : 'Cá nhân'),
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
            label: 'Doanh nghiệp'
          },
          {
            id: '2',
            value: 1,
            label: 'Cá nhân'
          }
        ]
      }
    },
    {
      headerName: 'TRẠNG THÁI',
      field: 'status',
      minWidth: 150,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomSetFilter,
      filterParams: {
        itemList: [
          {
            id: '1',
            label: 'Đã duyệt',
            value: 'Đã duyệt'
          },
          {
            id: '2',
            label: 'Đang chờ duyệt',
            value: 'Đang chờ duyệt'
          },
          {
            id: '3',
            label: 'Đã từ chối',
            value: 'Đã từ chối'
          }
        ]
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
      headerName: 'NHÂN VIÊN CHĂM SÓC',
      field: 'employee',
      minWidth: 300,
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
      headerName: 'GIAI ĐOẠN',
      field: 'phase',
      minWidth: 150,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomSetFilter,
      filterParams: {
        itemList: [
          {
            id: '1',
            label: 'Tiềm năng',
            value: 'Tiềm năng'
          },
          {
            id: '2',
            label: 'Đang liên hệ',
            value: 'Đang liên hệ'
          },
          {
            id: '3',
            label: 'Đã báo giá',
            value: 'Đã báo giá'
          },
          {
            id: '4',
            label: 'Chính thức',
            value: 'Chính thức'
          },
          {
            id: '5',
            label: 'Thân thiết',
            value: 'Thân thiết'
          }
        ]
      }
    },
    {
      headerName: 'THAO TÁC',
      field: 'action',
      cellRenderer: ActionComponentCustommer,
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
              Danh sách tài khoản
            </Title>
          </Col>
          {accountType === 'EMPLOYEE' ? (
            <Col md={4} style={{ display: 'flex', justifyContent: 'right' }}>
              <ButtonOk
                type='primary'
                icon={<FiPlus />}
                onClick={() => navigate(`${PATH.NEWACCOUNT}`)}
                style={{ fontSize: '14px', width: '120px', height: '42px' }}
              >
                Thêm mới
              </ButtonOk>
            </Col>
          ) : (
            <></>
          )}
        </Row>
        <Row gutter={[24, 0]} style={{ height: '650px' }}>
          <Col xs='24' xl={24} style={{ height: '650px' }}>
            <Card
              bordered={false}
              className='criclebox tablespace mb-24'
              title={
                <CustomToggleButton
                  options={['Tài khoản nhân viên', 'Tài khoản khách hàng']}
                  defaultValue='Tài khoản nhân viên'
                  onChange={(value) =>
                    setAccountType(
                      value === 'Tài khoản nhân viên' ? 'EMPLOYEE' : 'CUSTOMER'
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
                  colDefs={
                    accountType === 'EMPLOYEE'
                      ? colDefsEmployee
                      : colDefsCustomer
                  }
                  rowData={dataAccount?.items || []}
                  skip={skip}
                  take={take}
                  setTake={setTake}
                  selectedRow={(rows) => setSelectedRowKeys(rows)}
                  onDoubleClicked={(params) => {
                    navigate(
                      `${PATH.ACCOUNT}/${params.data.uuid}&${params.data.code}`
                    )
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
export default AccountManagement
