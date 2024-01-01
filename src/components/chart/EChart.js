import { Typography } from 'antd'
import ReactApexChart from 'react-apexcharts'
import eChart from './configs/eChart'

function EChart () {
  const { Title } = Typography

  return (
    <>
      <Title level={5}>Danh sách khách hàng theo nguồn</Title>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={eChart.options}
          series={eChart.series}
          type="bar"
          height={400}
        />
      </div>
    </>
  )
}

export default EChart
