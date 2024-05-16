import { Button, Col, Row, Typography } from 'antd'
import moment from 'moment'
import { useState } from 'react'
import { RiInformationFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { useGetComplaint } from '../../../api/Admin/customer'
import AgGridTable from '../../../components/aggrid/AgGridTable'
import { PATH } from '../../../contants/common'

const CustomerComplaint = (uuid) => {
  const [take, setTake] = useState(100)
  const { Title } = Typography
  const domain = '/' + window.location.pathname.split('/')[1]

  const navigate = useNavigate()
  const { data: complaints } = useGetComplaint(uuid.uuid)
  const ActionComponent = (data) => {
    return (
      <div style={{ gap: '15px', display: 'flex' }}>
        <Button
          type='primary'
          shape='circle'
          style={{ backgroundColor: 'rgb(220,245,255)' }}
        >
          <RiInformationFill
            color='00AEEF'
            size={24}
            onClick={() => {
              navigate(`${domain + PATH.COMPLAINT}/${data.uuid}&${data.code}`, {
                state: data
              })
            }}
          />
        </Button>
      </div>
    )
  }
  const colComplaint = [
    {
      headerName: 'MÃ KHIẾU NẠI',
      field: 'code',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 140,
      suppressMovable: true,
      resizable: false
    },
    {
      headerName: 'LOẠI KHIẾU NẠI',
      field: 'complaintType',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 140,
      suppressMovable: true,
      resizable: false
    },
    {
      headerName: 'NGÀY GỬI',
      field: 'sentDate',
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      },
      minWidth: 130,
      valueFormatter: ({ value }) => {
        return moment(value).format('DD-MM-YYYY')
      },
      suppressMovable: true,
      resizable: false
    },
    {
      headerName: 'TRẠNG THÁI',
      field: 'status',
      minWidth: 120,
      width: 120,
      suppressMovable: true,
      resizable: false,
      sortable: false,
      cellStyle: {
        display: 'flex',
        justifyContent: 'center'
      }
    },
    {
      headerName: 'THAO TÁC',
      field: 'action',
      cellRenderer: (e) => ActionComponent(e.data),
      minWidth: 100,
      width: 100,
      suppressMovable: true,
      resizable: false,
      sortable: false,
      cellStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }
  ]

  return (
    <div>
      <Row gutter={12} style={{ marginBottom: '12px' }}>
        <Col span={19}>
          <Title level={3}>Danh sách Khiếu nại</Title>
        </Col>
      </Row>
      {/* <Table columns={columns} dataSource={data} /> */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AgGridTable
          colDefs={colComplaint}
          rowData={complaints?.items || []}
          take={take}
          setTake={setTake}
          selectedRow={(rows) => {
            console.log(rows)
          }}
          onDoubleClicked={(params) => {
            console.log(params)
          }}
          showPagination={false}
          width='700px'
          height='100%'
          autoHeight={true}
          customCustomer='customCustomer'
          rowStyle={{ borderWidth: '1px 0px 0px 0px', borderColor: '#E2E8F0' }}
        />
      </div>
    </div>
  )
}
export default CustomerComplaint
