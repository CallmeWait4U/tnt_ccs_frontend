import { Button, Card, Col, Flex, Row, Typography } from 'antd'
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

const ActivityManagement = () => {
  const [skip, setSkip] = useState(0)
  const [take, setTake] = useState(10)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const navigate = useNavigate()
  const { Title } = Typography

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
      valueGetter: (p) =>
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
              onClick={() => navigate(`${PATH.ACTIVITY}`)}
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
                  rowData={dataActivity}
                  skip={skip}
                  take={take}
                  setTake={setTake}
                  selectedRow={(rows) => setSelectedRowKeys(rows)}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default ActivityManagement
