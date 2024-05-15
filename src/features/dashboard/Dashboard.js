import { Card, Col, Row, Select, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import {
  useCustomerByLocation,
  useCustomerFollowingSource,
  useCustomerPhaseByMonth,
  useGetCustomerPerPhase,
  usePriceQuoteByMonth
} from '../../api/Admin/dashboard'

import { Column, Pie } from '@ant-design/plots'

const Dashboard = () => {
  const { Title } = Typography
  const [time, setTime] = useState('6')
  const [time2, setTime2] = useState('6')
  const [chartData, setChartData] = useState([])
  const [chartData2, setChartData2] = useState([])
  const [chartData3, setChartData3] = useState([])
  const [chartData4, setChartData4] = useState([])
  const { data: customerPerPhase } = useGetCustomerPerPhase()
  const { data: customerFollowingSource } = useCustomerFollowingSource()
  const sourceMap = {
    1: 'Landing Page',
    2: 'Tự khai thác',
    3: 'Khác'
  }
  const { data: customerPhaseByMonth, refetch } = useCustomerPhaseByMonth(time)
  const { data: priceQuoteByMonth } = usePriceQuoteByMonth(time2)
  const { data: customerByLocation } = useCustomerByLocation()
  useEffect(() => {
    if (customerPhaseByMonth) {
      const transformedData = customerPhaseByMonth.items.flatMap((item) =>
        item.listPhase.map((phase) => ({
          month: `Tháng ${item.time}`,
          phase: phase.phaseName,
          numCustomers: phase.numCustomers
        }))
      )
      setChartData(transformedData)
    }
  }, [customerPhaseByMonth])
  useEffect(() => {
    if (priceQuoteByMonth) {
      const transformedData = priceQuoteByMonth.items.flatMap((item) => [
        {
          month: `Tháng ${item.time}`,
          type: 'Số lượng báo giá',
          value: item.numPriceQuotes
        },
        {
          month: `Tháng ${item.time}`,
          type: 'Số lượng báo giá chuyển đổi',
          value: item.numPriceQuotesConvertBill
        }
      ])
      setChartData2(transformedData)
    }
  }, [priceQuoteByMonth])
  useEffect(() => {
    if (customerFollowingSource) {
      const transformedData = customerFollowingSource.items.map((item) => ({
        type: sourceMap[item.sourceName],
        value: item.numCustomers
      }))
      setChartData3(transformedData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerFollowingSource])
  useEffect(() => {
    if (customerByLocation) {
      const mappedData = customerByLocation.items.map((item) => ({
        city: item.city === 'other' ? 'Khác' : item.city,
        value: item.numCustomer
      }))
      setChartData4(mappedData)
    }
  }, [customerByLocation])

  const handleTimeChange = async (value) => {
    setTime(value)
    await refetch()
  }
  const handleTimeChange2 = async (value) => {
    setTime2(value)
    await refetch()
  }

  const chart1 = {
    data: chartData,
    xField: 'month',
    yField: 'numCustomers',
    sort: {
      reverse: false,
      by: 'y'
    },
    colorField: 'phase',
    stack: true
  }
  const chart2 = {
    data: chartData2,
    xField: 'month',
    yField: 'value',
    sort: {
      reverse: false,
      by: 'y'
    },
    colorField: 'type',
    stack: true
  }
  const chart3 = {
    data: chartData3,
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold'
      }
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5
      }
    }
  }
  const chart4 = {
    data: chartData4,
    angleField: 'value',
    colorField: 'city',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold'
      }
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5
      }
    }
  }
  return (
    <>
      <Row>
        <Col md={20}>
          <Title
            level={4}
            style={{
              marginLeft: '10px',
              marginTop: '4px',
              paddingBottom: '12px',
              fontWeight: '700'
            }}
          >
            {' '}
            Thống kê
          </Title>
        </Col>
      </Row>
      <Row gutter={32} className='pb-8'>
        {customerPerPhase?.items?.map((item) => (
          <Col span={4}>
            <Card bordered={false} className='criclebox'>
              <div className='number'>
                <Row align='middle' gutter={[24, 0]}>
                  <Col xs={18}>
                    <span>{item.name}</span>
                    <Title level={2}>{item.numCustomers} </Title>
                  </Col>
                  <Col xs={6}>
                    {item.isIncreased ? (
                      <div
                        className='icon-box font-bold'
                        style={{
                          backgroundColor: 'limegreen',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        +
                        {item.ratioPreviousMonth === -1
                          ? 0
                          : item.ratioPreviousMonth}
                        %
                      </div>
                    ) : (
                      <div
                        className='icon-box font-bold'
                        style={{
                          backgroundColor: 'red',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        -{item.ratioPreviousMonth}%
                      </div>
                    )}
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={24} className='pb-8'>
        <Col span={10}>
          <Card bordered={false} className='criclebox h-full'>
            <Row>
              <Title level={4}>
                Biểu đồ hiển thị số khách hàng trong vòng:
              </Title>
              <Select
                defaultValue='6'
                options={[
                  { value: '6', label: '6 tháng' },
                  { value: '12', label: '12 tháng' },
                  { value: 'all', label: 'Tất cả' }
                ]}
                onChange={handleTimeChange}
              ></Select>
            </Row>
            <Column {...chart1} />
          </Card>
        </Col>
        <Col span={10} offset={2}>
          <Card bordered={false} className='criclebox h-full'>
            <Row>
              <Title level={4}>Biểu đồ hiển thị số báo giá trong vòng:</Title>
              <Select
                defaultValue='6'
                options={[
                  { value: '6', label: '6 tháng' },
                  { value: '12', label: '12 tháng' },
                  { value: 'all', label: 'Tất cả' }
                ]}
                onChange={handleTimeChange2}
              ></Select>
            </Row>
            <Column {...chart2} />
          </Card>
        </Col>

        {/* <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={10}>
          <Card bordered={false}>
            <div>
              <Title level={5}>Tổng số khiếu nại: 35</Title>
            </div>
            <Pie {...config4} />
          </Card>
              </Col>
              </Row> */}
      </Row>
      <Row gutter={[24, 0]}>
        <Col span={10}>
          <Card bordered={false}>
            <div>
              <Title level={5}>Khách hàng phân theo nguồn khách hàng</Title>
            </div>
            <Pie {...chart3} />
          </Card>
        </Col>
        <Col span={10} offset={2}>
          <Card bordered={false}>
            <div>
              <Title level={5}>Khách hàng phân theo khu vực</Title>
            </div>
            <Pie {...chart4} />
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard
