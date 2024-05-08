import { Card, Col, Row, Select, Typography } from 'antd'
import React from 'react'
import {
  useGetPriceQuoteStatistic,
  useGetStatistic
} from '../../api/Admin/dashboard'

import { Column, Pie } from '@ant-design/plots'

function Dashboard() {
  const { Title } = Typography
  const { data: statistic } = useGetStatistic()
  const { data: priceQuoteStatistic } = useGetPriceQuoteStatistic()
  const sourceMap = {
    1: 'Landing Page',
    2: 'Tự khai thác',
    3: 'Khác'
  }
  const total = statistic?.ByTime[0].total

  const config = {
    data: statistic?.BySource?.map((item) => ({
      source: sourceMap[item.source],
      total: item.total
    })),
    xField: 'source',
    yField: 'total',
    // label: {
    //   text: (originData) => {
    //     const val = parseFloat(originData.value);
    //     if (val < 0.05) {
    //       return (val * 100).toFixed(1) + '%';
    //     }
    //     return '';
    //   },
    //   offset: 10,
    // },
    legend: false
  }
  const config1 = {
    data: statistic?.ByTime[0].groupByPhase,
    xField: 'phaseName',
    yField: 'total',
    // label: {
    //   text: (originData) => {
    //     const val = parseFloat(originData.value);
    //     if (val < 0.05) {
    //       return (val * 100).toFixed(1) + '%';
    //     }
    //     return '';
    //   },
    //   offset: 10,
    // },
    legend: false
  }
  const mapToKind = (data) => {
    const result = {
      'Dưới 18 tuổi': 0,
      '18 tuổi - 44 tuổi': 0,
      '44 tuổi - 65 tuổi': 0,
      'Trên 65 tuổi': 0
    }

    data?.forEach((item) => {
      const age = item.age
      if (age < 18) {
        result['Dưới 18 tuổi'] += item.total
      } else if (age <= 44) {
        result['18 tuổi - 44 tuổi'] += item.total
      } else if (age <= 65) {
        result['44 tuổi - 65 tuổi'] += item.total
      } else {
        result['Trên 65 tuổi'] += item.total
      }
    })

    return Object?.entries(result)?.map(([type, value]) => ({
      type,
      value: value
    }))
  }
  const groupedByAge = mapToKind(statistic?.ByAge)
  const config2 = {
    data: groupedByAge,
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
  const config3 = {
    data: statistic?.ByLocation?.map((item) => ({
      city: 'TP Hồ Chí Minh',
      total: item.total
    })),
    angleField: 'total',
    colorField: 'city',
    label: {
      text: 'total',
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
  const config4 = {
    data: [
      { status: 'Đã giải quyết', quantity: 10 },
      { status: 'Chưa giải quyết', quantity: 20 },
      { status: 'Đã hủy', quantity: 5 }
    ],
    angleField: 'quantity',
    colorField: 'status',
    label: {
      text: 'quantity',
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
  console.log('pricequote', priceQuoteStatistic)
  return (
    <>
      <div className='layout-content'>
        <Row className='rowgap-vbox'>
          <div style={{ fontSize: '44px' }} className='ml-6'>
            <span style={{ fontSize: '50px' }}>
              {priceQuoteStatistic?.billQuantity}
            </span>{' '}
            hóa đơn đã bán!
          </div>
        </Row>
        <Row className='rowgap-vbox'>
          <div style={{ fontSize: '24px' }} className='mb-2 ml-6'>
            <span style={{ fontSize: '30px' }}>
              {priceQuoteStatistic?.percerChangeToBill}%{' '}
            </span>
            báo giá chuyển thành hóa đơn
          </div>
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={14} className='mb-24'>
            <Card bordered={false} className='criclebox h-full'>
              <Row>
                <Title level={4}>
                  Biểu đồ hiển thị số khách hàng trong vòng:
                </Title>
                <Select
                  defaultValue='1'
                  options={[
                    { value: '1', label: '6 tháng' },
                    { value: '2', label: '12 tháng' }
                  ]}
                ></Select>
              </Row>
              <Column {...config1} />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={10} className='mb-24'>
            <Card bordered={false} className='criclebox h-full'>
              <Title level={4}>
                Biểu đồ hiển thị số khách hàng dựa theo nguồn
              </Title>
              <Column {...config} />
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 0]} className='mb-2'>
          <Col xs={24} sm={24} md={8} lg={8} xl={10}>
            <Card bordered={false}>
              <div>
                <Title level={5}>Khách hàng phân theo độ tuổi</Title>
              </div>
              <Pie {...config2} />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={10}>
            <Card bordered={false}>
              <div>
                <Title level={5}>Khách hàng phân theo khu vực</Title>
              </div>
              <Pie {...config3} />
            </Card>
          </Col>
        </Row>
        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={10}>
            <Card bordered={false}>
              <div>
                <Title level={5}>Tổng số khiếu nại: 35</Title>
              </div>
              <Pie {...config4} />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Dashboard
