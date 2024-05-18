import { useMutation } from '@tanstack/react-query'
import {
  Button,
  Card,
  Col,
  DatePicker,
  Flex,
  Form,
  Input,
  Modal,
  Row,
  Switch,
  Typography
} from 'antd'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
// import { useListCustomer } from '../../../api/Admin/customer'
import { message } from 'antd'
import { AiOutlineCheck } from 'react-icons/ai'
import {
  useCreateTask,
  useListCustomerWithPhase
} from '../../../api/Admin/activity'
import AgGridCustomSetFilter from '../../../components/aggrid/AgGridCustomSetFilter'
import AgGridCustomTextFilter from '../../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../../components/aggrid/AgGridTable'
import '../activityManagement.css'
const ActivityDetailForm = ({
  visible,
  setVisible,
  phaseList,
  activityUUID
}) => {
  const [autoAnnounceEmp, setAutoAnnounceEmp] = useState(false)
  const [autoAnnounceCus, setAutoAnnounceCus] = useState(false)
  const { Title } = Typography
  const [form1] = Form.useForm()
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const [searchModel, setSearchModel] = useState(null)

  const { data: dataCustomer, refetch } = useListCustomerWithPhase(
    skip,
    take,
    searchModel
  )
  // eslint-disable-next-line no-unused-vars
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const { mutate: createTask } = useMutation({
    mutationFn: useCreateTask,
    onSuccess: () => {
      console.log('Create task success')
      message.success('Tạo nhiệm vụ thành công')
    }
  })
  useEffect(() => {
    if (phaseList) {
      setSearchModel({
        phaseName: {
          isCustom: true,
          value: phaseList,
          valueType: 'set'
        }
      })
      refetch()
    }
  }, [phaseList, refetch])

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
          style={{ backgroundColor: '#FEF3E9' }}
          onClick={() => {
            form1.setFieldsValue({
              customerUUID: data.uuid,
              employees: data.employees.map((employee) => employee.uuid)
            })
          }}
        >
          <AiOutlineCheck color='#EBB425' size={24} />
        </Button>
      </div>
    )
  }
  const colDefs = [
    {
      headerName: 'STT',
      field: 'index',
      valueGetter: (p) => Number(p.node?.rowIndex) + skip + 1,
      minWidth: 60,
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
      minWidth: 150,
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
      headerName: 'NHÂN VIÊN CHĂM SÓC',
      field: 'employees',
      minWidth: 300,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
      },
      valueGetter: (params) => {
        if (params.data.employees) {
          return params.data.employees.map((employee) => employee.name).join()
        }
        return ''
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
  const onFinish = () => {
    form1.validateFields().then((values) => {
      createTask({ ...values, activityUUID: activityUUID })
    })
  }
  const today = dayjs(new Date())
  return (
    <Form
      {...layout}
      form={form1}
      initialValues={{
        createdDate: today,
        autoAnnounceCus: false,
        autoAnnounceEmp: false
      }}
      onFinish={onFinish}
      key={'activityForm'}
    >
      <Modal
        style={{ minWidth: '70hw', maxHeight: '80%', overflowY: 'auto' }}
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Title
                level={4}
                style={{
                  marginLeft: '10px',
                  marginTop: '4px',
                  fontWeight: '700'
                }}
              >
                Thêm nhiệm vụ
              </Title>
            </div>
            <Flex gap='small' align='flex-start' vertical>
              <Flex gap='small' wrap='wrap'>
                <Button
                  style={{
                    background: '#F58220',
                    color: 'white',
                    width: '80px',
                    height: '40px'
                  }}
                  size={40}
                  htmlType='submit'
                  onClick={() => {
                    onFinish()
                  }}
                >
                  Thêm
                </Button>
                <Button
                  size={40}
                  style={{
                    borderColor: '#F58220',
                    color: '#F58220',
                    width: '80px',
                    height: '40px'
                  }}
                  onClick={() => setVisible(false)}
                >
                  Hủy
                </Button>
              </Flex>
            </Flex>
          </div>
        }
        closeIcon={<></>}
        open={visible}
        onCancel={() => {
          setVisible(false)
        }}
        footer={<></>}
      >
        <Card>
          <Row gutter={8}>
            <Col span={8}>
              <Form.Item
                label={'Ngày tạo'}
                name={'createDate'}
                rules={[
                  {
                    required: true,
                    message: 'Yêu cầu thông tin'
                  }
                ]}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={'Ngày bắt đầu'}
                name={'startDate'}
                rules={[
                  {
                    required: true,
                    message: 'Yêu cầu thông tin'
                  }
                ]}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label={'Ngày kết thúc'}
                name={'endDate'}
                rules={[
                  {
                    required: true,
                    message: 'Yêu cầu thông tin'
                  }
                ]}
              >
                <DatePicker />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={8}>
            <Col span={8}>
              <Form.Item label={'Ghi chú'} name={'note'}>
                <Input.TextArea
                  style={{
                    height: 100,
                    color: 'black',
                    fontSize: 14,
                    fontWeight: 'normal'
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item
                name='autoAnnounceEmp'
                label='Tư động thông báo nhân viên:'
              >
                <Switch
                  // defaultChecked={false}
                  // style={{ backgroundColor: '#f5f5f5' }}
                  checked={autoAnnounceEmp}
                  onChange={(value) => {
                    setAutoAnnounceEmp(value)
                  }}
                />
              </Form.Item>
              <Form.Item
                name='autoAnnounceCus'
                label='Tự động thông báo khách hàng:'
              >
                <Switch
                  // defaultChecked={false}
                  checked={autoAnnounceCus}
                  onChange={(value) => {
                    setAutoAnnounceCus(value)
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={8}>
              <Form.Item name='customerUUID' label='Khách hàng:'>
                <Input />
              </Form.Item>
            </Col>
            <Form.Item
              name='employees'
              label='Nhân viên:'
              style={{ display: 'none' }}
            >
              <Input />
            </Form.Item>
          </Row>
          <Row span={24}>
            <AgGridTable
              totalItem={dataCustomer?.total || 0}
              colDefs={colDefs}
              rowData={dataCustomer?.items || []}
              skip={skip}
              take={take}
              setTake={setTake}
              setSkip={setSkip}
              selectedRow={(rows) => setSelectedRowKeys(rows)}
              refetchData={refetch}
            />
          </Row>
        </Card>
      </Modal>
    </Form>
  )
}

export default ActivityDetailForm
