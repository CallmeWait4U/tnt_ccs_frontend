import { Card, Col, Row, Select, Typography } from 'antd'
import React from 'react'
import { useGetStatistic } from '../../api/Admin/dashboard'

import { Column, Pie } from '@ant-design/plots'

function Dashboard() {
  const { Title } = Typography
  const { data: statistic } = useGetStatistic()
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
  return (
    <>
      <div className='layout-content'>
        <Row className='rowgap-vbox' gutter={[24, 0]}>
          {statistic?.ByPhase?.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              className='mb-24'
            >
              <Card bordered={false} className='criclebox '>
                <div className='number'>
                  <Row align='middle' gutter={[24, 0]}>
                    <Col xs={18}>
                      <span>{c.phaseName}</span>
                      <Title level={3}>{c.total}</Title>
                    </Col>
                    <Col xs={6}>
                      <div
                        className='icon-box'
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontWeight: 'bold'
                        }}
                      >
                        {total > 0
                          ? ((c.total / total) * 100).toFixed(1) + '%'
                          : '0%'}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
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

        <Row gutter={[24, 0]}>
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
      </div>
    </>
  )
}

export default Dashboard
