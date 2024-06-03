import { Button, Card, Col, Flex, Modal, Row, message } from 'antd'
import React, { useState } from 'react'

// Images
import { useMutation } from '@tanstack/react-query'
import { Typography } from 'antd'
import { useEffect } from 'react'
import { FiPlus } from 'react-icons/fi'
import {
  RiCheckFill,
  RiCloseCircleLine,
  RiInformationFill
} from 'react-icons/ri'
import { TbTrashFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import {
  useAcceptAccount,
  useDeleteAccount,
  useGetAllAccounts,
  useGetPendingAccounts,
  useRejectAccount
} from '../../api/Admin/account'
import { ButtonOk } from '../../assets/styles/button.style'
import AgGridTable from '../../components/aggrid/AgGridTable'
import { PATH } from '../../contants/common'
import CustomToggleButton from '../component/CustomToggleButton'

const AccountManagement = () => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const domain = '/' + window.location.pathname.split('/')[1]
  const [isPendingModalVisible, setIsPendingModalVisible] = useState(false)

  const navigate = useNavigate()
  const { Title } = Typography
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [accountType, setAccountType] = useState('EMPLOYEE')
  const { data: dataAccount, refetch: refetchDataAccount } = useGetAllAccounts(
    skip,
    take,
    accountType
  )
  const { data: dataPendingAccount } = useGetPendingAccounts(skip, take)
  const { mutate: deleteAccount } = useMutation({
    mutationFn: useDeleteAccount,
    onSuccess: () => {
      refetchDataAccount()
      message.success('Xóa tài khoản thành công')
    }
  })
  const { mutate: mutateAccept } = useMutation({
    mutationFn: useAcceptAccount,
    onSuccess: () => {
      message.success('Duyệt thành công')
      console.log('Accept success')
    }
  })
  const { mutate: mutateReject } = useMutation({
    mutationFn: useRejectAccount,
    onSuccess: () => {
      message.success('Từ chối thành công')
      console.log('Reject success')
    }
  })
  useEffect(() => {
    refetchDataAccount()
  }, [accountType, refetchDataAccount])

  const handleCancelPendingModal = () => {
    setIsPendingModalVisible(false)
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
              navigate(`${domain + PATH.ACCOUNT}/${data.uuid}&${data.code}`)
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
          <RiInformationFill
            color='00AEEF'
            size={24}
            onClick={() => {
              navigate(
                `${domain + PATH.ACCOUNT}/${data.uuid}&${data.code}&customer`
              )
            }}
          />
        </Button>
      </div>
    )
  }
  const ActionComponentModal = (data) => {
    return (
      <div style={{ gap: '15px', display: 'flex' }}>
        <Button shape='circle' style={{ backgroundColor: 'rgb(255,225,225)' }}>
          <RiCloseCircleLine
            color='red'
            size={18}
            onClick={() => {
              mutateReject({ customerUUID: data.uuid })
            }}
          />
        </Button>
        <Button
          type='primary'
          shape='circle'
          style={{ backgroundColor: 'rgb(220,245,255)' }}
        >
          <RiCheckFill
            color='00AEEF'
            size={24}
            onClick={() => {
              mutateAccept({ customerUUID: data.uuid, type: 'CUSTOMER' })
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
  const colDefsPendingAccount = [
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
      // filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'TÊN TÀI KHOẢN',
      field: 'name',
      minWidth: 200,
      // filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
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
      // filter: AgGridCustomTextFilter,
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
      // filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'GIAI ĐOẠN',
      field: 'phaseName',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      // filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'THAO TÁC',
      field: 'action',
      cellRenderer: (e) => ActionComponentModal(e.data),
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
      // filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'TÊN CHỦ TÀI KHOẢN',
      field: 'name',
      minWidth: 300,
      // filter: AgGridCustomTextFilter,
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
      }
      // filter: AgGridCustomSetFilter,
      // filterParams: {
      //   itemList: [
      //     {
      //       id: '1',
      //       value: 0,
      //       label: 'Nam'
      //     },
      //     {
      //       id: '2',
      //       value: 1,
      //       label: 'Nữ'
      //     }
      //   ]
      // }
    },
    {
      headerName: 'VỊ TRÍ',
      field: 'position',
      minWidth: 250,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
      // filter: AgGridCustomTextFilter,
      // filterParams: {
      //   type: 'text'
      // }
    },
    {
      headerName: 'NGÀY SINH',
      field: 'dayOfBirth',
      minWidth: 200,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
      // filter: AgGridCustomDateFilter
    },
    {
      headerName: 'EMAIL',
      field: 'email',
      minWidth: 250
      // filter: AgGridCustomTextFilter,
      // filterParams: {
      //   type: 'text'
      // }
    },
    {
      headerName: 'SỐ ĐIỆN THOẠI',
      field: 'phoneNumber',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
      // filter: AgGridCustomTextFilter,
      // filterParams: {
      //   type: 'text'
      // }
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
      minWidth: 120
      // filter: AgGridCustomTextFilter,
      // filterParams: {
      //   type: 'text'
      // }
    },
    {
      headerName: 'TÊN KHÁCH HÀNG',
      field: 'name',
      minWidth: 200
      // filter: AgGridCustomTextFilter,
      // filterParams: {
      //   type: 'text'
      // }
    },
    {
      headerName: 'LOẠI KHÁCH HÀNG',
      field: 'gender',
      minWidth: 150,
      valueGetter: (p) => (p.data.gender === 0 ? 'Doanh nghiệp' : 'Cá nhân'),
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
      // filter: AgGridCustomSetFilter,
      // filterParams: {
      //   itemList: [
      //     {
      //       id: '1',
      //       value: 0,
      //       label: 'Doanh nghiệp'
      //     },
      //     {
      //       id: '2',
      //       value: 1,
      //       label: 'Cá nhân'
      //     }
      //   ]
      // }
    },
    {
      headerName: 'EMAIL',
      field: 'email',
      minWidth: 250
      // filter: AgGridCustomTextFilter,
      // filterParams: {
      //   type: 'text'
      // }
    },
    {
      headerName: 'SỐ ĐIỆN THOẠI',
      field: 'phoneNumber',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
      // filter: AgGridCustomTextFilter,
      // filterParams: {
      //   type: 'text'
      // }
    },
    {
      headerName: 'GIAI ĐOẠN',
      field: 'phaseName',
      minWidth: 150,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
      // filter: AgGridCustomTextFilter,
      // filterParams: {
      //   type: 'text'
      // }
    },
    {
      headerName: 'THAO TÁC',
      field: 'action',
      cellRenderer: (e) => ActionComponentCustommer(e.data),
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
            <Col
              gutter={18}
              md={4}
              style={{ display: 'flex', justifyContent: 'right' }}
            >
              <ButtonOk
                type='primary'
                onClick={() => setIsPendingModalVisible(true)}
                style={{
                  fontSize: '14px',
                  height: '42px',
                  backgroundColor: '#FFD700'
                }}
              >
                Tài khoản chờ duyệt
              </ButtonOk>
              <ButtonOk
                type='primary'
                icon={<FiPlus />}
                onClick={() => navigate(`${domain + PATH.NEWACCOUNT}`)}
                style={{
                  fontSize: '14px',
                  width: '120px',
                  height: '42px',
                  marginLeft: '10px'
                }}
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
                  setSkip={setSkip}
                  totalItem={dataAccount?.total}
                  selectedRow={(rows) => setSelectedRowKeys(rows)}
                  onDoubleClicked={(params) => {
                    navigate(
                      `${domain + PATH.ACCOUNT}/${params.data.uuid}&${
                        params.data.code
                      }`
                    )
                  }}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <Modal
        title={<Title level={4}>Danh sách tài khoản chờ duyệt</Title>}
        style={{ minWidth: '70hw', maxHeight: '80%', overflowY: 'auto' }}
        open={isPendingModalVisible}
        onCancel={handleCancelPendingModal}
        footer={null}
        width={1200}
      >
        <AgGridTable
          colDefs={colDefsPendingAccount}
          rowData={dataPendingAccount?.items || []}
          skip={skip}
          take={take}
          setTake={setTake}
          setSkip={setSkip}
          totalItem={dataPendingAccount?.total}
          selectedRow={(rows) => setSelectedRowKeys(rows)}
        />
      </Modal>
    </>
  )
}
export default AccountManagement
