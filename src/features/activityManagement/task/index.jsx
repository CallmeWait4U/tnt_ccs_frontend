// import { useMutation } from '@tanstack/react-query'
import {
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Switch,
  Typography
} from 'antd'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useReadTask } from '../../../api/Admin/activity'
import { useListCustomer } from '../../../api/Admin/customer'
import AgGridCustomSetFilter from '../../../components/aggrid/AgGridCustomSetFilter'
import AgGridCustomTextFilter from '../../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../../components/aggrid/AgGridTable'
const TaskDetail = () => {
  const [autoAnnounceEmp, setAutoAnnounceEmp] = useState(false)
  const [autoAnnounceCus, setAutoAnnounceCus] = useState(false)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const { Title } = Typography
  const location = useLocation()
  const paramsString = location.pathname.split('/')[4]
  const uuid = paramsString.split('&')
  const { data: taskDetail } = useReadTask(uuid[0])
  const { data: dataCustomer } = useListCustomer(skip, take)
  const layout = {
    labelCol: {
      span: 10
    },
    wrapperCol: {
      span: 14
    }
  }
  const [form] = Form.useForm()
  useEffect(() => {
    if (taskDetail) {
      form.setFieldsValue({
        name: taskDetail.name,
        priority: taskDetail.priority,
        description: taskDetail.description,
        customersNumber: taskDetail.customersNumber
      })
    }
  }, [taskDetail, form])

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
      headerName: 'MÃ KHÁCH HÀNG',
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
      headerName: 'TÊN KHÁCH HÀNG',
      field: 'name',
      minWidth: 300,
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
      field: 'employees',
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
    }
  ]
  return (
    <>
      <Row>
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
            Chi tiết nhiệm vụ
          </Title>
        </Col>
      </Row>
      <Form {...layout} form={form} name='control-hooks' key={'activityForm'}>
        <Card>
          <Row gutter={8}>
            <Col span={6} xl={6}>
              <Form.Item label={'Trạng thái'} name={'status'}>
                <Input value={'Đang trễ'} disabled />
              </Form.Item>
            </Col>
            <Col span={6} xl={6}>
              <Form.Item label={'Ngày hoàn thành'} name={'doneDate'}>
                <Input value={''} disabled />
              </Form.Item>
            </Col>
          </Row>

          <div>
            <Row gutter={16}>
              <Col span={14}>
                <Card className='infoActivity'>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        className='customHorizontal'
                        label={'Loại hoạt động'}
                        name={'activityName'}
                      >
                        <Input disabled />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        className='customHorizontal'
                        label={'Mô tả hoạt động'}
                        name={'description'}
                      >
                        <Input.TextArea style={{ height: 100 }} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={8}>
                      <Form.Item
                        className='customHorizontal'
                        label={'Ngày tạo'}
                        name={'createdDate'}
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
                        className='customHorizontal'
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
                        className='customHorizontal'
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
                  <Row gutter={16}>
                    <Col span={12}>
                      <Form.Item
                        className='customHorizontal'
                        label={'Ghi chú'}
                        name={'note'}
                      >
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
                    <Col
                      span={12}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexFlow: 'inherit'
                      }}
                    >
                      <Row
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '80%'
                        }}
                      >
                        <div>Tự Động Thông Báo Nhân Viên:</div>
                        <Switch
                          defaultChecked={false}
                          checked={autoAnnounceEmp}
                          onChange={(value) => {
                            setAutoAnnounceEmp(value)
                          }}
                        />
                      </Row>
                      <Row
                        className={autoAnnounceCus ? '' : 'off'}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          width: '80%'
                        }}
                      >
                        <div>Tự Động Thông Báo Khách Hàng:</div>
                        <Switch
                          defaultChecked={false}
                          checked={autoAnnounceCus}
                          onChange={(value) => {
                            setAutoAnnounceCus(value)
                          }}
                        />
                      </Row>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </div>
          <Row>
            <div className='table-responsive'>
              <AgGridTable
                totalItem={dataCustomer?.total || 0}
                colDefs={colDefs}
                rowData={dataCustomer?.items || []}
                skip={skip}
                take={take}
                setTake={setTake}
                selectedRow={(rows) => setSelectedRowKeys(rows)}
              />
            </div>
          </Row>
        </Card>
      </Form>
    </>
  )
}

export default TaskDetail
