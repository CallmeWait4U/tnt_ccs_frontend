import { useMutation } from '@tanstack/react-query'
import {
  Button,
  Card,
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Typography,
  message
} from 'antd'
import Modal from 'antd/lib/modal/Modal'
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { RiInformationFill } from 'react-icons/ri'
import { TbTrashFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import {
  useCreateActivity,
  useDeleteActivity,
  useGetAllActivities
} from '../../api/Admin/activity'
import { useGetPhaseList } from '../../api/Admin/customer'
import { ButtonOk } from '../../assets/styles/button.style'
import AgGridCustomTextFilter from '../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../components/aggrid/AgGridTable'
import { PATH } from '../../contants/common'
import './activityManagement.css'

const ActivityManagement = () => {
  const [searchModel, setSearchModel] = useState(undefined)
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const domain = '/' + window.location.pathname.split('/')[1]
  const navigate = useNavigate()
  const { Title } = Typography
  const [form] = Form.useForm()
  const { data: dataActivity, refetch: refetchData } = useGetAllActivities(
    skip,
    take,
    searchModel
  )
  const { data: phaseOption } = useGetPhaseList()
  const { mutate: createActivity } = useMutation({
    mutationFn: useCreateActivity,
    onSuccess: () => {
      console.log('success create activity')
      message.success('Thêm mới hoạt động thành công')
      setIsOpen(false)
      refetchData()
    }
  })
  const { mutate: deleteActivity } = useMutation({
    mutationFn: useDeleteActivity,
    onSuccess: () => {
      console.log('success delete activity')
      message.success('Xóa hoạt động thành công')
      refetchData()
    }
  })
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
            onClick={() => deleteActivity(data.uuid)}
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
            onClick={() => navigate(`${domain + PATH.ACTIVITY}/${data.uuid}`)}
          />
        </Button>
      </div>
    )
  }
  const handleFilterInputChange = async (inputValue, field) => {
    try {
      const newSearchModel = {
        [field]: {
          isCustom: field === 'phoneNumber' ? true : false,
          value: inputValue,
          valueType: 'text'
        }
      }
      console.log('fe', inputValue, searchModel)
      setSearchModel(newSearchModel)
      await refetchData()
    } catch (error) {
      console.error('Error while refetching customer data:', error)
    }
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
      headerName: 'TÊN HOẠT ĐỘNG',
      field: 'name',
      minWidth: 350,
      filter: AgGridCustomTextFilter,
      filterParams: {
        field: 'name',
        onInputChange: (inputValue) =>
          handleFilterInputChange(inputValue, 'name'),
        onDeleteInput: () => refetchData()
      }
    },
    {
      headerName: 'MÔ TẢ HOẠT ĐỘNG',
      field: 'description',
      maxWidth: 770,
      wrapText: true,
      autoHeight: true,
      filter: AgGridCustomTextFilter,
      filterParams: {
        field: 'description',
        onInputChange: (inputValue) =>
          handleFilterInputChange(inputValue, 'description'),
        onDeleteInput: () => refetchData()
      }
    },
    {
      headerName: 'SỐ LƯỢNG HOẠT ĐỘNG',
      field: 'totalTasks',
      minWidth: 250,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
    },
    {
      headerName: 'GIAI ĐOẠN',
      field: 'phaseName',
      minWidth: 350,
      // filter: AgGridCustomTextFilter,
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
        justifyContent: 'center'
      }
    }
  ]

  const onFinish = () => {
    form.validateFields().then((values) => {
      createActivity(values)
    })
  }

  const handleOpenModal = () => {
    Modal.confirm({
      content: 'Bạn có chắc chắn muốn xóa hoạt động?',
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
  const [isOpen, setIsOpen] = useState(false)
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
              Danh sách loại hoạt động
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
                  colDefs={colDefs}
                  rowData={dataActivity?.items || []}
                  skip={skip}
                  take={take}
                  setTake={setTake}
                  setSkip={setSkip}
                  selectedRow={(rows) => setSelectedRowKeys(rows)}
                  onDoubleClicked={(params) => {
                    navigate(`${domain + PATH.ACTIVITY}/${params.data.uuid}`)
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
                  <h2>Thêm loại hoạt động</h2>
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
            <Row className='infoActivity'>
              <Col span={24}>
                <Form.Item
                  className={'customHorizontal'}
                  label='Tên hoạt động'
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
            </Row>
            <Row className='infoActivity'>
              <Col span={24}>
                <Form.Item
                  className={'customHorizontal'}
                  label='Mô tả hoạt động'
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
            <Row className='infoActivity'>
              <Col span={24}>
                <Form.Item
                  label='Giai đoạn'
                  name={'phases'}
                  rules={[
                    {
                      required: true,
                      message: 'Yêu cầu thông tin'
                    }
                  ]}
                >
                  <Checkbox.Group>
                    {phaseOption?.items?.map((item) => (
                      <Checkbox value={item.uuid}>{item.name}</Checkbox>
                    ))}
                  </Checkbox.Group>
                </Form.Item>
              </Col>
            </Row>
          </Modal>
        </Form>
      )}
    </>
  )
}
export default ActivityManagement
