import {
  Button,
  Card,
  Col,
  Flex,
  Form,
  Input,
  Modal,
  Row,
  Switch,
  Table,
  Typography
} from 'antd'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { TbTrashFilled } from 'react-icons/tb'
import styled from 'styled-components'
import { useListCustomer } from '../../../api/Admin/customer'
import AgGridCustomSetFilter from '../../../components/aggrid/AgGridCustomSetFilter'
import AgGridCustomTextFilter from '../../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../../components/aggrid/AgGridTable'
import { StyledDatepicker } from '../../component/ComponentOfForm'
import '../activityManagement.css'
const ActivityDetailForm = ({
  visible,
  setVisible,
  isUpdate,
  typeForm,
  nameActivity
}) => {
  const [isCanUpdate, setIsCanUpdate] = useState(false)
  const [customerCode, setCustomerCode] = useState('')
  const [autoAnnounceEmp, setAutoAnnounceEmp] = useState(false)
  const [autoAnnounceCus, setAutoAnnounceCus] = useState(false)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const { Title } = Typography
  const [form] = Form.useForm()
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const { data: dataCustomer, refetch } = useListCustomer(skip, take)
  const layout = {
    labelCol: {
      span: 10
    },
    wrapperCol: {
      span: 14
    }
  }

  const today = dayjs()
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
  const [tableData, setTableData] = useState([
    {
      index: 1,
      name: 'Lê Huy Ngọ',
      code: 'SP-001'
    },
    {
      index: 2,
      name: 'Lê Huy Ngọ',
      code: 'SP-001'
    }
  ])

  const addRow = () => {
    const maxIndex = tableData.reduce(
      (max, item) => (item.index > max ? item.index : max),
      0
    )
    const newItem = {
      index: maxIndex + 1,
      name: '',
      code: ''
    }
    setTableData([...tableData, newItem])
    console.log('table', tableData)
  }

  const columns = [
    {
      title: 'Mã nhân viên',
      dataIndex: 'code',
      key: 'code',
      width: '15%',
      render: (item, record, index) => (
        <Input
          defaultValue={item}
          onChange={(e) => handleCellChange(index, 'code', e.target.value)}
        />
      )
    },
    {
      title: 'Tên nhân viên chăm sóc',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      render: (item, record, index) => (
        <Input
          defaultValue={item}
          onChange={(e) => handleCellChange(index, 'name', e.target.value)}
        />
      )
    },

    {
      title: '',
      width: '7%',
      render: (item) => (
        <Button
          type='primary'
          shape='circle'
          style={{ backgroundColor: 'rgb(255,225,225)' }}
        >
          <TbTrashFilled
            color='red'
            size={18}
            onClick={() => handleDeleteRow(item.index)}
          />
        </Button>
      )
    }
  ]

  const handleCellChange = (index, field, value) => {
    const updatedTableData = [...tableData]
    updatedTableData[index][field] = value
    setTableData(updatedTableData)
  }

  const handleDeleteRow = (index) => {
    const updatedData = tableData.filter((item) => item.index !== index)
    setTableData(updatedData)
    console.log('table', tableData)
  }

  const onChangeCustomer = (value) => {
    setCustomerCode(value)
  }

  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <Form
      {...layout}
      form={form}
      name='control-hooks'
      onFinish={onFinish}
      key={'activityForm'}
    >
      <ModalStyle
        style={{ width: '1000px', maxHeight: '80%', overflowY: 'auto' }}
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
                {' '}
                {typeForm} nhiệm vụ
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
                  className={typeForm === 'Thêm' ? '' : 'hide'}
                  size={40}
                  htmlType='submit'
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
                  {typeForm === 'Chi tiết' ? 'Đóng' : 'Hủy'}
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
        <Col className='activityForm'>
          <Card>
            <Row gutter={8}>
              <Col
                span={6}
                xl={6}
                className={typeForm === 'Thêm' ? 'hide' : ''}
              >
                <Form.Item label={'Trạng thái'} name={'status'}>
                  <Input value={'Đang trễ'} disabled />
                </Form.Item>
              </Col>
              <Col
                span={6}
                xl={6}
                className={typeForm === 'Thêm' ? 'hide' : ''}
              >
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
                          <Input value={nameActivity} disabled />
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
                          <StyledDatepicker
                            value={today}
                            disabled={!isCanUpdate}
                          />
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
                          <StyledDatepicker
                            value={today}
                            disabled={!isCanUpdate}
                          />
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
                          <StyledDatepicker
                            value={today}
                            disabled={!isCanUpdate}
                          />
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
                          className={autoAnnounceEmp ? '' : 'off'}
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
                <Col span={10} gutter={16}>
                  <Card className='infoActivity'>
                    <Table
                      columns={columns}
                      dataSource={tableData}
                      pagination={false}
                    />
                    <Button
                      type='dashed'
                      onClick={addRow}
                      block
                      icon={<FiPlus />}
                    >
                      Thêm nhân viên
                    </Button>
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
        </Col>
        {/* <Row gutter={[16, 16]}>
          <Col xl={24} xxl={12}>
            <Card title={null}>
              <Form layout='vertical'>
                <Row gutter={[16, 16]}>
                  <Col span={6}>
                    <Form.Item label='Mã khách hàng'>
                      <Input value={'KH-001'} disabled={!isCanUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label='Tên khách hàng'>
                      <Input value={'Lê Huy Ngọ'} disabled={!isCanUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label='Trạng thái'>
                      <Input value={'Đang hoạt động'} disabled={!isCanUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label='Ngày hoàn thành'>
                      <StyledDatepicker value={today} disabled={!isCanUpdate} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label='Kiểu hoạt động'>
                      <StyledSelect
                        value={'Kiểm tra báo giá'}
                        disabled={!isCanUpdate}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label='Mô tả'>
                      <Input.TextArea
                        value={
                          'Kiểm tra các mail trả lời của khách hàng về báo giá và trả lời cho họ.'
                        }
                        disabled={!isCanUpdate}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={12}>
                    <Form.Item label={'Ghi chú'}>
                      <Input.TextArea disabled={!isCanUpdate} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item label='Ngày tạo'>
                      <StyledDatepicker value={today} disabled={!isCanUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label='Ngày bắt đầu'>
                      <StyledDatepicker value={today} disabled={!isCanUpdate} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label='Ngày kết thúc'>
                      <StyledDatepicker value={today} disabled={!isCanUpdate} />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
          <Col xl={24} xxl={12}>
            <Card title={<h3>Nhân viên phụ trách</h3>}>
              <Table
                columns={columns}
                dataSource={tableData}
                pagination={false}
              />
              <Button
                type='dashed'
                onClick={addRow}
                block
                icon={<FiPlus />}
                disabled={!isCanUpdate}
              >
                Thêm sản phẩm
              </Button>
            </Card>
          </Col>
        </Row> */}
      </ModalStyle>
    </Form>
  )
}
const ModalStyle = styled(Modal)`
  width: 70vw !important;
`

export default ActivityDetailForm
