import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "./configs/lineChart";
import { Divider } from "antd";
import { Anchor } from "antd";
import { Radio } from "antd";
import { useState } from "react";
import styled from "styled-components";

function LineChart() {
  const { Title, Paragraph } = Typography;
  const options = [
    "Tất cả",
    "Tiềm năng",
    "Đang liên hệ",
    "Đang báo giá",
    "Chính thức",
    "Thân thiết",
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <div>
        <div>
          <Title level={5}>Số lượng khách trong 6 tháng gần nhất</Title>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {options.map((option, index) => (
            <span
              key={index}
              style={{
                fontWeight: selectedOption === index ? "bold" : "normal",
                margin: "0 5px",
                cursor: "pointer",
              }}
              onClick={() => handleOptionClick(index)}
            >
              {option}
            </span>
          ))}
        </div>
      </div>

      <ReactApexChart
        className="full-width"
        options={lineChart.options}
        series={lineChart.series}
        type="area"
        height={350}
        width={"100%"}
      />
    </>
  );
}
const StyledRadioBtn = styled(Radio.Button)`
  border: unset;
`;

export default LineChart;
