import { Input } from "antd";
import { Select } from "antd";
import { DatePicker } from "antd";
import { Flex } from "antd";
import { Carousel } from "antd";
import { message } from "antd";
import { Form } from "antd";
import { Card, Col, Collapse, Row, Tabs, theme } from "antd";
import AdditionalInformation from "../moreData/AdditionalInformation";
import ActivityHistory from "../moreData/ActivityHistory";
import {
  StyledDatepicker,
  StyledSelect,
} from "../../component/ComponentOfForm";
import CompanyInformation from "./CompanyInformation";
import { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import ChatBox from "../../../components/boxChat/BoxChat";

const CustomerDetail = () => {
  const [typeCustomer, setTypeCustomer] = useState(1);
  const items = [
    {
      label: "Thông tin bổ sung",
      key: "1",
      children: <AdditionalInformation />,
    },
    {
      label: "Hoạt động",
      key: "2",
      children: <ActivityHistory />,
    },
    {
      label: "Gửi tin nhắn",
      key: "3",
      children: <ChatBox />,
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Row gutter={[8, 16]}>
      <Col xs={24} lg={24} xl={24} xxl={14}>
        <Card title={"Thông tin chi tiết"}>
          <Form>
            <>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    label={"Loại khách hàng"}
                    rules={[
                      {
                        require: true,
                        message: "this field is required!",
                      },
                    ]}
                  >
                    <StyledSelect
                      value={typeCustomer}
                      onChange={setTypeCustomer}
                      options={[
                        { value: 1, label: "Công ty" },
                        { value: 2, label: "Cá nhân" },
                      ]}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  {" "}
                  <Form.Item
                    label={"Giai đoạn"}
                    rules={[
                      {
                        require: true,
                        message: "this field is required!",
                      },
                    ]}
                  >
                    <Select />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  {" "}
                  <Form.Item
                    label={"Mã khách hàng"}
                    rules={[
                      {
                        require: true,
                        message: "this field is required!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item label={"Nguồn khách hàng"}>
                    <StyledSelect />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label={"Ngày tạo"}>
                    <StyledDatepicker />
                  </Form.Item>
                </Col>
              </Row>
            </>
          </Form>
          <Row>
            {typeCustomer === 1 ? (
              <CompanyInformation />
            ) : (
              <PersonalInformation />
            )}
          </Row>
        </Card>
      </Col>
      <Col xs={24} sm={24} xl={24} xxl={10}>
        <Tabs
          defaultActiveKey="1"
          items={items}
          style={{
            background: "#ffffff",
            padding: "15px",
            borderRadius: "10px",
          }}
        />
      </Col>
    </Row>
  );
};
export default CustomerDetail;
