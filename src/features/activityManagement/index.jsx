import { Button, Card, Col, Flex, Form, Input, Row, Typography } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { RiInformationFill } from 'react-icons/ri'
import { TbTrashFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { ButtonOk } from '../../assets/styles/button.style'
import AgGridCustomTextFilter from '../../components/aggrid/AgGridCustomTextFilter'
import AgGridTable from '../../components/aggrid/AgGridTable'
import { PATH } from '../../contants/common'
import { dataActivity } from '../../dataMock/DataActivity'
import './activityManagement.css'

const ActivityManagement = () => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const navigate = useNavigate()
  const { Title } = Typography
  const [form] = Form.useForm()

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
            onClick={() => navigate(`${PATH.ACTIVITY}/${data.id}`)}
          />
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
      headerName: 'TÊN LOẠI HOẠT ĐỘNG',
      field: 'nameActivity',
      minWidth: 350,
      filter: AgGridCustomTextFilter,
      filterParams: {
        type: 'text'
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
        type: 'text'
      }
    },
    {
      headerName: 'SỐ LƯỢNG HOẠT ĐỘNG',
      field: 'total',
      valueFormatter: (p) =>
        Math.floor(p.data.total)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'),
      minWidth: 250,
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

  const onFinish = (values) => {
    console.log(values)
  }

  const handleOpenModal = () => {
    Modal.confirm({
      content: 'Bạn có chắc chắn muốn xóa loại hoạt động?',
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
                  rowData={dataActivity}
                  skip={skip}
                  take={take}
                  setTake={setTake}
                  selectedRow={(rows) => setSelectedRowKeys(rows)}
                  onDoubleClicked={(params) => {
                    navigate(`${PATH.ACTIVITY}/${params.data.id}`)
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
                  label='Tên loại hoạt động'
                  name={'activityName'}
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
          </Modal>
        </Form>
      )}
    </>
  )
}
export default ActivityManagement
