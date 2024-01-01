import { Button, Card, Col, Flex, Row } from 'antd'

import CustomToggleButton from '../component/CustomToggleButton'

import { FiFilter, FiInfo, FiTrash2 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import FilterColumn from '../../components/filterColumn/FilterColumn'
import BaseTable from '../../components/table/BaseTable'

const ActivityManagement = () => {
  const navigate = useNavigate()
  const columns = [
    {
      title: 'TÊN HÀNH ĐỘNG',
      dataIndex: 'name',
      key: 'name',
      width: '25%',
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters
      }) => (
        <FilterColumn
          selectedKeys={selectedKeys}
          setSelectedKeys={setSelectedKeys}
          confirm={confirm}
          clearFilters={clearFilters}
        />
      ),
      filterIcon: (filtered) => (
        <FiFilter style={{ color: filtered ? '#1890ff' : undefined }} />
      )
    },

    {
      title: 'Mô tả hoạt động',
      dataIndex: 'decripstion',
      key: 'decripstion'
    },

    {
      title: 'Số lượng hoạt động',
      dataIndex: 'count',
      key: 'count'
    },
    {
      title: 'THAO TÁC',
      dataIndex: '',
      key: 'x',
      width: '7%',
      render: () => (
        <div style={{ gap: '15px', display: 'flex' }}>
          <FiTrash2 size={24} />
          <FiInfo size={24} />
        </div>
      )
    }
  ]
  const dataActivity = [
    {
      name: 'Chiến dịch quảng cáo qua mail',
      decripstion: 'Gửi mail cho các khách hàng mới được lấy thông tin về .',
      count: 10
    },
    {
      name: 'Chiến dịch quảng cáo qua mail',
      decripstion: 'Gửi mail cho các khách hàng mới được lấy thông tin về .',
      count: 10
    },
    {
      name: 'Chiến dịch quảng cáo qua mail',
      decripstion: 'Gửi mail cho các khách hàng mới được lấy thông tin về .',
      count: 10
    },
    {
      name: 'Chiến dịch quảng cáo qua mail',
      decripstion: 'Gửi mail cho các khách hàng mới được lấy thông tin về .',
      count: 10
    },
    {
      name: 'Chiến dịch quảng cáo qua mail',
      decripstion: 'Gửi mail cho các khách hàng mới được lấy thông tin về .',
      count: 10
    },

    {
      name: 'Chiến dịch quảng cáo qua mail',
      decripstion: 'Gửi mail cho các khách hàng mới được lấy thông tin về .',
      count: 10
    },
    {
      name: 'Chiến dịch quảng cáo qua mail',
      decripstion: 'Gửi mail cho các khách hàng mới được lấy thông tin về .',
      count: 10
    },
    {
      name: 'Chiến dịch quảng cáo qua mail',
      decripstion: 'Gửi mail cho các khách hàng mới được lấy thông tin về .',
      count: 10
    },

    {
      name: 'Chiến dịch quảng cáo qua mail',
      decripstion: 'Gửi mail cho các khách hàng mới được lấy thông tin về .',
      count: 10
    }
  ]

  //   const data = dataActivity.map((item) => {
  //     return {
  //       key: "1",
  //       code: (
  //         <>
  //           <Avatar.Group>
  //             <Avatar className="shape-avatar" size={40} src={face2}></Avatar>
  //             <div
  //               className="avatar-info"
  //               avatar-info
  //               style={{ color: "#726BEA" }}
  //             >
  //               {item.code}
  //             </div>
  //           </Avatar.Group>
  //         </>
  //       ),
  //       name: (
  //         <>
  //           <div className="avatar-info">{item.name}</div>
  //         </>
  //       ),

  //       email: (
  //         <>
  //           <div className="avatar-info">{item.email}</div>
  //         </>
  //       ),
  //       number: (
  //         <>
  //           <div className="avatar-info">{item.number}</div>
  //         </>
  //       ),
  //       employee: (
  //         <>
  //           <div className="avatar-info">{item.employee}</div>
  //         </>
  //       ),
  //       source: (
  //         <>
  //           <div className="avatar-info">{item.source}</div>
  //         </>
  //       ),
  //       phase: (
  //         <>
  //           <div className="avatar-info">{item.phase}</div>
  //         </>
  //       ),
  //     };
  //   });

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title={<CustomToggleButton />}
              extra={
                <>
                  <Flex wrap="wrap" gap="small">
                    <Button type="primary" danger style={{ height: '40px' }}>
                      Xóa
                    </Button>
                    <Button
                      type="primary"
                      style={{ height: '40px', background: 'blue' }}
                      onClick={() => navigate('/new-customer')}
                    >
                      Tạo mới
                    </Button>
                  </Flex>
                </>
              }
            >
              <div className="table-responsive">
                <BaseTable
                  columns={columns}
                  data={dataActivity}
                  rowKey={(record) => record.id}
                  onRow={(record, rowIndex) => {
                    return {
                      onClick: () => {
                        console.log('bam')
                        navigate('/activity/1', {
                          state: { page: 'detail' },
                          replace: true
                        })
                      }
                    }
                  }}
                  className="ant-border-space"
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
