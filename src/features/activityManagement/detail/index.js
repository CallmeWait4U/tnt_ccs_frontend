import { Button, Card, Col, Flex, Form, Input, Row } from 'antd'

// Images
import { useMutation } from '@tanstack/react-query'
import { Checkbox, Modal, Typography, message } from 'antd'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { FiPlus } from 'react-icons/fi'
import { RiInformationFill } from 'react-icons/ri'
import { TbTrashFilled } from 'react-icons/tb'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  useDeleteTask,
  useGetAllTasks,
  useReadActivity,
  useUpdateActivity
} from '../../../api/Admin/activity'
import { useGetPhaseList } from '../../../api/Admin/customer'
import { ButtonOk } from '../../../assets/styles/button.style'
import AgGridCustomDateFilter from '../../../components/aggrid/AgGridCustomDateFilter'
import AgGridCustomSetFilter from '../../../components/aggrid/AgGridCustomSetFilter'
import AgGridCustomTextFilter from '../../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../../components/aggrid/AgGridTable'
import { PATH } from '../../../contants/common'
import ActivityDetailForm from '../form/ActivityDetailForm'

const ActivityDetail = () => {
  const [isUpdate, setIsUpdate] = useState(false)
  const [isShowFormDetail, setIsShowFormDetail] = useState(false)
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const { Title } = Typography
  const navigate = useNavigate()
  const domain = '/' + window.location.pathname.split('/')[1]
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const location = useLocation()
  const paramsString = location.pathname.split('/')[3]
  const uuid = paramsString.split('&')
  const { data: activityDetail } = useReadActivity(uuid[0])
  const { data: tasks, refetch } = useGetAllTasks(skip, take, uuid[0])
  const { data: phaseList } = useGetPhaseList()
  const { mutate: activityUpdate } = useMutation({
    mutationFn: useUpdateActivity,
    onSuccess: () => {
      console.log('Update success')
      message.success('Cập nhật hoạt động thành công')
    },
    onError: (error) => {
      console.log('Update error', error)
      message.error('Cập nhật hoạt động thất bại')
    }
  })
  const { mutate: taskDelete } = useMutation({
    mutationFn: useDeleteTask,
    onSuccess: () => {
      console.log('Delete success')
      message.success('Xóa nhiệm vụ thành công')
      refetch()
    },
    onError: (error) => {
      console.log('Delete error', error)
      message.error('Xóa nhiệm vụ thất bại')
    }
  })
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({
      name: activityDetail?.name,
      description: activityDetail?.description,
      phases: activityDetail?.phaseName
    })
  }, [activityDetail, form])
  const phaseOptions = phaseList?.items?.map((item) => ({
    label: item.name,
    value: item.name,
    uuid: item.uuid
  }))
  const onFinish = (values) => {
    const mappedValues = {
      ...values,
      phases: values.phases?.map((phaseName) => {
        const phaseOption = phaseOptions.find(
          (option) => option.label === phaseName
        )
        return phaseOption ? phaseOption.uuid : phaseName
      }),
      uuid: uuid[0]
    }
    activityUpdate(mappedValues)
    setIsUpdate(false)
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
            onClick={() => taskDelete(data.uuid)}
          />
        </Button>
        <Button
          type='primary'
          shape='circle'
          style={{ backgroundColor: 'rgb(220,245,255)' }}
        >
          <RiInformationFill
            color='#00AEEF'
            size={24}
            onClick={() =>
              navigate(`${domain + PATH.ACTIVITY}/${uuid}/task/${data.uuid}`)
            }
          />
        </Button>
        <Button
          type='primary'
          shape='circle'
          style={{ backgroundColor: '#FEF3E9' }}
          disabled={data.status !== 'INPROGRESS'}
        >
          <AiOutlineCheck color='#EBB425' size={24} />
        </Button>
      </div>
    )
  }

  const handleOpenModal = () => {
    Modal.confirm({
      content: 'Bạn có chắc chắn muốn xóa hoạt động đã chọn?',
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
  const status = {
    OVERDUE: 'Đã trễ',
    INPROGRESS: 'Đang diễn ra',
    COMPLETED: 'Hoàn thành'
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
      headerName: 'NGÀY TẠO',
      field: 'createDate',
      minWidth: 200,
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
      },
      filterParams: {
        type: 'date'
      },
      valueFormatter: ({ value }) => {
        return moment(value).format('DD-MM-YYYY')
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
      },
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
      minWidth: 200,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomSetFilter,
      filterParams: {
        type: 'text'
      },
      valueFormatter: ({ value }) => {
        return (value = status[value])
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
      <Form className='tabled' form={form} onFinish={onFinish}>
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
              Chi tiết hoạt động
            </Title>
          </Col>
          <Col md={4} style={{ display: 'flex', justifyContent: 'right' }}>
            {isUpdate ? (
              <Flex gap='small' align='flex-start' vertical>
                <Flex gap='small' wrap='wrap'>
                  <Button
                    size={40}
                    style={{
                      borderColor: '#F58220',
                      color: '#F58220',
                      width: '80px',
                      height: '40px'
                    }}
                    onClick={() => setIsUpdate(false)}
                  >
                    Hủy
                  </Button>
                  <Button
                    style={{
                      background: '#F58220',
                      color: 'white',
                      width: '80px',
                      height: '40px'
                    }}
                    size={40}
                    htmlType='submit'
                  >
                    Lưu
                  </Button>
                </Flex>
              </Flex>
            ) : (
              <Flex gap='small' align='flex-start' vertical>
                <Flex gap='small' wrap='wrap'>
                  <div style={{ width: '80px' }}></div>
                  <ButtonOk
                    onClick={() => setIsUpdate(true)}
                    style={{
                      background: '#F58220',
                      color: 'white',
                      width: '80px',
                      height: '40px'
                    }}
                  >
                    Chỉnh sửa
                  </ButtonOk>
                </Flex>
              </Flex>
            )}
          </Col>
        </Row>
        <Card>
          <Row gutter={[24, 0]}>
            <Col span={8}>
              <Form.Item
                label='Tên hoạt động'
                name={'name'}
                rules={[{ required: true, message: 'Yêu cầu thông tin' }]}
              >
                <Input disabled={!isUpdate} />
              </Form.Item>
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
                <Checkbox.Group
                  options={phaseOptions}
                  // defaultValue={activityDetail?.phaseName}
                  disabled={!isUpdate}
                />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item label='Mô tả hoạt động' name={'description'}>
                <Input.TextArea
                  disabled={!isUpdate}
                  style={{
                    height: 100,
                    color: 'black',
                    fontSize: 14,
                    fontWeight: 'normal'
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[24, 0]} style={{ marginBottom: '14px' }}>
            <Col md={20}>
              <Title level={4} style={{ paddingLeft: '20px' }}>
                Danh sách nhiệm vụ
              </Title>
            </Col>
            <Col
              md={4}
              style={{
                display: 'flex',
                justifyContent: 'right',
                gap: '12px'
              }}
            >
              <ButtonOk
                type='primary'
                icon={<FiPlus />}
                onClick={() => {
                  setIsShowFormDetail(true)
                }}
                style={{ fontSize: '14px', width: '120px', height: '42px' }}
              >
                Thêm mới
              </ButtonOk>
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

          <Row gutter={[24, 0]}>
            <Col xs='24' xl={24}>
              <div className='table-responsive'>
                <AgGridTable
                  colDefs={colDefs}
                  rowData={tasks?.items || []}
                  skip={skip}
                  take={take}
                  setTake={setTake}
                  setSkip={setSkip}
                  refetchData={refetch}
                  selectedRow={(rows) => setSelectedRowKeys(rows)}
                  totalItem={tasks?.total || 0}
                  height='415px'
                />
              </div>
            </Col>
          </Row>
        </Card>
      </Form>
      <ActivityDetailForm
        visible={isShowFormDetail}
        setVisible={setIsShowFormDetail}
        phaseList={activityDetail?.phaseName}
        activityUUID={uuid[0]}
      />
    </>
  )
}
export default ActivityDetail
