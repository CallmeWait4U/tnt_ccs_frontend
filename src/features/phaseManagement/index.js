import { Button, Card, Col, Flex, Form, Input, Modal, Row, message } from 'antd'
import React, { useState } from 'react'

// Images
import { useMutation } from '@tanstack/react-query'
import { Alert, InputNumber, Typography } from 'antd'
import { FiPlus } from 'react-icons/fi'
import { RiInformationFill } from 'react-icons/ri'
import { TbTrashFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import {
  useCreatePhase,
  useDeletePhase,
  useGetAllPhases
} from '../../api/Admin/phase'
import { ButtonOk } from '../../assets/styles/button.style'
import AgGridCustomTextFilter from '../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../components/aggrid/AgGridTable'
import { PATH } from '../../contants/common'

const PhaseManagement = () => {
  // const onChange = (e) => console.log(`radio checked:${e.target.value}`);
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const [isOpen, setIsOpen] = useState(false)
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const domain = '/' + window.location.pathname.split('/')[1]
  const { Title } = Typography
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [errorMessage, setErrorMessage] = useState(false)
  const { data: dataPhase, refetch } = useGetAllPhases(skip, take)
  const { mutate: deletePhase } = useMutation({
    mutationFn: useDeletePhase,
    onSuccess: () => {
      console.log('Delete success')
      refetch()
    }
  })
  const { mutate: createPhase } = useMutation({
    mutationFn: useCreatePhase,
    onSuccess: () => {
      console.log('Create success')
      refetch()
      setErrorMessage(false)
      setIsOpen(false)
    },
    onError: (error) => {
      if (error.response.data.message === 'Phase name already exists') {
        setErrorMessage(true)
      }
    }
  })
  const onFinish = () => {
    form.validateFields().then((values) => {
      createPhase(values)
    })
  }
  const layout = {
    labelCol: {
      span: 10
    },
    wrapperCol: {
      span: 14
    }
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
              if (data.customersNumber > 0) {
                message.error('Giai đoạn đang có khách hàng')
              } else deletePhase(data.uuid)
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
            onClick={() => navigate(`${domain + PATH.PHASE}/${data.uuid}`)}
          />
        </Button>
      </div>
    )
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
      headerName: 'THỨ TỰ GIAI ĐOẠN',
      field: 'priority',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 100,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'number'
      }
    },
    {
      headerName: 'TÊN GIAI ĐOẠN',
      field: 'name',
      minWidth: 200,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'SỐ LƯỢNG KHÁCH HÀNG',
      field: 'customersNumber',
      minWidth: 100,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'number'
      }
    },
    {
      headerName: 'MÔ TẢ',
      field: 'description',
      valueGetter: (p) =>
        p.data.description === '' ? 'Không có mô tả' : p.data.description,
      maxWidth: 900,
      minWidth: 350,
      wrapText: true,
      autoHeight: true,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      }
    },
    {
      headerName: 'THAO TÁC',
      field: 'action',
      cellRenderer: (e) => ActionComponent(e.data),
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
              Danh sách giai đoạn
            </Title>
          </Col>
          <Col md={4} style={{ display: 'flex', justifyContent: 'right' }}>
            <ButtonOk
              type='primary'
              icon={<FiPlus />}
              onClick={() => setIsOpen(true)}
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
                  rowData={dataPhase?.items || []}
                  skip={skip}
                  take={take}
                  setTake={setTake}
                  setSkip={setSkip}
                  selectedRow={(rows) => setSelectedRowKeys(rows)}
                  onDoubleClicked={(params) => {
                    navigate(`${domain + PATH.PHASE}/${params.data.uuid}`)
                  }}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      {isOpen && (
        <Form
          {...layout}
          form={form}
          name='control-hooks'
          onFinish={onFinish}
          key={'activityForm'}
        >
          <Modal
            open={isOpen}
            footer={null}
            closeIcon={null}
            title={
              <div
                style={{
                  display: 'flex',
                  gap: '5px',
                  alignContent: 'space-between'
                }}
              >
                <div style={{ width: '90%' }}>
                  <h2>Thêm giai đoạn</h2>
                </div>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <Button
                    size={40}
                    style={{
                      borderColor: '#F58220',
                      color: '#F58220',
                      width: '80px'
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    Hủy
                  </Button>
                  <Button
                    style={{
                      background: '#F58220',
                      color: 'white',
                      width: '80px'
                    }}
                    size={40}
                    htmlType='submit'
                    onClick={() => onFinish()}
                  >
                    Thêm
                  </Button>
                </div>
              </div>
            }
          >
            <Row className='infoActivity' gutter={16}>
              <Col span={16}>
                <Form.Item
                  className={'customHorizontal'}
                  label='Tên giai đoạn'
                  name={'name'}
                  rules={[
                    {
                      required: true,
                      message: 'Yêu cầu thông tin'
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  className={'customHorizontal'}
                  label='Thứ tự giai đoạn'
                  name={'priority'}
                  rules={[
                    {
                      required: true,
                      message: 'Yêu cầu thông tin'
                    }
                  ]}
                >
                  <InputNumber />
                </Form.Item>
              </Col>
            </Row>
            {errorMessage && (
              <Alert message='Tên giai đoạn đã tồn tại' type='error' showIcon />
            )}
            <Row className='infoActivity'>
              <Col span={24}>
                <Form.Item
                  className={'customHorizontal'}
                  label='Mô tả'
                  name={'description'}
                >
                  <Input.TextArea
                    style={{
                      height: 120,
                      color: 'black',
                      fontSize: 14,
                      fontWeight: 'normal'
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Modal>
        </Form>
      )}
    </>
  )
}
export default PhaseManagement
